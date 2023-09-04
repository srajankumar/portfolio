import Image from "next/image";
import Link from "next/link";
import React from "react";

type Items = {
  [key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
  return (
    <div>
      <div>
        <Link href={`/projects/${post.slug}`}>
          <Image
            alt={`cover image for ${post.title}`}
            src={post.coverImage}
            height={500}
            width={500}
            className="w-screen hover:grayscale-0 md:grayscale transition duration-700"
          />
        </Link>
      </div>
    </div>
  );
}
