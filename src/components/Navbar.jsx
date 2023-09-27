import { Link } from "react-scroll";
import Linkk from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* Mobile */}
      <div className="fixed bottom-0 w-full z-30 md:hidden grid">
        <nav className="backdrop-blur-md px-7 m-5 rounded-full py-5">
          <div className="flex justify-between">
            <Link smooth={true} duration={700} to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20.25 10a1.25 1.25 0 1 0-2.5 0h2.5Zm-14 0a1.25 1.25 0 1 0-2.5 0h2.5Zm13.866 2.884a1.25 1.25 0 0 0 1.768-1.768l-1.768 1.768ZM12 3l.884-.884a1.25 1.25 0 0 0-1.768 0L12 3Zm-9.884 8.116a1.25 1.25 0 0 0 1.768 1.768l-1.768-1.768ZM7 22.25h10v-2.5H7v2.5ZM20.25 19v-9h-2.5v9h2.5Zm-14 0v-9h-2.5v9h2.5Zm15.634-7.884l-9-9l-1.768 1.768l9 9l1.768-1.768Zm-10.768-9l-9 9l1.768 1.768l9-9l-1.768-1.768ZM17 22.25A3.25 3.25 0 0 0 20.25 19h-2.5a.75.75 0 0 1-.75.75v2.5Zm-10-2.5a.75.75 0 0 1-.75-.75h-2.5A3.25 3.25 0 0 0 7 22.25v-2.5Z"
                />
              </svg>
            </Link>
            <Link smooth={true} duration={700} to="about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="2.5">
                  <path
                    stroke-linejoin="round"
                    d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                  />
                  <circle cx="12" cy="7" r="3" />
                </g>
              </svg>
            </Link>
            <Link smooth={true} duration={700} to="project">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M18 17h-7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4l5 5v7a2 2 0 0 1-2 2z" />
                  <path d="M16 17v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" />
                </g>
              </svg>
            </Link>
            <Linkk href="/arts">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 20h4L18.5 9.5a2.828 2.828 0 1 0-4-4L4 16v4m9.5-13.5l4 4"
                />
              </svg>
            </Linkk>
            <Link smooth={true} duration={700} to="contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  d="M5.561 2.551a.84.84 0 0 0-1.033-.514c-.973.3-1.653 1.135-1.507 2.101A8.656 8.656 0 0 0 4.092 7.18a8.807 8.807 0 0 0 2.083 2.445c.754.61 1.812.442 2.558-.258A.85.85 0 0 0 8.81 8.21l-.534-.653a.845.845 0 0 0-.91-.272l-1.232.39l-.215-.222a4.984 4.984 0 0 1-.706-.929a4.767 4.767 0 0 1-.446-1.079l-.083-.295l.95-.875a.863.863 0 0 0 .221-.935l-.293-.788Zm-1.327-1.47a1.84 1.84 0 0 1 2.264 1.121l.293.788a1.863 1.863 0 0 1-.48 2.019l-.49.451c.063.174.148.373.258.566c.11.19.238.363.355.504l.63-.2a1.845 1.845 0 0 1 1.985.593l.534.653a1.85 1.85 0 0 1-.166 2.52c-.994.933-2.617 1.32-3.87.306a9.806 9.806 0 0 1-2.32-2.722a9.656 9.656 0 0 1-1.195-3.393c-.24-1.593.903-2.806 2.202-3.205Z"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
      {/* Desktop */}
      <div className="fixed z-30 w-full md:grid hidden">
        <nav className="flex justify-center py-8 backdrop-blur-sm">
          <div className="flex justify-center align-middle">
            <button className="focus:underline hover:underline underline-offset-4 focus:underline-offset-8">
              <Link
                smooth={true}
                duration={700}
                className="transition duration-300 font-gothamB tracking-wide w-20 flex items-center justify-center px-10 mr-5 cursor-pointer"
                to="/"
              >
                home
              </Link>
            </button>
            <button className="focus:underline hover:underline underline-offset-4 focus:underline-offset-8">
              <Link
                smooth={true}
                duration={700}
                className="transition duration-300 font-gothamB tracking-wide w-20 flex items-center justify-center px-10 mr-5 cursor-pointer"
                to="about"
              >
                about
              </Link>
            </button>
            <button className="focus:underline hover:underline underline-offset-4 focus:underline-offset-8">
              <Link
                smooth={true}
                duration={700}
                className="transition duration-300 font-gothamB tracking-wide w-20 flex items-center justify-center px-10 mr-5 cursor-pointer"
                to="project"
              >
                projects
              </Link>
            </button>

            <button className="focus:underline hover:underline underline-offset-4 focus:underline-offset-8">
              <Linkk
                className="transition duration-300 font-gothamB tracking-wide w-20 flex items-center justify-center px-10 mr-5 cursor-pointer"
                href="/arts"
              >
                arts
              </Linkk>
            </button>

            <button className="focus:underline hover:underline underline-offset-4 focus:underline-offset-8">
              <Link
                smooth={true}
                duration={700}
                className="transition duration-300 font-gothamB tracking-wide w-20 flex items-center justify-center px-10 cursor-pointer"
                to="contact"
              >
                contact
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="bg-neutral-800">
//       <nav className="container py-2 mx-auto">
//         <ul className="flex space-x-6 text-lg justify-center">
//           <li>
//             <NavLink href="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink href="/blog">Blog</NavLink>
//           </li>
//           <li>
//             <NavLink href="https://github.com/garrett-huggins/next13-blog-starter">
//               Github
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// type NavLink = {
//   href: string;
//   children: React.ReactNode;
// };

// const NavLink = ({ href, children }: NavLink) => {
//   return (
//     <Link className="hover:text-gray-300 hover:underline" href={href}>
//       {children}
//     </Link>
//   );
// };
