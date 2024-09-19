import React, { useState, useRef } from 'react';
import axios from 'axios';
import { webURL } from "../../constantx.jsx";
import LoadingBar from 'react-top-loading-bar';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { AiOutlineCloudUpload, AiOutlineClose } from 'react-icons/ai';
import { FaCheckCircle, FaExclamationCircle, FaFileUpload } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';

const notyf = new Notyf();

const UploadFiles = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileName, setFileName] = useState('');
    const loadingBarRef = useRef(null);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            const droppedFile = acceptedFiles[0];
            setFile(droppedFile);
            setFileName(droppedFile.name);
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            loadingBarRef.current.continuousStart();

            const response = await axios.post(`${webURL}api/file/upload/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'token': localStorage.getItem('token')
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    loadingBarRef.current.staticStart(percentCompleted);
                }
            });

            if (response.status === 200) {
                setUploadStatus('success');
                setUploadedFiles([...uploadedFiles, response.data.fileName]);
                notyf.success('File uploaded successfully!');
            } else {
                setUploadStatus('error');
                notyf.error('Error uploading file. Please try again.');
            }
            console.log(response.data);
        } catch (e) {
            setUploadStatus('error');
            notyf.error('Error uploading file. Please try again.');
            console.error('Error uploading file:', e);
        } finally {
            loadingBarRef.current.complete();
        }
    };

    return (
        <div className="bg-gray-100 p-8 max-w-2xl mx-auto shadow-md rounded-lg border border-gray-300">
            <LoadingBar color="#4CAF50" ref={loadingBarRef} />
            <h1 className="text-3xl font-semibold text-gray-900 flex items-center mb-6">
                <AiOutlineCloudUpload className="text-4xl mr-3 text-[rgba(0,150,136,255)] " />
                File Upload
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer ${
                        isDragActive ? 'bg-gray-200 border-blue-500' : 'bg-white'
                    }`}
                >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p className="text-gray-600">Drop the file here...</p>
                    ) : (
                        <>
                            <AiOutlineCloudUpload className="text-4xl text-[rgba(0,150,136,255)] mx-auto mb-3" />
                            <p className="text-gray-600">Drag & drop a file here, or click to select one</p>
                        </>
                    )}
                </div>
                {fileName && (
                    <div className="mt-4 text-gray-700">
                        <p className="font-medium">Selected File:</p>
                        <p className="text-gray-600">{fileName}</p>
                    </div>
                )}
                <div className="flex justify-end space-x-2 mt-4">
                    <button
                        type="button"
                        id="cancelButton"
                        className="px-4 py-2 bg-[#f03232] text-white rounded-md flex items-center hover:bg-red-700 transition duration-300"
                    >
                        <AiOutlineClose className="mr-2" />
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[rgba(0,150,136,255)] text-white rounded-md flex items-center hover:bg-blue-700 transition duration-300"
                    >
                        <FaFileUpload className="mr-2" />
                        Upload
                    </button>
                </div>
            </form>
            {uploadStatus === 'success' && (
                <div className="mt-4 flex items-center text-green-600">
                    <FaCheckCircle className="text-green-500 mr-2 text-xl" />
                    File uploaded successfully!
                </div>
            )}
            {uploadStatus === 'error' && (
                <div className="mt-4 flex items-center text-red-600">
                    <FaExclamationCircle className="text-red-500 mr-2 text-xl" />
                    Error uploading file. Please try again.
                </div>
            )}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Uploaded Files</h2>
                {uploadedFiles.length > 0 ? (
                    <ul className="list-disc pl-5 text-gray-700">
                        {uploadedFiles.map((fileName, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <FaFileUpload className="text-blue-500 mr-2" />
                                {fileName}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No files uploaded yet.</p>
                )}
            </div>
        </div>
    );
};

export default UploadFiles;