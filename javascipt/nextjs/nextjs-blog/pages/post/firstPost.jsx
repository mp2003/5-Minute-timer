import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import styles from './firstPost.module.css'
const firstPost = () => {
  return (
    <Layout >
      
      <h1 className={styles.heading1}>First Post</h1>
      <h2 className={styles.heading2}>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  );
};
export default firstPost;
