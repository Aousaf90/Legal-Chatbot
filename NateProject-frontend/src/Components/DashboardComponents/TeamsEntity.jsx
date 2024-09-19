import React from "react";

export const TeamsEntity = () => {
  return (
    <tr>
      <td>
        <input
          className="checkbox checkbox-sm"
          data-datatable-row-check="true"
          type="checkbox"
          defaultValue={1}
        />
      </td>
      <td>
        <div className="flex flex-col gap-2">
          <a
            className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
            href="#"
          >
            Product Management
          </a>
          <span className="text-2sm text-gray-700 font-normal leading-3">
            Product development &amp; lifecycle
          </span>
        </div>
      </td>
      <td>
        <div className="rating">
          <div className="rating-label checked">
            <i className="rating-on ki-solid ki-star text-base leading-none"></i>
            <i className="rating-off ki-outline ki-star text-base leading-none"></i>
          </div>
          <div className="rating-label checked">
            <i className="rating-on ki-solid ki-star text-base leading-none"></i>
            <i className="rating-off ki-outline ki-star text-base leading-none"></i>
          </div>
          <div className="rating-label checked">
            <i className="rating-on ki-solid ki-star text-base leading-none"></i>
            <i className="rating-off ki-outline ki-star text-base leading-none"></i>
          </div>
          <div className="rating-label checked">
            <i className="rating-on ki-solid ki-star text-base leading-none"></i>
            <i className="rating-off ki-outline ki-star text-base leading-none"></i>
          </div>
          <div className="rating-label checked">
            <i className="rating-on ki-solid ki-star text-base leading-none"></i>
            <i className="rating-off ki-outline ki-star text-base leading-none"></i>
          </div>
        </div>
      </td>
      <td>21 Oct, 2024</td>
      <td>
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
            <span className="relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-[30px] text-success-inverse ring-success-light bg-success">
              +10
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};
