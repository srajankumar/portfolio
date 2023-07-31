import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed z-50 right-0 bottom-0 flex flex-col py-10">
      <a
        href="https://github.com/srajankumar"
        target="_blank"
        className=" text-gray-300 hover:text-gray-400 transition duration-200  p-0 py-[1rem] pr-4 md:pr-[2rem]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
            <g fill="#fff">
              <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
              <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
            </g>
          </mask>
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              stroke-dasharray="30"
              stroke-dashoffset="30"
              d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="30;0"
              />
            </path>
            <path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.7s"
                dur="0.2s"
                values="10;0"
              />
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
              />
            </path>
          </g>
        </svg>
      </a>
      <a
        className=" text-gray-300 hover:text-gray-400 transition duration-200 p-0 py-[1rem] pr-4 md:pr-[2rem]"
        href="https://www.linkedin.com/in/kumarsrajan/"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <circle cx="4" cy="4" r="2" fill="none">
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              dur="1.5s"
              values="0;1"
            />
          </circle>
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
              stroke-dasharray="98"
              stroke-dashoffset="98"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="1.5s"
                values="98;0"
              />
            </path>
            <circle
              cx="4"
              cy="4"
              r="2"
              stroke-dasharray="25"
              stroke-dashoffset="25"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.8s"
                values="25;0"
              />
            </circle>
          </g>
        </svg>
      </a>
      <a
        className=" text-gray-300 hover:text-gray-400 transition duration-200 p-0 py-[1rem] pr-4 md:pr-[2rem]"
        href="https://www.instagram.com/withpainsimon/"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              stroke-dasharray="66"
              stroke-dashoffset="66"
              d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="66;132"
              />
            </path>
            <path
              stroke-dasharray="26"
              stroke-dashoffset="26"
              d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.7s"
                dur="0.4s"
                values="26;0"
              />
            </path>
          </g>
          <circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0">
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="1.1s"
              dur="0.4s"
              values="0;1"
            />
          </circle>
        </svg>
      </a>
    </div>
  );
};

export default Sidebar;
