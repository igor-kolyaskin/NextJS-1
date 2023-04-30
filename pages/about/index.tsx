import MainLayout from "../../components/MainLayout";
import Router from "next/router";
import React from "react";

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
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();
  return { title: data.title };
};
