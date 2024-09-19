import React from 'react'
import { CiFileOn } from "react-icons/ci";

export const ChatbotSidebarFileIcon = ({label, onClick}) => {
  return (
    <div
    onClick={onClick}
    className="menu-link flex items-center w-[100%] truncate grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[5px]"
    tabIndex={0}>
    <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
      <CiFileOn/>
    </span>
    <span className=" menu-title truncate text-sm font-light text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
      {label}
    </span>
    
  </div>
  )
}
