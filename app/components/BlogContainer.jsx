import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import Link from "next/link";

const BlogContainer = ({ post }) => {
  const id = post._id
  const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : "/placeholder.jpg";
  return (
    <Link href={`/blog/${id}`}>
    <div className="w-[90vw] md:w-full grid mt-3 md:grid-cols-3 cursor-pointer md:hover:scale-105 transition-all duration-700 hover:bg-slate-200 p-10 ">
      <div className="max-sm:col-span-2">
      <figure className="w-full h-64 overflow-hidden rounded-xl">
          <Image
            src={imageUrl}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
      <div className="col-span-2 place-content-center mt-3 md:m-3 md:p-3 text-justify">
        <h1 className="font-bold text-2xl mb-3">
          {post.title}
        </h1>
        <p className="font-light text-sm">
          {post.desc}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default BlogContainer;
