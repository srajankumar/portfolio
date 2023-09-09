import { getAllPosts } from "../../lib/api";
import Preview from "../../components/projectPreview";
import Link from "next/link";
import Footer from "@/components/Footer";
import BlobComponent from "@/components/BlobComponent";

export default function Blog() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  // Custom sorting function to compare dates in the "dd-mm-yyyy" format
  const compareDates = (a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB - dateA; // Sort in descending order (most recent first)
  };

  // Sort the posts based on date
  posts.sort(compareDates);
  return (
    <div>
      <BlobComponent />
      <div className="container px-7 mx-auto md:px-5 md:pt-5 pt-2">
        <nav>
          <Link
            className="fixed z-10 right-0 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 hover:bg-opacity-5 transition duration-300 text-white font-gothamB tracking-wide w-20 flex items-center justify-center rounded-full py-2 px-16 md:mr-10 mr-6 md:mt-3 mt-10 cursor-pointer"
            href="/"
          >
            back
          </Link>
        </nav>
        <main>
          <div className="md:px-5 md:pt-5 md:pb-10 pt-10 md:text-5xl text-4xl font-gothamB">
            Projects.
          </div>
          <div className="mt-10 grid md:grid-cols-2">
            {posts.map((post) => (
              <div className=" mb-5" key={post.slug}>
                <Preview post={post} />
              </div>
            ))}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
