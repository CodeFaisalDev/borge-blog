// "use client";
// import { useEffect, useState } from 'react';
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import NewPosts from "./components/NewPosts";
import HotTopics from "./components/HotTopics";
import { client } from "@/sanity/lib/client";
import Footer from "./components/Footer";

export default async function Home() {
  const posts = await client.fetch(`*[_type == "blog"]`);
  const newPosts = posts
    .sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
    .slice(0, 10);
  const hotTopics = posts
    .filter(
      (post) => post.category._ref === "5419882a-a761-4c02-8f10-b1ceb4fa0973"
    )
    .slice(0, 2);

  // console.log( posts);

  return (
    <main className="flex-grow">
      <div className="flex flex-col items-center justify-between md:px-36">
        <Hero />
        <div className="flex md:hidden px-5">
          <Blogs posts={posts} />
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-3 gap-5 justify-between px-36">
        <div className="col-span-2">
          <Blogs posts={posts} /> {/* Pass all posts to Blogs component */}
        </div>
        <div className="block col-span-1">
          <div className="grid grid-rows-2">
            <NewPosts posts={newPosts} />
            <HotTopics posts={hotTopics} />
          </div>
        </div>
      </div>
    </main>
  );
}
