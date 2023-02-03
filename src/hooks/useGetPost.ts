import { getPost } from "@/services";
import { Post } from "@/types/post";
import { useQuery } from "@tanstack/react-query";

export default function useGetPost(id: string, initialData?: Post) {
  const query = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
    initialData,
  });

  return query;
}
