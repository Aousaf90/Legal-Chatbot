import React from "react";
import { useNavigate } from "react-router-dom";

export const DashboardHeader = () => {
  const navigate = useNavigate();

  return (
    <header
      className="header  top-0 z-10 left-0 right-0 flex items-stretch shrink-0 bg-[#fefefe] dark:bg-coal-500"
      data-sticky="true"
      data-sticky-class="shadow-sm dark:border-b dark:border-b-coal-100"
      data-sticky-name="header"
      id="header"
    >
      <div
        className="container-fixed flex justify-between items-stretch lg:gap-4"
        id="header_container"
      >
        <div className="flex gap-1 lg:hidden items-center -ml-1">
          <a className="shrink-0" href="index.html">
            <img
              className="max-h-[25px] w-full"
              src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/app/mini-logo.svg"
            />
          </a>
          <div className="flex items-center">
            <button
              className="btn btn-icon btn-light btn-clear btn-sm"
              data-drawer-toggle="#sidebar"
            >
              <i className="ki-filled ki-menu"></i>
            </button>
            <button
              className="btn btn-icon btn-light btn-clear btn-sm"
              data-drawer-toggle="#megamenu_wrapper"
            >
              <i className="ki-filled ki-burger-menu-2"></i>
            </button>
          </div>
        </div>
        <div className="flex items-stretch" id="megamenu_container">
          <div
            className="flex items-stretch"
            data-reparent="true"
            data-reparent-mode="prepend|lg:prepend"
            data-reparent-target="body|lg:#megamenu_container"
          >
            <div
              className="hidden lg:flex lg:items-stretch"
              data-drawer="true"
              data-drawer-class="drawer drawer-start fixed z-10 top-0 bottom-0 w-full mr-5 max-w-[250px] p-5 lg:p-0 overflow-auto"
              data-drawer-enable="true|lg:false"
              id="megamenu_wrapper"
            >
              <div
                className="menu flex-col lg:flex-row gap-5 lg:gap-7.5"
                data-menu="true"
                id="megamenu"
              >
                <div className="menu-item active">
                  <a
                    className="menu-link text-nowrap text-sm text-gray-700 font-medium menu-item-hover:text-primary menu-item-active:text-gray-900 menu-item-active:font-semibold"
                    href="index.html"
                  >
                    <span className="menu-title text-nowrap">Home</span>
                  </a>
                </div>
                <div
                  className="menu-item"
                  data-menu-item-placement="bottom-start"
                  data-menu-item-toggle="accordion|lg:dropdown"
                  data-menu-item-trigger="click|lg:hover"
                >
                  <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                    <span className="menu-title text-nowrap">
                      Public Profiles
                    </span>
                    <span className="menu-arrow flex lg:hidden">
                      <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                      <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                    </span>
                  </div>
                 
                </div>
                <div
                  className="menu-item"
                  data-menu-item-offset="-300px, 0"
                  data-menu-item-overflow="true"
                  data-menu-item-placement="bottom-start"
                  data-menu-item-toggle="accordion|lg:dropdown"
                  data-menu-item-trigger="click|lg:hover"
                >
                  <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                    <span className="menu-title text-nowrap">My Account</span>
                    <span className="menu-arrow flex lg:hidden">
                      <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                      <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                    </span>
                  </div>
                 
                </div>
                
                <div
                  className="menu-item"
                  data-menu-item-offset="-300px, 0"
                  data-menu-item-overflow="true"
                  data-menu-item-placement="bottom-start"
                  data-menu-item-toggle="accordion|lg:dropdown"
                  data-menu-item-trigger="click|lg:hover"
                >
                  <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                    <span className="menu-title text-nowrap">
                      Authentication
                    </span>
                    <span className="menu-arrow flex lg:hidden">
                      <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                      <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                    </span>
                  </div>
                
                </div>
                <div
                  className="menu-item"
                  data-menu-item-offset="0,0|lg:-20px, 0"
                  data-menu-item-overflow="true"
                  data-menu-item-placement="bottom-start"
                  data-menu-item-toggle="dropdown"
                  data-menu-item-trigger="click|lg:hover"
                >
                  <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                    <span className="menu-title text-nowrap">Help</span>
                    <span className="menu-arrow flex lg:hidden">
                      <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                      <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                    </span>
                  </div>
                  <div className="menu-dropdown menu-default py-2.5 w-full max-w-[220px]">
                    <div className="menu-item">
                      <a
                        className="menu-link"
                        href="../docs/getting-started/installation.html"
                        tabIndex={0}
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-coffee"></i>
                        </span>
                        <span className="menu-title grow-0">
                          Getting Started
                        </span>
                      </a>
                    </div>
                    <div
                      className="menu-item"
                      data-menu-item-placement="right-start"
                      data-menu-item-toggle="dropdown"
                      data-menu-item-trigger="click|lg:hover"
                    >
                      <div className="menu-link">
                        <span className="menu-icon">
                          <i className="ki-filled ki-information"></i>
                        </span>
                        <span className="menu-title">Support Forum</span>
                        <span className="menu-arrow">
                          <i className="ki-filled ki-right text-3xs"></i>
                        </span>
                      </div>
                      <div className="menu-dropdown menu-default w-full max-w-[175px] lg:max-w-[220px]">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="https://devs.keenthemes.com/"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-questionnaire-tablet"></i>
                            </span>
                            <span className="menu-title grow-0">
                              All Questions
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="https://devs.keenthemes.com/popular"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-star"></i>
                            </span>
                            <span className="menu-title grow-0">
                              Popular Questions
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="https://devs.keenthemes.com/question/create"
                            tabIndex={0}
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-message-question"></i>
                            </span>
                            <span className="menu-title grow-0">
                              Ask Question
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link"
                        href="../docs/getting-started/license.html"
                        tabIndex={0}
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-subtitle"></i>
                        </span>
                        <span className="menu-title">Licenses &amp; FAQ</span>
                        <span
                          className="menu-badge"
                          data-tooltip="#menu_tooltip_3"
                        >
                          <i className="ki-filled ki-information-2 text-gray-500 text-md"></i>
                        </span>
                        <div className="tooltip" id="menu_tooltip_3">
                          Learn more about licenses
                        </div>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link"
                        href="../docs/index.html"
                        tabIndex={0}
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-questionnaire-tablet"></i>
                        </span>
                        <span className="menu-title grow-0">Documentation</span>
                      </a>
                    </div>
                    <div className="menu-separator"></div>
                    <div className="menu-item">
                      <a
                        className="menu-link"
                        href="https://keenthemes.com/contact"
                        tabIndex={0}
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-share"></i>
                        </span>
                        <span className="menu-title grow-0">Contact Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-3.5">
          <button
            className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500"
            data-modal-toggle="#search_modal"
            onClick={()=>{
              localStorage.removeItem("token")
              navigate('/login');

            }}
          >
          
            <i className="ki-filled ki-magnifier"></i>
          </button>
        
          <div className="menu" data-menu="true">
            <div
              className="menu-item"
              data-menu-item-offset="20px, 10px"
              data-menu-item-placement="bottom-end"
              data-menu-item-toggle="dropdown"
              data-menu-item-trigger="click|lg:click"
            >
              <div className="menu-toggle btn btn-icon rounded-full" onClick={()=>{ localStorage.removeItem("token")
              navigate('/login');}}>
                <img
                  alt=""
                  className="size-9 rounded-full border-2 border-success shrink-0"
                  src="/assets/media/avatars/300-2.png"
                />
              </div>
              <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[250px]">
                <div className="menu-separator"></div>
                <div className="flex flex-col">
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="public-profile/profiles/default.html"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-badge"></i>
                      </span>
                      <span className="menu-title">Public Profile</span>
                    </a>
                  </div>
                  <div
                    className="menu-item"
                    data-menu-item-offset="-50px, 0"
                    data-menu-item-placement="left-start"
                    data-menu-item-toggle="dropdown"
                    data-menu-item-trigger="click|lg:hover"
                  >
                    <div className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-filled ki-setting-2"></i>
                      </span>
                      <span className="menu-title">My Account</span>
                      <span className="menu-arrow">
                        <i className="ki-filled ki-right text-3xs"></i>
                      </span>
                    </div>
                    <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[220px]">
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="account/home/get-started.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-coffee"></i>
                          </span>
                          <span className="menu-title">Get Started</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="account/home/user-profile.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-some-files"></i>
                          </span>
                          <span className="menu-title">My Profile</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="#">
                          <span className="menu-icon">
                            <i className="ki-filled ki-icon"></i>
                          </span>
                          <span className="menu-title">Billing</span>
                          <span
                            className="menu-badge"
                            data-tooltip="true"
                            data-tooltip-placement="top"
                          >
                            <i className="ki-filled ki-information-2 text-md text-gray-500"></i>
                            <span
                              className="tooltip"
                              data-tooltip-content="true"
                            >
                              Payment and subscription info
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="account/security/overview.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-medal-star"></i>
                          </span>
                          <span className="menu-title">Security</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="account/members/teams.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-setting"></i>
                          </span>
                          <span className="menu-title">
                            Members &amp; Roles
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="account/integrations.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-switch"></i>
                          </span>
                          <span className="menu-title">Integrations</span>
                        </a>
                      </div>
                      <div className="menu-separator"></div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="account/security/overview.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-shield-tick"></i>
                          </span>
                          <span className="menu-title">Notifications</span>
                          <label className="switch switch-sm">
                            <input
                              defaultChecked=""
                              name="check"
                              type="checkbox"
                              defaultValue={1}
                            />
                          </label>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-separator"></div>
                <div className="flex flex-col">
                  <div className="menu-item mb-0.5">
                    <div className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-filled ki-moon"></i>
                      </span>
                      <span className="menu-title">Dark Mode</span>
                      <label className="switch switch-sm">
                        <input
                          data-theme-state="dark"
                          data-theme-toggle="true"
                          name="check"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="menu-item px-4 py-1.5">
                    <a
                      className="btn btn-sm btn-light justify-center"
                      href="authentication/classic/sign-in.html"
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
