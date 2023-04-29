import MainLayout from "@/components/MainLayout";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <MainLayout title="Post">
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <button><Link href="/posts">Back to all posts</Link></button>
    </MainLayout>
  );
}

Post.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();
  return { post };
};
