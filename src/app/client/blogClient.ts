import client from "./axiosInstance";

export const getPosts = (params?: Record<string, unknown>) => {
  return client.get("/posts", { params });
};

export const getDetailPost = (id: number) => {
  return client.get(`/posts/${id}`);
};

export const getCommentsPost = (id: number) => {
  return client.get(`/posts/${id}/comments`);
};
