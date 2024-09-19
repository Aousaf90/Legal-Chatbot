import React from "react";

export const 
TeamMettingSection = () => {
  return (
    <div className="card h-full">
      <div className="card-body lg:p-7.5 lg:pt-6 p-5">
        <div className="flex items-center justify-between flex-wrap gap-5 mb-7.5">
          <div className="flex flex-col gap-1">
            <span className="text-1.5xl font-semibold text-gray-900">
              Team Meeting
            </span>
            <span className="text-sm font-semibold text-gray-800">
              09:00 - 09:30
            </span>
          </div>
          <img
            alt=""
            className="size-7"
            src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/brand-logos/zoom.svg"
          />
        </div>
        <p className="text-sm font-normal text-gray-800 leading-5.5 mb-8">
          Team meeting to discuss strategies, outline
          <br />
          project milestones, define key goals, and
          <br />
          establish clear timelines.
        </p>
        <div className="flex rounded-lg bg-gray-100 gap-10 p-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1.5 text-sm font-normal text-gray-800">
              <i className="ki-filled ki-geolocation text-base text-gray-500"></i>
              Location
            </div>
            <div className="text-sm font-medium text-gray-800 pt-1.5">
              Amsterdam
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1.5 text-sm font-normal text-gray-800">
              <i className="ki-filled ki-users text-base text-gray-500"></i>
              Team
            </div>
            <div className="flex -space-x-2">
              <div className="flex">
                <img
                  className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                  src="/assets/media/avatars/300-4.png"
                />
              </div>
              <div className="flex">
                <img
                  className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                  src="/assets/media/avatars/300-1.png"
                />
              </div>
              <div className="flex">
                <img
                  className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                  src="/assets/media/avatars/300-2.png"
                />
              </div>
              <div className="flex">
                <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-[30px] text-success-inverse text-4xs ring-success-light bg-success">
                  +10
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer justify-center">
        <a className="btn btn-link" href="#">
          Join Meeting
        </a>
      </div>
    </div>
  );
};
