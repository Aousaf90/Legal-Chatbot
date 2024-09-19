import React, { useState, forwardRef, useEffect } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import { useOutletContext } from "react-router-dom";
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { ProjectUploadForm } from "../../Components/ProjectUploadForm";
import Slide from "@mui/material/Slide";
import { FaPlus } from "react-icons/fa6";
import { ChatbotSidebarIcon } from "../../Components/ChatbotComponents/ChatbotSidebarIcon";
import { ChatbotSidebarFileIcon } from "../../Components/ChatbotComponents/ChatbotSidebarFileIcon";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import { webUrl } from "../../Helper";

export const ChatbotProjectSidebar = ({ setSelectedProjectId, setChatMessageClear }) => {
    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const { handleClickOpen, getPreviousProjectsList } = useOutletContext();
    const [projectList, setProjectList] = useState([]);
    const [showProjectUploadForm, setShowProjectUploadForm] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [projectFileList, setProjectFileList] = useState([]);
    const [loadingFiles, setLoadingFiles] = useState(false);
    const [error, setError] = useState(null);

    const getPreviousProjects = async () => {
        try {
            const response = await axios.get(`${webUrl}/project/get-projects/`, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    token: localStorage.getItem("token"),
                },
            });

            if (response && response.data.length > 0) {
                setProjectList(response.data);
            } else {
                setProjectList([]);
            }
        } catch (error) {
            console.error("Failed to fetch projects:", error);
            setProjectList([]);
        }
    };

    const getProjectFiles = async (project_id) => {
        setLoadingFiles(true);
        setError(null);
        try {
            const response = await axios.get(
                `${webUrl}/project/get-project-files/${project_id}`,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        token: localStorage.getItem("token"),
                    },
                }
            );
            if (response && response.data.length > 0) {
                setProjectFileList(response.data);
            } else {
                setProjectFileList([]);
            }
        } catch (err) {
            setError(`${err}`);
        } finally {
            setLoadingFiles(false);
        }
    };

    useEffect(() => {
        getPreviousProjects();
    }, []);

    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId);
        setSelectedProjectId(projectId);  // Keep changing selectedProjectId on each project click
        setChatMessageClear([]);  // Clear chat messages when a new project is selected
        getProjectFiles(projectId);
    };

    return (
        <>
            {showProjectUploadForm && (
                <Dialog
                    open={showProjectUploadForm}
                    TransitionComponent={Transition}
                    onClose={handleClickOpen}
                    aria-describedby="alert-dialog-slide-description"
                    maxWidth="lg"
                    fullWidth
                    PaperProps={{
                        style: {
                            width: "100%",
                            maxWidth: "1024px",
                            height: "80vh",
                            maxHeight: "80vh",
                            borderRadius: "12px",
                        },
                    }}
                >
                    <DialogTitle>{"Upload Project"}</DialogTitle>
                    <DialogContent>
                        <ProjectUploadForm
                            onClose={handleClickOpen}
                            onUploadSuccess={getPreviousProjects}
                        />
                    </DialogContent>
                    <DialogActions></DialogActions>
                </Dialog>
            )}

            <div className="h-full rounded-md p-5">
                <div
                    className="add-new-project pt-5 pl-2 flex cursor-pointer"
                    onClick={handleClickOpen}
                >
                    <div className="icon rounded-md bg-[#EFF0F2] h-7 w-7 flex justify-center items-center">
                        <FaPlus size="15" />
                    </div>
                    <div className="addnewProject pl-2 text-sm flex items-center">
                        New Project
                    </div>
                </div>
                <hr className="my-4 border-t border-gray-300" />

                <div className="project-list">
                    {projectList.length > 0 ? (
                        projectList.map((project) => (
                            <ChatbotSidebarIcon
                                key={project.id}
                                label={project.name}
                                onClick={() => handleProjectClick(project.id)}
                                isSelected={selectedProject === project.id}
                            />
                        ))
                    ) : (
                        <div className="text-gray-500 text-sm">No Project</div>
                    )}
                </div>

                <hr className="my-4 border-t border-gray-300" />
                <div className="file-section font-semibold text-md pb-5 ">
                    {loadingFiles ? (
                        <div>Loading files...</div>
                    ) : error ? (
                        <div className="text-red-500">{error}</div>
                    ) : (
                        <div className="overflow-y-auto h-[150px] truncate">
                            <div>Files</div>
                            {projectFileList.length > 0 ? (
                                projectFileList.map((file, index) => (
                                    <ChatbotSidebarFileIcon key={index} label={file.name} />
                                ))
                            ) : (
                                <div className="text-gray-500 text-sm">No files available</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
