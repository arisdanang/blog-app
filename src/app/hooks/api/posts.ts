import {
  getCommentsPost,
  getDetailPost,
  getPosts,
} from "@/app/client/blogClient";
import { setPosts } from "@/app/_store/postsSlice";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export const usePosts = (page: number) => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["posts", page],
    queryFn: async () => {
      const { data } = await getPosts({ page });
      dispatch(setPosts(data));

      return data;
    },
    staleTime: 5000,
  });
};

export const useDetailPost = (id: number) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getDetailPost(id),
    staleTime: 5000,
  });
};

export const useCommentsPost = (id: number) => {
  return useQuery({
    queryKey: ["comment_post", id],
    queryFn: () => getCommentsPost(id),
    staleTime: 5000,
  });
};
