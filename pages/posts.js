import MainLayout from "@/components/MainLayout";
import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const json = await response.json();
      setPosts(json);
    }
    load();
  }, []);

  return (
    <MainLayout title="Posts">
      <title>Next.JS-1 Posts</title>
      <meta charSet="UTF-8"></meta>
      <h1>Posts</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </MainLayout>
  );
}
