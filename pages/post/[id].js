import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    };
    if (!serverPost) load();
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Post">
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <button>
        <Link href="/posts">Back to all posts</Link>
      </button>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();
  return { post };
};
