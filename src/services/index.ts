import { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

  return data.posts;
}

export async function getPost(id: string): Promise<Post> {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const posts = await response.json();

  return posts;
}
