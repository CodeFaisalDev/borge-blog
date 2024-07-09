import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import Link from "next/link";

const NewPostContainer = ({ post }) => {
  const id = post._id;
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).url()
    : "/placeholder.jpg";
  return (
    <Link href={`/blog/${id}`}>
      <div className="grid mt-5 grid-cols-3 cursor-pointer hover:scale-105 transition-all duration-700 hover:bg-slate-200 p-5 ">
        <div className="col-span-1">
          <figure className="w-full h-24 overflow-hidden rounded-xl">
            <Image
              src={imageUrl}
              width={500}
              height={500}
              style={{ width: "auto", height: "auto" }}
              className="object-cover"
            />
          </figure>
        </div>
        <div className="col-span-2 place-content-center p-2">
          <h1 className="font-bold text-lg mb-3">{post.title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default NewPostContainer;
