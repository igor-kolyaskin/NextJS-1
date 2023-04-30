import MainLayout from "@/components/MainLayout";
import Router from "next/router";

export default function About({ title }) {
  const linkClickHandler = () => {
    Router.push("/posts");
  };
  return (
    <MainLayout title="About">
      <h1>{title}</h1>
      <button onClick={linkClickHandler}>Go back to posts</button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");
  const data = await response.json();
  return { title: data.title };
};
