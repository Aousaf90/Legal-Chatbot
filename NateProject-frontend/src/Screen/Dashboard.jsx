import React, { useState, useEffect, useRef } from "react";
import { MdOutlineFileUpload, MdDelete } from "react-icons/md";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { MediaContainer } from "../Components/DashboardComponents/MediaContainer";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import { webUrl } from "../Helper";
import { useOutletContext } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import { RxCross1 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { Notyf } from "notyf";
import { RxCross2 } from "react-icons/rx";
import "notyf/notyf.min.css";

const notyf = new Notyf();

export const Dashboard = () => {
  const { handleClickOpen, getPreviousProjectsList } = useOutletContext();
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectList, setProjectList] = useState([]);
  const [projectFileList, setProjectFileList] = useState([]);
  const questionnaireInputRef = useRef(null);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const abortControllerRef = useRef(null);
  const [docxFiles, setDocxFiles] = useState(false);
  const [docxDownloadLink, setdocxDownloadLink] = useState();
  const [questionnaireError, setQuestionnaireError] = useState(false);
  const [isQuestionnaireProgressProjectId, setIsQuestionnaireProject_id] =
    useState();
  const [isQuestionnaireProgress, setIsQuestionnaireProgress] = useState(false);

  const [questionnaireProgress, setQuestionnaireProgress] = useState("");
  const [questionnnaireProgressString, setquestionnnaireProgressString] =
    useState("");

  const getProjectFiles = async (project) => {
    setLoadingFiles(true);
    setError(null);
    try {
      const response = await axios.get(
        `${webUrl}/project/get-project-files/${project.id}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: localStorage.getItem("token"),
          },
        }
      );
      if (response && response.data.length > 0) {
        setSelectedProjectId(project.id);
        setSelectedProject(project);
        setProjectFileList(response.data);
      } else {
        setProjectFileList([]);
      }
    } catch (err) {
      const errorMessage = `Failed to fetch project files: ${err}`;
      setError(errorMessage);
      notyf.error(errorMessage);
    } finally {
      setLoadingFiles(false);
    }
  };

  const handleQuestionnaireUploadClose = () => {
    setQuestionnaireProgress(0);
    setquestionnnaireProgressString("");
    setDocxFiles(false);
  };

  const handleDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const deleteProject = async () => {
    try {
      await axios.get(`${webUrl}/project/delete-project/${selectedProjectId}`, {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      setProjectList(
        projectList.filter((project) => project.id !== selectedProjectId)
      );
      setSelectedProjectId(null);
      setSelectedProject(null);
      setProjectFileList([]);
      setSnackbarMessage("Project deleted successfully");
      notyf.success("Project deleted successfully");
    } catch (err) {
      const errorMessage = `Failed to delete project: ${err}`;
      setError(errorMessage);
      notyf.error(errorMessage);
    } finally {
      handleDialogClose();
    }
  };

  const getPreviousProjects = () => {
    axios
      .get(`${webUrl}/project/get-projects/`, {
        headers: {
          "Content-Type": "multipart/form-data",
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response && response.data.length > 0) {
          setProjectList([...response.data]);
        }
      })
      .catch((err) => {
        const errorMessage = `Failed to fetch projects: ${err}`;
        setError(errorMessage);
        notyf.error(errorMessage);
      });
  };

  useEffect(() => {
    getPreviousProjects();
    getPreviousProjectsList();
  }, []);


  const handleProjectFileUpload = async (e) => {
    const files = e.target.files;
    if (!files.length) return;
    try {
      setLoadingFiles(true);
      const formData = new FormData();

      Array.from(files).forEach((file) => {
        formData.append("file", file);
      });

      const response = await axios.post(
        `${webUrl}/project/upload-file/${selectedProjectId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: localStorage.getItem("token"),
          },
        }
      );
      setProjectFileList((prevFiles) => [...prevFiles, ...response.data.files]);
    } catch (error) {
      const errorMessage = `Failed to upload files: ${error}`;
      setError(errorMessage);
      notyf.error(errorMessage);
    } finally {
      setLoadingFiles(false);
    }
  };
  const cancelQeustionnaireUpload = async (project_id) => {
    try {
      const result = await axios.get(
        `${webUrl}/project/cancel-process/${project_id}`
      );
      if (result.status === 200) {
        notyf.success("Questionnaire upload cancelled successfully");
        setIsQuestionnaireProgress(false);
        setQuestionnaireProgress("");
        setDocxFiles(false);
        setQuestionnaireError(true);
        setdocxDownloadLink("");
      }
    } catch (e) {
      notyf.error(e);
    }
  };
  const handleQuestionnaireUpload = async (e) => {
    try {
      const formData = new FormData();

      const file = e.target.files[0];
      formData.append("file", file);
      setQuestionnaireProgress("");
      setIsQuestionnaireProgress(true);
      setDocxFiles(false);
      setdocxDownloadLink("");

      if (!file) return;
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${webUrl}/project/analysis-questionnaire-fileupload/${selectedProjectId}`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token,
          },
          responseType: "json",
        }
      );
      if (response.status == 200) {
        const fileName = response.data.file.split("/").pop();
        // const fileName = response.data.file.split("\\").pop();
        const eventSource = new EventSource(
          `${webUrl}/project/analysis-questionnaire/${response.data.project_id}/${fileName}?token=${token}`
        );
        eventSource.onmessage = (event) => {
          const progressData = JSON.parse(event.data);
          const { percentage, message } = progressData;
          if (percentage >= 100) {
            setIsQuestionnaireProgress(false);
            if (message == "No Question Found") {
              notyf.error("No Question in the given document");
              setQuestionnaireError(true);
              setDocxFiles(false);
              setdocxDownloadLink("");
            } else if (message == "Cancelled") {
              setQuestionnaireError(true);
              setDocxFiles(false);
              setdocxDownloadLink("");
            } else {
              setDocxFiles(true);
              setdocxDownloadLink(
                `${webUrl}/project/download-file/${response.data.project_id}`
              );
              setQuestionnaireError(false);
            }
            setQuestionnaireProgress(0);
            setquestionnnaireProgressString("");
            setdocxDownloadLink(
              `${webUrl}/project/download-file/${response.data.project_id}`
            );
            eventSource.close();
          } else {
            setIsQuestionnaireProgress(true);
            setQuestionnaireProgress(percentage);
            setquestionnnaireProgressString(message);
          }
        };
        eventSource.onerror = (error) => {
          console.error("EventSource failed:", error);
          eventSource.close();
          setQuestionnaireProgress(0);
          notyf.error(`Error: ${error.message}`);
          setIsQuestionnaireProgress(false);
        };
      }
    } catch (err) {
      notyf.error(err);
    } finally {
      if (questionnaireInputRef.current) {
        questionnaireInputRef.current.value = "";
      }
    }

  };

  return (
    <main className="grow content  pt-5" id="content" role="content">
      <div className="container-fixed flex justify-between">
        <div className="flex flex-wrap  items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-semibold leading-none text-gray-900">
              Dashboard
            </h1>
          </div>
        </div>
        <div className="add-project">
          <button
            onClick={handleClickOpen}
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Add New Project
          </button>
        </div>
      </div>
      <div className="container-fixed">
        {projectList.length === 0 ? (
          <div className="no-project-container w-full h-[600px] flex justify-center items-center ">
            <a
              href="#"
              className="flex p-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
            >
              <img
                className="object-cover  rounded-t-lg md:h-auto md:w-20 md:rounded-none md:rounded-s-lg  p-2"
                width="20"
                height="50"
                src="/assets/media/app/empty_folder.jpg"
                alt=""
              ></img>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  No Project Yet
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  {" "}
                  Start Your Journey: Create a New Project, Upload Your Files,
                  and Let AI Answer All Your Questions!
                </p>
              </div>
            </a>
          </div>
        ) : (
          <div className="flex gap-4">
            <div className="flex gap-4">
              <div className=" h-screen overflow-auto  items-center lg:col-span-1 ">
                {projectList.length === 0 ? (
                  <div className="epty-container"></div>
                ) : (
                  <div className="flex-1 h-auto overflow-hidden">
                    <div className="flex flex-wrap overflow-y-auto gap-3">
                      {projectList.map((project) => (
                        <div
                          key={project.id}
                          className={`w-44 ${
                            selectedProjectId === project.id
                              ? "border-4 bg-[#2196F3] bg-opacity-5"
                              : "border"
                          } rounded-md`}
                        >
                          <MediaContainer
                            label={project.name}
                            icon="assets/media/app/folder_document_icon.png"
                            cateogory={project.category}
                            description={project.information}
                            onClick={
                              isQuestionnaireProgress
                                ? () => {}
                                : () => getProjectFiles(project)
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="lg:col-span-2">
                <form>
                  <div
                    className={`card h-full ${
                      projectFileList.length <= 0 ? "hidden" : ""
                    }`}
                  >
                    <div
                      className={`card-body justify-center  w-[750px] h-[250%] p-10 bg-[length:80%] [background-position:175%_25%] bg-no-repeat flex ${
                        projectFileList.length <= 0 && !loadingFiles
                          ? "justify-center items-center"
                          : ""
                      } entry-callout-bg`}
                    >
                      {loadingFiles ? (
                        <div className="flex justify-center items-center h-full w-full">
                          <CircularProgress />
                        </div>
                      ) : error ? (
                        <div className="flex justify-center items-center h-full w-full">
                          <Alert severity="error">{error}</Alert>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                          {projectFileList.map((file) => (
                            <div
                              key={file.id}
                              className="w-[100px] flex flex-col items-center"
                              title={file.name}
                            >
                              <div className="img-container flex-shrink-0 flex justify-center mb-2">
                                <img
                                  src="assets/media/app/word.png"
                                  alt="File Picture"
                                  width="50%"
                                  height="50%"
                                  className="block"
                                />
                              </div>
                              <div className="file-name text-sm font-semibold ml-4 w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                {file.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {projectFileList.length > 0 ? (
                      <div className="upload_files flex items-center justify-end pr-5 gap-3">
                        <label
                          htmlFor="dropzone-file"
                          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50   font-medium rounded-lg text-sm px-5 py-1 my-2 text-center cursor-pointer flex items-center"
                        >
                          <MdOutlineFileUpload
                            size={35}
                            color="white"
                            className="mr-2"
                          />
                          <span className="font-semibold text-white">
                            Upload File
                          </span>
                        </label>
                        <input
                          id="dropzone-file"
                          type="file"
                          onChange={handleProjectFileUpload}
                          className="hidden"
                          multiple
                          required
                        />
                        <label
                          htmlFor="questionnaire-upload"
                          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50   font-medium rounded-lg text-sm px-5 py-1 my-2 text-center cursor-pointer flex items-center"
                        >
                          <MdOutlineFileUpload
                            size={35}
                            color="white"
                            className="mr-2"
                          />
                          <span className="font-semibold text-white">
                            Upload Questionnaire
                          </span>
                        </label>
                        <input
                          id="questionnaire-upload"
                          type="file"
                          onInput={handleQuestionnaireUpload}
                          className="hidden"
                          ref={questionnaireInputRef}
                          required
                        />
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </form>
                {/* {true ? ( */}
                {isQuestionnaireProgress ? (
                  // {true ? (
                  <div className="flex w-full">
                    <div className=" p-8 mt-4 card w-full rounded-lg">
                      <div className="progress-lable  font-semibold text-lg justify-between flex">
                        <div className="upper-div flex  w-full justify-between">
                          <div className="text-div">Analysis Questionnaire</div>
                          <div
                            className="cancel-progress cursor-pointer"
                            onClick={() => {
                              cancelQeustionnaireUpload(selectedProjectId);
                            }}
                          >
                            <RxCross2 />
                          </div>
                        </div>
                      </div>
                      <div className="progressbar">
                        <ProgressBar
                          completed={`${questionnaireProgress}`}
                          bgColor="#2196F3"
                        />
                      </div>
                      <div className="progress-string">
                        {questionnnaireProgressString}
                      </div>
                    </div>
                  </div>
                ) : (
                  docxFiles &&
                  !questionnaireError && (
                    <div className="flex justify-between">
                      <div className="mt-4">
                        <h2 className="text-lg font-semibold">
                          Processed DOCX File
                        </h2>
                        <p>
                          Your file has been processed. You can download it by
                          clicking the link below:
                        </p>
                        <a
                          href={docxDownloadLink}
                          download="analysis-questionnaire.docx"
                          className="text-blue-600 underline"
                        >
                          Download analysis-questionnaire.docx
                        </a>
                      </div>
                      <div className="cancel-butto p-4">
                        <button onClick={handleQuestionnaireUploadClose}>
                          <RxCross1 />
                        </button>
                      </div>
                    </div>
                  )
                )}

                {selectedProject && (
                  <div className="card mt-4 p-4 rounded-lg w-full flex ">
                    <div className="info-container w-full">
                      <h2 className="text-lg font-semibold">Project Details</h2>
                      <p>
                        <strong>ID:</strong> {selectedProject.id}
                      </p>
                      <p>
                        <strong>Name:</strong> {selectedProject.name}
                      </p>
                      <p>
                        <strong>Category:</strong> {selectedProject.category}
                      </p>
                      <p>
                        <strong>Information:</strong>{" "}
                        {selectedProject.information}
                      </p>
                    </div>
                    <div className="del-project flex-1 justify-end items-end pb-1 flex">
                      <button
                        type="button"
                        onClick={handleDeleteClick}
                        className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-[#FF6F1E] hover:bg-[#ba7146] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
                      >
                        <MdDelete size="25" />
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Delete Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this project? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleDialogClose}
            type="button"
            className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-[#FF6F1E] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Cancel
          </button>
          <button
            onClick={deleteProject}
            type="button"
            className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-[#2196F3] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Delete
          </button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </main>
  );
};
