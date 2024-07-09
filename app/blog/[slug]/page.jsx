import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { portableTextComponents } from "../../lib/portableTextComponents";
import MoreBlogs from "@/app/components/MoreBlogs";

const PostPage = async ({ params }) => {
  const { slug } = params;
  const query = `*[_type == "blog" && _id == "${slug}"]{
    _id,
    title,
    "author": author->name,
    "authorBio": author->bio,
    content[]{
      ...,
      asset->
    }
  }`;
  const posts = await client.fetch(query);

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-between px-5 md:px-24 py-8 md:mx-40">
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <div className="border-b p-5 md:p-20">
                <h2 className=" text-center font-bold text-4xl py-2">
                  {post.title}
                </h2>
                <p className="text-center">By: {post.author}</p>
              </div>
              <PortableText
                value={post.content}
                components={portableTextComponents}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex flex-col items-start justify-between px-24 py-8 mx-40">
        <MoreBlogs />
      </div>
    </div>
  );
};

export default PostPage;
