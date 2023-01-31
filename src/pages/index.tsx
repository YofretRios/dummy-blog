import Head from "next/head";
import Link from "next/link";
import { Post } from "@/types/post";
import styles from "@/styles/Home.module.css";

export async function getServerSideProps() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

  return {
    props: { posts: data.posts },
  };
}

type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps) {

  return (
    <>
      <Head>
        <title>Dummy Blog</title>
        <meta name="description" content="Dummy Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <p>{post.body}</p>
              <Link href={`/post/${[post.id]}`}>{post.title}</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
