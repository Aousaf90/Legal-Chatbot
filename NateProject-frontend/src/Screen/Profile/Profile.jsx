import { React, useEffect, useState } from "react";
import { IoKey } from "react-icons/io5";
import { webUrl } from "../../Helper";
import { GoMultiSelect } from "react-icons/go";
import { RiChat1Fill } from "react-icons/ri";
import axios from "axios";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

const notyf = new Notyf();

export const Profile = () => {
  const [settingParams, setSettingParams] = useState({
    id: "",
    user_id: "",
    openai_key: "",
    openai_model: "",
    prompt: "",
    category: "",
    subcategory: "",
  });

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const getSettingParams = async () => {
    if (settingParams.user_id) return;
    const user_id = localStorage.getItem("user_id");
    try {
      const response = await axios.get(`${webUrl}/auth/get-profile-params/${user_id}`);
      setSettingParams(response.data);
      notyf.success("Profile settings fetched successfully!");
    } catch (error) {
      notyf.error("Error fetching profile settings.");
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(`${webUrl}/project/get-categories`);
      setCategories(response.data);
    } catch (error) {
      notyf.error("Error fetching categories.");
    }
  };

  const updateSettingParams = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const updatedParams = {
      openai_key: formData.get('openai_key') || settingParams.openai_key,
      openai_model: formData.get('openai_model') || settingParams.openai_model,
      prompt: formData.get('prompt') || settingParams.prompt,
      category: formData.get('category') || settingParams.category,
      subcategory: formData.get('subcategory') || settingParams.subcategory,
    };

    try {
      const user_id = localStorage.getItem("user_id");
      const response = await axios.post(
        `${webUrl}/auth/set-profile-params/${user_id}`,
        updatedParams
      );
      if (response.status === 200) {
        setSettingParams(prevState => ({
          ...prevState,
          ...updatedParams,
        }));
        notyf.success("Profile settings updated successfully!");
      } else {
        notyf.error("Error updating profile settings.");
      }
    } catch (error) {
      notyf.error("Error updating profile settings.");
    }
  };

  useEffect(() => {
    getSettingParams();
    getCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategoryId = e.target.value;
    setSettingParams(prevState => ({
      ...prevState,
      category: selectedCategoryId,
      subcategory: "", // Reset subcategory when category changes
    }));

    // Find the subcategories for the selected category
    const selectedCategory = categories.find(cat => cat.category_id === parseInt(selectedCategoryId));
    setSubcategories(selectedCategory ? selectedCategory.subcategories : []);
  };

  return (
    <div className="main-container m-10 h-[calc(100vh-93px)]">
      <div className="w-full pb-2 flex justify-left font-bold text-3xl">
        Profile
      </div>
      <hr className="my-4 border-t border-gray-300" />

      <div className="personal-detail">
        <div className="personal-information-container p-3 flex">
          <div className="flex-1 font-bold text-lg">Personal Information</div>
          <div className="flex-1">
            <div className="name-container">
              <div className="font-semibold py-3">Name</div>
              <div className="bg-gray-50 border items-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                Test User
              </div>
            </div>
            <div className="name-container">
              <div className="font-semibold py-3">Email</div>
              <div className="bg-gray-50 border items-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                testuser@test.com
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="chat-information-container p-3 flex">
          <div className="flex-1 font-bold text-lg">Settings</div>
          <div className="flex-1">
            <form onSubmit={updateSettingParams}>
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                API Key
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IoKey size="20" />
                </div>
                <input
                defaultValue={settingParams.openai_key}
                  type="text"
                  id="openai_key"
                  name="openai_key"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your API Key"
                />
              </div>
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Model
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <GoMultiSelect size="20" />
                </div>
                <select
                  name="openai_model"
                  id="openai_model"
                  className="bg-gray-50 pl-11 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={settingParams.openai_model || "gpt-3.5-turbo"}>
                    {settingParams.openai_model || ""}
                  </option>
                  <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
                  <option value="gpt-4">gpt-4</option>
                  <option value="gpt-4-turbo">gpt-4-turbo</option>
                </select>
              </div>
              <label
                htmlFor="prompt"
                className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white">
                Prompt
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <RiChat1Fill size="20" />
                </div>
                <textarea
                  defaultValue={settingParams.prompt}
                  name="prompt"
                  id="prompt"
                  className="bg-gray-50 border items-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your prompt"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-[#2196F3] via-[#1B84FF] to-[#1B84FF] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Update Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
