import DateFormatter from "./DateFormatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Items = {
  [key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
  return (
    <div className="hover:scale-105 transition duration-300">
      <Link href={`/projects/${post.slug}`}>
        <div className="h-full bg-[#d1f2f9] bg-opacity-5 rounded-3xl overflow-hidden">
          <Image
            alt={`cover image for ${post.title}`}
            src={post.coverImage}
            height={500}
            width={500}
            className="lg:h-48 md:h-36 w-full object-cover object-center"
          />
          <div className="font-gothamL p-6">
            <h1 className="title-font text-xl font-gothamB mb-3">
              {post.title}
            </h1>
            <DateFormatter dateString={post.date} />
            <p className="leading-relaxed mb-3">{post.excerpt}</p>
            <div className="flex items-center flex-wrap">
              <span
                key=""
                className="text-green-500 pr-2 inline-flex items-center md:mb-2 lg:mb-0"
              >
                #stack1 #stack2
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
