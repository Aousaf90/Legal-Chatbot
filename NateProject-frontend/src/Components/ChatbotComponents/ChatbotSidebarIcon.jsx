import React from 'react'
import { FaRegFolder, FaFolder } from "react-icons/fa6";

export const ChatbotSidebarIcon = ({label, onClick, isSelected}) => {
  return (
    <div
      onClick={onClick}
      className={`menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[10px] ${isSelected ? "text-black font-bold" : "text-gray-800"}`}
      tabIndex={0}>
      <span className="menu-icon items-start w-[20px]">
        {isSelected ? <FaFolder /> : <FaRegFolder />}
      </span>
      <span className={`menu-title text-sm ${isSelected ? "font-bold" : "font-light"}`}>
        {label}
      </span>
    </div>
  )
}
