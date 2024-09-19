import React from 'react'

export const TeamSection = () => {
  return (
    <div className="lg:col-span-2">
    <div className="grid">
      <div className="card card-grid h-full min-w-full">
        <div className="card-header">
          <h3 className="card-title">Teams</h3>
          <div className="input input-sm max-w-48">
            <i className="ki-filled ki-magnifier"></i>
            <input placeholder="Search Teams" type="text" />
          </div>
        </div>
        <div className="card-body">
          <div
            data-datatable="true"
            data-datatable-page-size={5}
          >
            <div className="scrollable-x-auto">
              <table
                className="table table-border"
                data-datatable-table="true"
              >
                <thead>
                  <tr>
                    <th className="w-[60px]">
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-check="true"
                        type="checkbox"
                      />
                    </th>
                    <th className="w-[280px]">
                      <span className="sort asc">
                        <span className="sort-label">Team</span>
                        <span className="sort-icon"></span>
                      </span>
                    </th>
                    <th className="min-w-[135px]">
                      <span className="sort">
                        <span className="sort-label">
                          Rating
                        </span>
                        <span className="sort-icon"></span>
                      </span>
                    </th>
                    <th className="min-w-[135px]">
                      <span className="sort">
                        <span className="sort-label">
                          Last Modified
                        </span>
                        <span className="sort-icon"></span>
                      </span>
                    </th>
                    <th className="min-w-[135px]">
                      <span className="sort">
                        <span className="sort-label">
                          Members
                        </span>
                        <span className="sort-icon"></span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
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
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={2}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          Marketing Team
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Campaigns &amp; market analysis
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
                        <div className="rating-label indeterminate">
                          <i
                            className="rating-on ki-solid ki-star text-base leading-none"
                            style={{ width: "50.0%" }}
                          ></i>
                          <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                        </div>
                        <div className="rating-label">
                          <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                          <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                        </div>
                      </div>
                    </td>
                    <td>15 Oct, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-4.png"
                          />
                        </div>
                        <div className="flex">
                          <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-[30px] uppercase text-warning-inverse ring-warning-light bg-warning">
                            g
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={3}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          HR Department
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Talent acquisition, employee welfare
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
                    <td>10 Oct, 2024</td>
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
                          <span className="relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-[30px] text-info-inverse ring-info-light bg-info">
                            +A
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={4}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          Sales Division
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Customer relations, sales strategy
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
                    <td>05 Oct, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-24.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-7.png"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={5}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          Development Team
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Software development
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
                        <div className="rating-label indeterminate">
                          <i
                            className="rating-on ki-solid ki-star text-base leading-none"
                            style={{ width: "50.0%" }}
                          ></i>
                          <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                        </div>
                      </div>
                    </td>
                    <td>01 Oct, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-3.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-8.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-9.png"
                          />
                        </div>
                        <div className="flex">
                          <span className="relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-[30px] text-danger-inverse ring-danger-light bg-danger">
                            +5
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={6}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          Quality Assurance
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Product testing
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
                    <td>25 Sep, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-6.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-5.png"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={7}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          Finance Team
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Financial planning
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
                        <div className="rating-label">
                          <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                          <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                        </div>
                      </div>
                    </td>
                    <td>20 Sep, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-10.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-11.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-12.png"
                          />
                        </div>
                        <div className="flex">
                          <span className="relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-[30px] text-primary-inverse ring-primary-light bg-primary">
                            +8
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={8}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          Customer Support
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Customer service
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
                        <div className="rating-label indeterminate">
                          <i
                            className="rating-on ki-solid ki-star text-base leading-none"
                            style={{ width: "50.0%" }}
                          ></i>
                          <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                        </div>
                        <div className="rating-label">
                          <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                          <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                        </div>
                      </div>
                    </td>
                    <td>15 Sep, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-13.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-14.png"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={9}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          R&amp;D Team
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Research &amp; development
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
                    <td>10 Sep, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-15.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-16.png"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={10}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          Operations Team
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Operations management
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
                        <div className="rating-label">
                          <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                          <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                        </div>
                      </div>
                    </td>
                    <td>05 Sep, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-17.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-18.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-19.png"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={11}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          IT Support
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Technical support
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
                    <td>01 Sep, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-20.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-21.png"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={12}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          Legal Team
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Legal support
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
                        <div className="rating-label">
                          <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                          <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                        </div>
                      </div>
                    </td>
                    <td>25 Aug, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-22.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-23.png"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={13}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          Logistics Team
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Supply chain
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
                        <div className="rating-label indeterminate">
                          <i
                            className="rating-on ki-solid ki-star text-base leading-none"
                            style={{ width: "50.0%" }}
                          ></i>
                          <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                        </div>
                        <div className="rating-label">
                          <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                          <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                        </div>
                      </div>
                    </td>
                    <td>20 Aug, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-24.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-25.png"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={14}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          Procurement Team
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Supplier management
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
                    <td>15 Aug, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-26.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-27.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-28.png"
                          />
                        </div>
                        <div className="flex">
                          <span className="relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-[30px] text-info-inverse ring-info-light bg-info">
                            +3
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="checkbox checkbox-sm"
                        data-datatable-row-check="true"
                        type="checkbox"
                        defaultValue={15}
                      />
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <a
                          className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                          href="#"
                        >
                          Training Team
                        </a>
                        <span className="text-2sm text-gray-700 font-normal leading-3">
                          Employee training
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
                        <div className="rating-label">
                          <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                          <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                        </div>
                      </div>
                    </td>
                    <td>10 Aug, 2024</td>
                    <td>
                      <div className="flex -space-x-2">
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-29.png"
                          />
                        </div>
                        <div className="flex">
                          <img
                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                            src="/assets/media/avatars/300-30.png"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
              <div className="flex items-center gap-2 order-2 md:order-1">
                Show
                <select
                  className="select select-sm w-16"
                  data-datatable-size="true"
                  name="perpage"
                ></select>
                per page
              </div>
              <div className="flex items-center gap-4 order-1 md:order-2">
                <span data-datatable-info="true"></span>
                <div
                  className="pagination"
                  data-datatable-pagination="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
