import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Next.JS-1 Home</title>
      </Head>
      <h1 className="text-bold">Hello Next.JS !!!</h1>
      <p>
        <Link href={"/about"}>About</Link>
      </p>
      <p>
        <Link href="/posts">Posts</Link>
      </p>
    </>
  );
}
