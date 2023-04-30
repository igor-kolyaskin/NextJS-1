import { NextPageContext } from "next";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import { MyPost } from "../../interfaces/post";

interface PostPageProps {
  post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
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
      // eslint-disable-next-line react/no-children-prop
      <MainLayout title={undefined}>
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

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post: MyPost = await response.json();
  return { post };
};
