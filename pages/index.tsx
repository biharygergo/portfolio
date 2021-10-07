import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gergely Bihary</title>
        <meta
          name="description"
          content="Gergely Bihary's portfolio page - under development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi there,</h1>
        <p className={styles.subtitle}>I am still building this one - check back later!</p>
      </main>
    </div>
  );
};

export default Home;
