from fastapi import Header, HTTPException
from ..projectController.projectHelper import generate_openAI_embeddings
from langchain_postgres import PGVector
from db import DATABASE_URL

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


def vectorize_humna_query(query, token, project_id, openai_key):
    """
    Vectorize a human query using OpenAI embeddings and perform a similarity search
    within a specific project. Returns the most similar result.
    """
    embeddings = generate_openAI_embeddings(
        openai_key,
    )
    VECTORSEARCH = PGVector(
        connection=postgres_connection,
        embeddings=embeddings,
    )
    return (
        VECTORSEARCH.similarity_search(
            query=query, k=4, filter={"project_id": project_id}
        )
        if VECTORSEARCH
        else HTTPException()
    )
