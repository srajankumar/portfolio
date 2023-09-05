import { getAllPosts } from "../../lib/api";
import PostPreview from "../../components/PostPreview";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Blog() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <div className="container px-7 mx-auto md:px-5 md:pt-5 pt-2">
      <nav>
        <Link
          className="fixed z-10 right-0 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 hover:bg-opacity-5 transition duration-300 text-white font-gothamB tracking-wide w-20 flex items-center justify-center rounded-full py-2 px-16 md:mr-10 mr-6 md:mt-3 mt-10 cursor-pointer"
          href="/"
        >
          back
        </Link>
      </nav>
      <div className="fixed -z-10 inset-0 overflow-hidden">
        <img
          src="/project/bg.png"
          alt="bg"
          className="object-cover hidden md:grid object-center h-full w-full"
        />
        <img
          src="/project/bg-mobile.png"
          alt="bg"
          className="object-cover md:hidden object-center h-full w-full"
        />
      </div>
      <main>
        <div className="md:px-20 md:pt-5 pt-10 md:text-5xl text-4xl font-gothamB">
          Projects.
        </div>
        <div className="mt-10">
          {posts.map((post) => (
            <div className="md:mb-20 mb-5" key={post.slug}>
              <PostPreview post={post} />
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}
