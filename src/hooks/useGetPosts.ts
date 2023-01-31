import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/services";
import { Post } from "@/types/post";

export default function useGetPosts(initialData: Post[]) {
  const query = useQuery(
    {
      queryKey: ["posts"],
      queryFn: getPosts,
      initialData,
    }
  );

  return query;
}
