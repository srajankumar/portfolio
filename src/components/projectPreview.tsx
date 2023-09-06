import Link from "next/link";
import React from "react";

type Items = {
  [key: string]: string;
};

export default function Preview({ post }: { post: Items }) {
  return (
    <div>
      <div className="lg:px-5">
        <Link href={`/projects/${post.slug}`}>
          <img
            alt={`cover image for ${post.title}`}
            src={post.coverImage}
            className="w-screen hover:grayscale-0 md:grayscale transition duration-700"
          />
        </Link>
      </div>
    </div>
  );
}
