import React from 'react'

export const HighlightSection = () => {
  return (
    <div className="lg:col-span-1">
                  <div className="card h-full">
                    <div className="card-header">
                      <h3 className="card-title">Highlights</h3>
                      <div className="menu" data-menu="true">
                        <div
                          className="menu-item"
                          data-menu-item-offset="0, 10px"
                          data-menu-item-placement="bottom-end"
                          data-menu-item-toggle="dropdown"
                          data-menu-item-trigger="click|lg:click"
                        >
                          <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                            <i className="ki-filled ki-dots-vertical"></i>
                          </button>
                          <div
                            className="menu-dropdown menu-default w-full max-w-[200px]"
                            data-menu-dismiss="true"
                          >
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="account/activity.html"
                              >
                                <span className="menu-icon">
                                  <i className="ki-filled ki-cloud-change"></i>
                                </span>
                                <span className="menu-title">Activity</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                data-modal-toggle="#share_profile_modal"
                                href="#"
                              >
                                <span className="menu-icon">
                                  <i className="ki-filled ki-share"></i>
                                </span>
                                <span className="menu-title">Share</span>
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              data-menu-item-offset="-15px, 0"
                              data-menu-item-placement="right-start"
                              data-menu-item-toggle="dropdown"
                              data-menu-item-trigger="click|lg:hover"
                            >
                              <div className="menu-link">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-notification-status"></i>
                                </span>
                                <span className="menu-title">
                                  Notifications
                                </span>
                                <span className="menu-arrow">
                                  <i className="ki-filled ki-right text-3xs"></i>
                                </span>
                              </div>
                              <div className="menu-dropdown menu-default w-full max-w-[175px]">
                                <div className="menu-item">
                                  <a
                                    className="menu-link"
                                    href="account/home/settings-sidebar.html"
                                  >
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-sms"></i>
                                    </span>
                                    <span className="menu-title">Email</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link"
                                    href="account/home/settings-sidebar.html"
                                  >
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-message-notify"></i>
                                    </span>
                                    <span className="menu-title">SMS</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link"
                                    href="account/home/settings-sidebar.html"
                                  >
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-notification-status"></i>
                                    </span>
                                    <span className="menu-title">Push</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                data-modal-toggle="#report_user_modal"
                                href="#"
                              >
                                <span className="menu-icon">
                                  <i className="ki-filled ki-dislike"></i>
                                </span>
                                <span className="menu-title">Report</span>
                              </a>
                            </div>
                            <div className="menu-separator"></div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="account/home/settings-enterprise.html"
                              >
                                <span className="menu-icon">
                                  <i className="ki-filled ki-setting-3"></i>
                                </span>
                                <span className="menu-title">Settings</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body flex flex-col gap-4 p-5 lg:p-7.5 lg:pt-4">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-normal text-gray-700">
                          All time sales
                        </span>
                        <div className="flex items-center gap-2.5">
                          <span className="text-3xl font-semibold text-gray-900">
                            $295.7k
                          </span>
                          <span className="badge badge-outline badge-success badge-sm">
                            +2.7%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mb-1.5">
                        <div className="bg-success h-2 w-full max-w-[60%] rounded-sm"></div>
                        <div className="bg-brand h-2 w-full max-w-[25%] rounded-sm"></div>
                        <div className="bg-info h-2 w-full max-w-[15%] rounded-sm"></div>
                      </div>
                      <div className="flex items-center flex-wrap gap-4 mb-1">
                        <div className="flex items-center gap-1.5">
                          <span className="badge badge-dot size-2 badge-success"></span>
                          <span className="text-sm font-normal text-gray-800">
                            Metronic
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="badge badge-dot size-2 badge-danger"></span>
                          <span className="text-sm font-normal text-gray-800">
                            Bundle
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="badge badge-dot size-2 badge-info"></span>
                          <span className="text-sm font-normal text-gray-800">
                            MetronicNest
                          </span>
                        </div>
                      </div>
                      <div className="border-b border-gray-300"></div>
                      <div className="grid gap-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-1.5">
                            <i className="ki-filled ki-shop text-base text-gray-500"></i>
                            <span className="text-sm font-normal text-gray-900">
                              Online Store
                            </span>
                          </div>
                          <div className="flex items-center text-sm font-medium text-gray-800 gap-6">
                            <span className="lg:text-right">$172k</span>
                            <span className="lg:text-right">
                              <i className="ki-filled ki-arrow-up text-success"></i>
                              3.9%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-1.5">
                            <i className="ki-filled ki-facebook text-base text-gray-500"></i>
                            <span className="text-sm font-normal text-gray-900">
                              Facebook
                            </span>
                          </div>
                          <div className="flex items-center text-sm font-medium text-gray-800 gap-6">
                            <span className="lg:text-right">$85k</span>
                            <span className="lg:text-right">
                              <i className="ki-filled ki-arrow-down text-danger"></i>
                              0.7%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-1.5">
                            <i className="ki-filled ki-instagram text-base text-gray-500"></i>
                            <span className="text-sm font-normal text-gray-900">
                              Instagram
                            </span>
                          </div>
                          <div className="flex items-center text-sm font-medium text-gray-800 gap-6">
                            <span className="lg:text-right">$36k</span>
                            <span className="lg:text-right">
                              <i className="ki-filled ki-arrow-up text-success"></i>
                              8.2%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}
