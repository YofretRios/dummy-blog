import { useRouter } from "next/router";
import { getPost } from "@/services";
import { GetServerSidePropsContext } from "next";
import { Post } from "@/types/post";
import useGetPost from "@/hooks/useGetPost";
import styles from "@/styles/Post.module.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { VscReactions } from "react-icons/vsc";

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
  const router = useRouter();
  const { data: post } = useGetPost(id, initialData);

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <header className={styles.header}>
        <button className={styles.backButton} type="button" onClick={goBack}>
          <IoChevronBackOutline size="30px" />
          Back
        </button>
      </header>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <ul className={styles.tagList}>
        {post.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className={styles.reactionCounter}>
        <VscReactions size="30px" />
        <span>{post.reactions}</span>
      </div>
    </>
  );
}
