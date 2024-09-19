import React, { useState } from "react";
import { SidebarIconButton } from "./SidebarIconButton";
import { SettingPage } from "./ProfilePageComponents/SettingPageComponents/SettingPage";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
export const DashboardSidebar = () => {
  const navigate = useNavigate();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [onSettingPage, setOnSettingPage] = useState(false);

  const sidebarCollapsedController = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
    console.log(isSidebarCollapsed);
  };

  const handleSettingPage = () => {};
  const NavigateToChatbot = () => {
    console.log("In the handlechatbot ");
    navigator("/chatbot");
  };
  return (
    <>
      <div
        className={` h-screen sidebar dark:bg-coal-600 bg-light border-r border-r-gray-200 dark:border-r-coal-100 top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0 transition-all duration-300 ${
          isSidebarCollapsed ? "w-20" : "w-64"
        }`}
        data-drawer="true"
        data-drawer-class="drawer drawer-start top-0 bottom-0"
        data-drawer-enable="true|lg:false"
        id="sidebar"
      >
        <div className="flex  justify-center mt-5">
          <div className="icon-container flex items-center">
            <div className="icon">
              <TbMessageChatbotFilled size="50" color="#3498DB" />
            </div>
            <div className="icon-text">Legal ChatBot</div>
          </div>
        </div>

        <div
          className="sidebar-content flex grow shrink-0 py-5 pr-2"
          id="sidebar_content"
        >
          <div
            className="scrollable-y-hover grow shrink-0 flex pl-2 lg:pl-5 pr-1 lg:pr-3"
            data-scrollable="true"
            data-scrollable-dependencies="#sidebar_header"
            data-scrollable-height="auto"
            data-scrollable-offset="0px"
            data-scrollable-wrappers="#sidebar_content"
            id="sidebar_scrollable"
          >
            {/* Sidebar Menu */}
            <div
              className="menu flex flex-col grow gap-0.5"
              data-menu="true"
              data-menu-accordion-expand-all="false"
              id="sidebar_menu"
            >
              <div
                className="menu-item here show"
                data-menu-item-toggle="accordion"
                data-menu-item-trigger="click"
              >
                <NavLink to="/dashboard">
                  <div
                    className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                    tabIndex={0}
                  >
                    <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                      <i className="ki-filled ki-element-11 text-lg"></i>
                    </span>
                    <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                      Dashboard
                    </span>
                  </div>
                </NavLink>
              </div>
              <div className="menu-item pt-2.25 pb-px">
                <span className="menu-heading uppercase text-2sm font-medium text-gray-500 pl-[10px] pr-[10px]"></span>
              </div>
              <div
                className="menu-item"
                data-menu-item-toggle="accordion"
                data-menu-item-trigger="click"
              >
                <SidebarIconButton
                  label="Chatbot"
                  icon="ki-setting-2"
                  to="/chatbot"
                />
                <SidebarIconButton label="Profile" to="/profile" />
              </div>
              <div className="profile-container h-full items-end flex">
              <hr className="my-4 border-t border-gray-300" />
              <div className=" p-2 flex items-center justify-between">
                <div className="Person-avatar bg-[#FF6F1E] p-2 rounded-lg">
                  <IoPersonSharp size="20" color="white" />
                </div>
                <div className="personal-info px-2">
                  <div className="email-container text-sm font-semibold">
                    {localStorage.getItem("email")}
                  </div>
                  <div className="name-container text-xs">
                    {localStorage.getItem("name")}
                  </div>
                </div>
                <div className="logout-option"
                onClick={()=>{
                  localStorage.removeItem("token")
                  navigate('/login');    
                }}>
                  <IoLogOutOutline size="30" />
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {onSettingPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleSettingPage}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <SettingPage />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
