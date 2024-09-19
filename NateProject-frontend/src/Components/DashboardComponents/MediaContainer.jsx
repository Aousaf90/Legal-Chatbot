import React from "react";

export const MediaContainer = ({ label, icon, description,cateogory, ...rest }) => {
  return (
    <div className="card flex-col justify-between gap-6 h-full bg-cover bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg" {...rest}>
      <img alt="" className="w-12 mt-4 ms-5" src={icon} />
      <div className="flex flex-col gap-1 pb-4 px-5">
        <span className="text-lg font-semibold text-[#2196F3] ">{label}</span>
        <span className="text-md  text-gray-900 truncate">
          {description}
        </span>
      </div>
    </div>
  );
};
