import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition";

import UserAvatar from "../images/user-avatar-32.png";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Dialog,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { Input } from "postcss";

function DropdownProfile({ align }) {
  const menuItems = [
    {
      title: "@material-tailwind/html",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      title: "@material-tailwind/react",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      title: "Material Tailwind PRO",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ];
  const subject = [
    { name: "مدیرعامل" },
    { name: "سهامدار" },
    { name: "حسابدار" },
    { name: "معاون" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="relative inline-flex">
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
        </Card>
      </Dialog>
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={UserAvatar}
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="truncate ms-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
            اصغر
          </span>
          <svg
            className="w-3 h-3 shrink-0 ms-1 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === "right" ? "end-0" : "start-0"
        }`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200 dark:border-slate-700">
            <div className="font-medium text-slate-800 dark:text-slate-100">
              اصغر
            </div>

            <select className="block bg-white w-full rounded-md border-0 px-3 py-1 my-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-900 sm:text-sm sm:leading-6">
              {subject.map((option) => (
                <option key={option.name}>{option.name}</option>
              ))}
            </select>
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
                to="/settings"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                تنظیمات
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
                to="/login"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                خروج
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
  //   <button
  // onClick={handleOpen}
  // className="text-xs text-slate-500 dark:text-slate-400 italic"
  // >
  // مدیرعامل
  // </button>
  // <Menu open={openMenu} handler={setOpenMenu} allowHover>
  // <MenuHandler>
  //   <Button
  //     variant="text"
  //     className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
  //   >
  //     مدیرعامل{" "}
  //     {/* <svg
  //       className={`h-3.5 w-3.5 transition-transform ${
  //         openMenu ? "rotate-180" : ""
  //       }`}
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       stroke-width="1.5"
  //       stroke="currentColor"
  //       class="w-6 h-6"
  //     >
  //       <path
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //         d="m19.5 8.25-7.5 7.5-7.5-7.5"
  //       />
  //     </svg> */}
  //   </Button>
  // </MenuHandler>
  // <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
  //   <ul className="col-span-4 flex w-full flex-col gap-1">
  //     {menuItems.map(({ title, description }) => (
  //       <a href="#" key={title}>
  //         <MenuItem>
  //           <Typography
  //             variant="h6"
  //             color="blue-gray"
  //             className="mb-1"
  //           >
  //             {title}
  //           </Typography>
  //           <Typography
  //             variant="small"
  //             color="gray"
  //             className="font-normal"
  //           >
  //             {description}
  //           </Typography>
  //         </MenuItem>
  //       </a>
  //     ))}
  //   </ul>
  // </MenuList>
  // </Menu>
}

export default DropdownProfile;
