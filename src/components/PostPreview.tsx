import Image from "next/image";
import Link from "next/link";
import React from "react";

type Items = {
  [key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
  return (
    <div>
      <div className="md:px-20">
        <Link href={`/projects/${post.slug}`}>
          {/* <p className="text-center font-gothamM md:text-5xl text-2xl pb-2 pt-5 md:py-5">
            {post.title}
          </p> */}
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
