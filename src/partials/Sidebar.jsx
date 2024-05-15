import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import SidebarLinkGroup from "./SidebarLinkGroup";
import SidebarHandler from "./Sidbar/SidebarHandler";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  const menu = [
    {
      name: "بازاریابی",
      link: "marketing",
      child: [
        {
          name: "پیامک",
          link: "sms",
          child: [
            { name: "ساخت منبع شماره", link: "createnumber", child: [] },
            { name: "ارسال پیامک", link: "send", child: [] },
          ],
        },
        {
          name: "تلگرام",
          link: "telegram",
          child: [
            {
              name: "ربات",
              link: "bot",
              child: [
                { name: "کانال های عضو", link: "chanale", child: [] },
                { name: "اعضا", link: "member", child: [] },
              ],
            },
            { name: "کانال ها", link: "chanel", child: [] },
          ],
        },
      ],
    },
    {
      name: "فراسهم",
      link: "farasahm",
      child: [
        {
          name: "ویسا",
          link: "visa",
          child: [
            { name: "سهامداران", link: "stockholder", child: [] },
            {
              name: "معاملات",
              link: "trade",
              child: [
                { name: "تی بی اس", link: "tbs", child: [] },
                {
                  name: "کارگزاری",
                  link: "tbs",
                  child: [
                    {
                      name: "سطح 3",
                      link: "ll3",
                      child: [{ name: "سطح 4", link: "ll4", child: [] }],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "بازگام",
          link: "bazargam",
          child: [
            { name: "سهامداران", link: "stockholder", child: [] },
            {
              name: "معاملات",
              link: "trade",
              child: [
                { name: "تی بی اس", link: "tbs", child: [] },
                { name: "کارگزاری", link: "tbs", child: [] },
              ],
            },
          ],
        },
      ],
    },
  ];

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 start-0 top-0 lg:static lg:start-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0 flex" : "-translate-x-96 hidden lg:flex"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="flex w-full justify-between">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient
                  x1="28.538%"
                  y1="20.229%"
                  x2="100%"
                  y2="108.156%"
                  id="logo-a"
                >
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="88.638%"
                  y1="29.267%"
                  x2="22.42%"
                  y2="100%"
                  id="logo-b"
                >
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path
                d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                fill="#4F46E5"
              />
              <path
                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                fill="url(#logo-a)"
              />
              <path
                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                fill="url(#logo-b)"
              />
            </svg>
            <h3 className="content-center text-lg font-semibold pe-2 lg:hidden lg:sidebar-expanded:block">
              اصغر
            </h3>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold ps-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                صفحات
              </span>
            </h3>
            <ul className="mt-3 lg:hidden lg:sidebar-expanded:block">
              {/* map menu */}
              {menu.map((i) => {
                return (
                  <SidebarHandler
                    key={i.link}
                    name={i.name}
                    link={i.link}
                    child={i.child}
                  >
                    <div className="inset-1  transition-all duration-[600ms] ">
                      {i.child.length > 0
                        ? i.child.map((j) => {
                            return (
                              <SidebarHandler
                                key={j.link}
                                name={j.name}
                                link={j.link}
                                child={j.child}
                              >
                                <div className=" indent-3 ">
                                  {j.child.length > 0
                                    ? j.child.map((k) => {
                                        return (
                                          <SidebarHandler
                                            key={k.link}
                                            name={k.name}
                                            link={k.link}
                                            child={k.child}
                                          >
                                            <div className=" indent-5 ">
                                              {k.child.length > 0
                                                ? k.child.map((y) => {
                                                    return (
                                                      <SidebarHandler
                                                        key={y.link}
                                                        name={y.name}
                                                        link={y.link}
                                                        child={y.child}
                                                      >
                                                        <div className="indent-7">
                                                          {y.child.length > 0
                                                            ? y.child.map(
                                                                (o) => {
                                                                  return (
                                                                    <SidebarHandler
                                                                      key={
                                                                        o.link
                                                                      }
                                                                      name={
                                                                        o.name
                                                                      }
                                                                      link={
                                                                        o.link
                                                                      }
                                                                      child={
                                                                        o.child
                                                                      }
                                                                    >
                                                                      <div className="indent-9">
                                                                        {o.child
                                                                          .length >
                                                                        0
                                                                          ? o.child.map(
                                                                              (
                                                                                z
                                                                              ) => {
                                                                                return (
                                                                                  <div className="indent-12">
                                                                                    <SidebarHandler
                                                                                      key={
                                                                                        z.link
                                                                                      }
                                                                                      name={
                                                                                        z.name
                                                                                      }
                                                                                      link={
                                                                                        z.link
                                                                                      }
                                                                                      child={
                                                                                        z.child
                                                                                      }
                                                                                    ></SidebarHandler>
                                                                                  </div>
                                                                                );
                                                                              }
                                                                            )
                                                                          : null}
                                                                      </div>
                                                                    </SidebarHandler>
                                                                  );
                                                                }
                                                              )
                                                            : null}
                                                        </div>
                                                      </SidebarHandler>
                                                    );
                                                  })
                                                : null}
                                            </div>
                                          </SidebarHandler>
                                        );
                                      })
                                    : null}
                                </div>
                              </SidebarHandler>
                            );
                          })
                        : null}
                    </div>
                  </SidebarHandler>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
