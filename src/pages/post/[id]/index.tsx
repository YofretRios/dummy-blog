import React from "react";
import { useRouter } from "next/router";
import { getPost } from "@/services";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Post } from "@/types/post";
import useGetPost from "@/hooks/useGetPost";

type PostProps = {
  initialData: Post;
  id: string;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id as string;

  if (id !== undefined || id === "") {
    const post = await getPost(id);

    return {
      props: { initialData: post, id },
    };
  }

  return { notFound: true };
}

export default function BlogPost({ initialData, id }: PostProps) {
  const { data: post } = useGetPost(id, initialData);

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  );
}
