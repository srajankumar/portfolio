import Footer from "@/components/Footer";
import { getPostBySlug } from "../../../lib/api";
import Link from "next/link";

function Post({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "description",
    "content",
    "coverImage",
    "techStack",
    "live",
    "gitHub",
  ]);

  return (
    <div>
      <nav className=" px-7 mx-auto md:px-5 md:pt-5 pt-2">
        <Link
          className="fixed z-10 right-0 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 hover:bg-opacity-5 transition duration-300 text-white font-gothamB tracking-wide w-20 flex items-center justify-center rounded-full py-2 px-16 md:mr-10 mr-6 md:mt-3 mt-10 cursor-pointer"
          href="/project"
        >
          back
        </Link>
      </nav>
      <div className="fixed -z-10 inset-0 overflow-hidden">
        <img
          src="/assets/project/background/bg.png"
          alt="bg"
          className="object-cover hidden md:grid object-center h-full w-full"
        />
        <img
          src="/assets/project/background/bg-mobile.png"
          alt="bg"
          className="object-cover md:hidden object-center h-full w-full"
        />
      </div>
      <main className="md:mx-20 m-5 md:mt-0 ">
        <div className="w-full text-white">
          <p className="px-2 font-gothamB md:text-5xl sm:text-4xl text-3xl text-left pt-6 pb-10 md:py-10">
            {post.title}.
          </p>
          <img
            alt={`cover image for ${post.title}`}
            src={post.coverImage}
            className="w-screen"
          />
          <p className="md:text-3xl text-2xl pt-5 font-gothamM">Description.</p>
          <p className="md:py-5 py-3 font-gothamL tracking-wide">
            {post.description}
          </p>
          <p className="md:text-3xl text-2xl pt-2 font-gothamM">Tech Stack.</p>
          <ul className="font-gothamL pt-3">
            {post.techStack.map((tech, index) => (
              <li className="py-1" key={index}>
                &#8227; {tech}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2">
            <Link
              className="bg-white hover:text-gray-300 backdrop-filter backdrop-blur-lg bg-opacity-10 hover:bg-opacity-5 transition duration-300 text-white font-gothamM tracking-wide flex items-center justify-center rounded-lg py-2 px-16 md:mr-5 mr-3 md:mt-5 mt-10 cursor-pointer"
              href={post.gitHub}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="mr-2"
              >
                <path
                  fill="currentColor"
                  d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z"
                />
              </svg>
              GitHub
            </Link>
            <Link
              className="bg-white hover:text-gray-300 backdrop-filter backdrop-blur-lg bg-opacity-10 hover:bg-opacity-5 transition duration-300 text-white font-gothamM tracking-wide flex items-center justify-center rounded-lg py-2 px-16 md:ml-5 ml-3 md:mt-5 mt-10 cursor-pointer"
              href={post.live}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="mr-2"
              >
                <path
                  fill="currentColor"
                  d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                />
              </svg>
              Web
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Post;
