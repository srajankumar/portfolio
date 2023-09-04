import { getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div>
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
      <main className="md:m-20 m-5">
        <div className="w-full text-white">
          <p className="text-2xl">{post.title}</p>
          <p className="text-gray-400">{post.author}</p>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </div>
  );
}
