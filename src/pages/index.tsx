import Head from "next/head";
import Link from "next/link";
import { Post } from "@/types/post";
import { getPosts } from "@/services";
import styles from "@/styles/Home.module.css";
import useGetPosts from "@/hooks/useGetPosts";

type HomeProps = {
  initialData: Post[];
};

export async function getServerSideProps() {
  const posts = await getPosts();

  return {
    props: { initialData: posts },
  };
}

export default function Home({ initialData }: HomeProps) {
  const { data: posts } = useGetPosts(initialData);

  return (
    <>
      <Head>
        <title>Dummy Blog</title>
        <meta name="description" content="Dummy Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <Link href={`/post/${[post.id]}`} scroll={false}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
