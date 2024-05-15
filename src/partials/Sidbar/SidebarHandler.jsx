import { useState } from "react";

const SidebarHandler = ({ name, child, link, children }) => {
  const [open, setOpen] = useState(false);
  if (child.length === 0) {
    return (
      <ul className="bg-indigo-900 text-base font-medium text-indigo-100 my-2 rounded-lg py-1.5 ps-2">
        <li>
          <a href={link}>{name}</a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li
          className={`flex justify-between text-white text-base font-semibold rounded-lg shadow-inner hover:bg-indigo-700  bg-indigo-800 dark:text-white my-2 py-1.5 px-4 ${
            open && "bg-indigo-700"
          }`}
          onClick={() => setOpen(!open)}
        >
          <a href="#0">{name}</a>
          <svg
            className={`shrink-0 w-5 h-5 text-white ${
              open && "rotate-180"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </li>
        <div className={open ? " text-indigo-800 " : "hidden"}>{children}</div>
      </ul>
    );
  }
};
export default SidebarHandler;
