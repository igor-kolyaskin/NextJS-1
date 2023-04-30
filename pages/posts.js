import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("http://localhost:4200/posts");
      const data = await response.json();
      setPosts(data);
    };

    if (!serverPosts) load();
  }, []);

  if (!posts) {
    return (
      <MainLayout>
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
//   const response = await fetch("http://localhost:4200/posts");
//   const posts = await response.json();
//   return { posts };
// };

// can be called only on server side
export async function getServerSideProps({ query, req }) {
  // if (!req) {
  //   return { posts: null };
  // }
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();
  return { props: { posts } };
}
