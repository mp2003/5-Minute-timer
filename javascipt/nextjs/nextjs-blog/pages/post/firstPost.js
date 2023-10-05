import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";

const firstPost = () => {
  return (
    <Layout>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  );
};

export default firstPost;
