import React from "react";
import { NavLink } from "react-router-dom";

export const SidebarIconButton = ({ label, icon, onClick, to }) => {
  return (
    <NavLink
      to={to}
      className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
      tabIndex={0}
    >
      <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
        <i className={`ki-filled ki-profile-circle text-lg ${icon}`}></i>
      </span>
      <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
        {label}
      </span>
      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
      </span>
    </NavLink>
  );
};
