import { useRouter } from "next/router";
import { getPost, getPosts } from "@/services";
import { GetServerSidePropsContext } from "next";
import { Post } from "@/types/post";
import useGetPost from "@/hooks/useGetPost";
import { IoChevronBackOutline } from "react-icons/io5";
import { VscReactions } from "react-icons/vsc";
import Head from "next/head";

type PostProps = {
  initialData: Post | {};
  id: string;
};

export default function BlogPost({ id }: PostProps) {
  const router = useRouter();
  const { data: post, isLoading } = useGetPost(id);

  const goBack = () => {
    router.back();
  };

  if (isLoading || !post) {
    return null;
  }

  return (
    <div className="container">
      <Head>
        <title>{post.title}</title>
      </Head>
      <header className="header">
        <button className="backButton" type="button" onClick={goBack}>
          <IoChevronBackOutline size="30px" />
          Back
        </button>
      </header>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <ul className="tagList">
        {post.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="reactionCounter">
        <VscReactions size="30px" />
        <span>{post.reactions}</span>
      </div>
    </div>
  );
}

BlogPost.getInitialProps = function (context: GetServerSidePropsContext) {
  const id = context.query?.id as string;

  return { id };
};
