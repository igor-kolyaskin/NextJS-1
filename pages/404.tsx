import MainLayout from "../components/MainLayout";
import Link from "next/link";
import classes from "../styles/error.module.scss"
import React from "react";

export default function ErrorPage() {
  return (
    // eslint-disable-next-line react/no-children-prop
    <MainLayout title={undefined}>
      <h1 className={classes.error}>Error 404</h1>
      <p>
        Please <Link href="/">go back</Link> to the home page
      </p>
    </MainLayout>
  );
}
