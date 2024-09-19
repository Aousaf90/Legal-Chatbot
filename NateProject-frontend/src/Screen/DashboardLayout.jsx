import React, { useState, forwardRef, useRef, useEffect } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { DashboardSidebar } from "../Components/DashboardSidebar";
import { DashboardHeader } from "../Components/DashboardHeader";
import axios from "axios";
import { webUrl } from "../Helper";
import { ProjectUploadForm } from "../Components/ProjectUploadForm";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const DashboardLayout = () => {
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [projectList, setProjectList] = useState([]);
  const [showProjectUploadForm, setShowProjectUploadForm] = useState(false);
  const [projectFileList, setProjectFileList] = useState([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState();
  const [error, setError] = useState(null);
  const uploadButtonRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleClickOpen = () => {
    setShowProjectUploadForm(!showProjectUploadForm);
    if (!showProjectUploadForm) {
      getPreviousProjects();
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
        setSelectedProjectId(project_id);
        setProjectFileList(response.data);
      } else {
        setProjectFileList([]);
      }
    } catch (err) {
      setError("Failed to fetch project files. Please try again.");
    } finally {
      setLoadingFiles(false);
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
      });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token') ==  undefined){
      navigate('/login')
    }
    getPreviousProjects();
    setSelectedOption("");
  }, []);

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
              onUploadSuccess={() => {
                getPreviousProjects();
                handleClickOpen();
              }}
            />
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      )}

      <div className={`flex grow ${showProjectUploadForm ? "opacity-50" : ""}`}>
        <DashboardSidebar setSelectedOption={setSelectedOption} />
        <div className="wrapper flex grow overflow-auto h-screen">
          <div className="flex-1">
            <Outlet context={{ handleClickOpen, getPreviousProjectsList: getPreviousProjects }} />
          </div>
        </div>
      </div>
    </>
  );
};
