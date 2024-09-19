from fastapi import Header, HTTPException
from langchain_community.document_loaders import (
    TextLoader,
    UnstructuredMarkdownLoader,
    UnstructuredExcelLoader,
    Docx2txtLoader,
    PyPDFLoader,
    UnstructuredPowerPointLoader,
)
import math
from pypdf import PdfReader
from langchain import LLMChain
from langchain_core.prompts import PromptTemplate
from langchain_postgres import PGVector
from db import get_db, DATABASE_URL
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_text_splitters import CharacterTextSplitter
import dotenv
import json
import os


dotenv.load_dotenv()
ROOT_DIRECTORY = os.getcwd()
postgres_connection = DATABASE_URL


def get_token(token: str = Header(...)):
    """
    Extract and validate the authentication token from the request header.

    Parameters:
    - token (str): The token provided in the request header.

    Returns:
    - str: The extracted token if present.

    Raises:
    - HTTPException: 401 if the token is missing or invalid.
    """
    if not token:
        raise HTTPException(status_code=401, detail="Token missing or invalid")
    return token


def load_document(path: str, extension: str, metadata: dict):
    """
    Load a document based on its file extension.
    Args:
        path: Path to the document file.
        extension: File extension of the document.
        metadata: Additional metadata associated with the document.
    Returns:
        The loaded document or None if an error occurs.
    """
    try:

        if extension == "txt":
            document = TextLoader(path, encoding="utf-8").load()
        elif extension == "md":
            document = UnstructuredMarkdownLoader(path).load()
        elif extension == "xlsx":
            document = UnstructuredExcelLoader(path, mode="elements").load()
        elif extension == "xls":
            document = UnstructuredExcelLoader(path, mode="elements").load()
        elif extension == "docx":
            document = Docx2txtLoader(path).load()
        elif extension == "pdf":
            document = PyPDFLoader(path).load()
        elif extension == "pptx":
            document = UnstructuredPowerPointLoader(path).load()
        else:
            document = TextLoader(path, encoding="utf-8").load()
    except Exception as e:
        print(f"Exception {e}")
        document = None
    return document


def split_document_content(document):
    """
    Split the content of a document into chunks.
    Args:
        document: The document to split.
    Returns:
        A list of document chunks.
    """
    text_splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=0)
    docs = text_splitter.split_documents(document)
    return docs


def generate_openAI_embeddings(
    openai_key,
):
    """
    Generate OpenAI embeddings using the API key associated with the given token.

    Parameters:
    - token (str): User's authentication token.

    Returns:
    - OpenAIEmbeddings: An instance configured with the user's API key.
    """
    embeddings = OpenAIEmbeddings(api_key=openai_key)
    return embeddings


def generate_embeddings(document, user_token, project_id, openai_key):
    """
    Generate and store embeddings for the provided document.
    Args:
        document: The document to generate embeddings for.
    """
    try:
        for doc in document:
            doc.metadata.update({"project_id": f"{project_id}"})
        embeddings = generate_openAI_embeddings(
            openai_key,
        )
        store = PGVector.from_documents(
            embedding=embeddings,
            documents=document,
            connection=postgres_connection,
            use_jsonb=True,
        )
    except Exception as e:
        print(f"Exception occurred: {e}")


def get_questionnaire_data(file, project_id, api_key):
    llm = ChatOpenAI(
        model_name="gpt-4o",
        api_key=api_key,
        temperature=0.2,
    )
    """
    Extracts and analyzes questionnaire data from a PDF file.
    This function reads a PDF document, extracts text from each page, and uses 
    a GPT-4 model to identify and categorize content into questions, checkboxes, 
    text fields, and multiple-choice questions. The categorized data is returned 
    in a structured JSON format. Progress is tracked and updated as the document 
    is processed.

    Args:
        file (str): The PDF file to be processed.
        progress (dict): A dictionary to track the progress of the operation.
        project_id (str): The ID of the project associated with the document.

    Returns:
        list: A list of dictionaries containing the categorized questionnaire data.
    """
    try:
        # progress[project_id] = {"percentage": 20, "message": "Indexing question.."}
        prompt_template = """You are an expert in form analysis. You will be given a section of text extracted from a PDF form. Your task is to identify and categorize each item in the text as one of the following:
        1. **Question**: A prompt that requires a text-based response. Identify the question text and ensure it is complete.
        2. **Checkbox**: An option or set of options that can be selected by checking a box. Identify the question and the list of possible checkbox options.
        3. **Multiple-Choice Question**: A question followed by a list of options, where only one or multiple options may be selected. Identify the question and all options.
        4. **Text Field**: A labeled input field where the user is expected to type a response. Common examples include fields labeled as "Name," "Email," "Phone Number," "Street Address," etc. Ensure that the label or prompt for each text field is captured accurately.

        For each item, ensure that:
        - Questions are complete and not split across lines.
        - Checkbox and multiple-choice options are correctly associated with their respective questions.
        - The order of questions and options is preserved as it appears in the text.

        Here is the text: {text}
         Return the output as an array of questions, checkboxes, multichoice questions in the following JSON format:
         {json_format}
         return in the given format no extra text or word
        """

        # prompt_template = """
        # You are an expert in form analysis. You will be given a section of text extracted from a PDF form.
        # Keep the order of the questions, text fields.
        # Please identify if the text is a question, text field, multiple-choice question, or checkbox.
        # If it is a multiple-choice question, identify the options.
        # If it is a checkbox, identify the checkbox options.
        # Here is the text:
        # {text}
        # Return the output as an array of questions, checkboxes, multichoice questions in the following JSON format:
        # {json_format}
        # """
        json_format = """
        [
            {
                "type": "checkbox",
                "question": "",
                "options": ["Option 1", "Option 2", "Option 3"]
            },
            {
                "type": "text field",
                "question": "",
                "options": []
            },
            {
                "type": "multichoice",
                "question": "",
                "options": ["Option 1", "Option 2", "Option 3"]
            }
            ...
        ]
        """
        template = PromptTemplate(template=prompt_template, input_variables=["text"])
        chain = LLMChain(llm=llm, prompt=template)
        reader = PdfReader(file)
        pages = reader.pages
        total_pages = len(pages)
        for i, page in enumerate(pages):
            text = page.extract_text()
            response = chain.invoke({"text": text, "json_format": json_format})
            response_text = response["text"]
            if response_text.startswith("```json"):
                response_text = response_text[7:].strip()
            if response_text.endswith("```"):
                response_text = response_text[:-3].strip()
            try:
                json_output = json.loads(response_text)
                progress_percentage = math.ceil(10 + (i + 1) / total_pages * 30)
                yield {
                    "response": json_output,
                    "progress": {
                        "percentage": progress_percentage,
                        "message": "Database searching...",
                    },
                }
            except json.JSONDecodeError as e:
                print(f"Error decoding JSON response from the model: {e}")

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
