/* eslint-disable react/no-children-prop */
import MainLayout from "../components/MainLayout";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { MyPost } from "../interfaces/post";
import { NextPageContext } from "next";

interface PostPageProps {
  posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostPageProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    const load = async () => {
      const response = await fetch(`${process.env.API_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (!serverPosts) load();
  }, []);

  if (!posts) {
    return (
      <MainLayout title={undefined}>
        <p>Posts loading...</p>
      </MainLayout>
    );
  }

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

// can be called both on server and on client side
// Posts.getInitialProps = async ({ req }) => {
//   if (!req) {
//     return { posts: null };
//   }
//   const response = await fetch("${process.env.API_URL}/posts");
//   const posts = await response.json();
//   return { posts };
// };

// can be called only on server side
export async function getServerSideProps({ query, req }: NextPageContext) {
  // if (!req) {
  //   return { posts: null };
  // }
  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts: MyPost[] = await response.json();
  return { props: { posts } };
}
