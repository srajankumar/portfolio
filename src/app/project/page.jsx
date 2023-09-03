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
          className="fixed right-0 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 hover:bg-opacity-5 transition duration-300 text-white font-gothamB tracking-wide w-20 flex items-center justify-center rounded-full py-2 px-16 md:mr-10 mr-6 md:mt-3 mt-10 cursor-pointer"
          href="/"
        >
          back
        </Link>
      </nav>
      <div class="fixed -z-10 inset-0 overflow-hidden">
        <img
          src="/project/bg.png"
          alt="bg"
          class="object-cover hidden md:grid object-center h-full w-full"
        />
        <img
          src="/project/bg-mobile.png"
          alt="bg"
          class="object-cover md:hidden object-center h-full w-full"
        />
      </div>
      <main>
        <div className="md:px-5 pb-10 md:pt-5 pt-10 md:text-5xl text-4xl font-gothamB">
          Projects.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-5 pb-10 lg:gap-10 gap-8">
          {posts.map((post) => (
            <div key={post.slug}>
              <PostPreview post={post} />
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}
