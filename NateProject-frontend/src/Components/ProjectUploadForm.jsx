import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Button } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { webUrl } from "../Helper";

export const ProjectUploadForm = ({ onClose, onUploadSuccess }) => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);
  const [filePreviews, setFilePreviews] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const response = await axios.get(`${webUrl}/project/get-categories`);
      setCategories(response.data);
    } catch (error) {
      toast.error("Error fetching categories.");
    }
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    const selectedCategoryId = e.target.value;
    setCategory(selectedCategoryId);
    console.log("Selected Category ID: ", selectedCategoryId-1)
    console.log("Categories: ", categories)
    const selectedCategory = categories.find(cat => cat.category_id === parseInt(selectedCategoryId));
    if (selectedCategory && selectedCategory.subcategories) {
      console.log("Selected Category: ", selectedCategory)
      console.log("Subcategory Category: ", selectedCategory.subcategories)
      setSubcategories(selectedCategory.subcategories);
    } else {
      setSubcategories([]);
    }

    console.log("Selected Category:", selectedCategory);
    console.log("Subcategories:", subcategories);
    setSubcategory("");
  };
  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
    console.log("Subcategories:", subcategory);
  };
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    const previews = selectedFiles.map(file => URL.createObjectURL(file));
    setFilePreviews(previews);
  };
  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!description) newErrors.description = "Description is required.";
    if (!category) newErrors.category = "Category is required.";
    if (subcategories.length > 0 && !subcategory)
      newErrors.subcategory = "Subcategory is required.";
    if (files.length === 0) newErrors.files = "File upload is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('information', description);
      formData.append('subcategory', subcategory);
      files.forEach((file) => formData.append('file', file));

      try {
        const response = await axios.post(`${webUrl}/project/upload-project`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'token': localStorage.getItem('token')
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          },
        });

        if (response.status === 200) {
          toast.success("Project created successfully!");
          onUploadSuccess();
          window.location.reload();
          onClose();
          resetForm();
        } else {
          toast.error("Submission error: " + response.data.message);
        }
      } catch (error) {
        toast.error("Network error: " + (error.response?.data?.message || error.message));
      } finally {
        setIsUploading(false);
        setUploadProgress(0);
      }
    }
  };

  // Reset the form
  const resetForm = () => {
    setName("");
    setDescription("");
    setCategory("");
    setSubcategory("");
    setFiles([]);
    setFilePreviews([]);
    setErrors({});
    setUploadProgress(0);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {isUploading && (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
      <div className="flex justify-center items-center min-h-screen bg-gray-50 pt-3">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full">
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`bg-gray-50 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Enter Project Name"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4 py-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${
                  errors.description ? "border-red-500" : "border-gray-300"
                } focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Write your Description here..."
                required
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">{errors.description}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="font-semibold">Category</label>
              <select
                onChange={handleCategoryChange}
                value={category}
                id="underline_select"
                className={`block p-2 w-full text-sm text-gray-500 font-semibold bg-transparent border-0 border-b-2 ${
                  errors.category ? "border-red-500" : "border-gray-200"
                } appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer`}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((cat) => (
                  <option value={cat.category_id}>
                    {cat.category_name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-xs mt-1">{errors.category}</p>
              )}
            </div>
            {subcategories.length > 0 && (
              <div className="mb-6 py-4">
                <label className="font-semibold text-lg">Subcategory</label>
                <select
                  onChange={handleSubcategoryChange}
                  value={subcategory}
                  id="underline_select"
                  className={`block p-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 ${
                    errors.subcategory ? "border-red-500" : "border-gray-200"
                  } appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer`}
                  required
                >
                  <option value="" disabled>
                    Select a subcategory
                  </option>
                  {
                  
                  subcategories.map((sub) => (
                    <option value={sub.subcategory_id}>
                      {sub.name}
                    </option>
                  ))}
                </select>
                {errors.subcategory && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.subcategory}
                  </p>
                )}
              </div>
            )}
            <div className="flex items-center justify-center w-full pt-5">
              <label
                className={`flex flex-col items-center justify-center w-full h-64 border-2 ${
                  errors.files ? "border-red-500" : "border-gray-300"
                } border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and
                    drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  multiple
                  required
                />
              </label>
              {errors.files && (
                <p className="text-red-500 text-xs mt-1">{errors.files}</p>
              )}
            </div>
            {filePreviews.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">File Previews:</h3>
                <div className="flex flex-wrap gap-4">
                  {filePreviews.map((preview, index) => (
                    <div key={index} className="img-container flex-shrink-0 flex flex-col items-center mb-2">
                      <img
                        src="assets/media/app/word.png"
                        alt="File Picture"
                        width="50"
                        height="50"
                        className="block"
                      />
                      <p className="text-sm mt-2">{files[index].name}</p> 
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-between pt-5">
              <div className="cancel-button">
                <button
                  onClick={onClose}
                  type="button"
                  className="text-white bg-[#FF6F1E] hover:bg-[#fc9153] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                >
                  Cancel
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white bg-[#2196F3] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  disabled={isUploading}
                >
                  {isUploading ? "Uploading..." : "Upload Project"}
                  {isUploading && (
                    <CircularProgress
                      size={24}
                      style={{ marginLeft: '10px', color: 'white' }}
                    />
                  )}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-white mx-2 bg-[#7239EA] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Clear Input Field
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};
