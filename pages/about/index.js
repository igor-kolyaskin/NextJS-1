import MainLayout from "@/components/MainLayout";
import Router from "next/router";

export default function About() {
  const linkClickHandler = () => {
    Router.push("/posts");
  };
  return (
    <MainLayout title="About">
      <h1>About</h1>
      <button onClick={linkClickHandler}>Go back to posts</button>
    </MainLayout>
  );
}
