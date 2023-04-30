import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title} | I.Kolyaskin</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content="next,javascript,next.js" />
      </Head>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      <main>{children}</main>
      <style jsx global>
        {`
          nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 60px;
            background-color: darkblue;
          }

          a {
            color: tomato;
            text-decoration: none;
          }

          main {
            margin-top: 60px;
          }
        `}
      </style>
    </>
  );
}
