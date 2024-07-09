// app/api/posts/route.js
import { client } from "@/sanity/lib/client";

export async function GET() {
  const query = `*[_type == "blog"]`;
  const posts = await client.fetch(query);
  const newPosts = posts.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt)).slice(0, 10);
  const hotTopics = posts.filter(post => post.category._ref === "5419882a-a761-4c02-8f10-b1ceb4fa0973").slice(0, 2);

  return new Response(JSON.stringify({ newPosts, hotTopics, posts }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
