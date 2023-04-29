import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Posts({ posts }) {
  return (
    <MainLayout title="Posts">
      <title>Next.JS-1 Posts</title>
      <meta charSet="UTF-8"></meta>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();
  return { posts };
};
