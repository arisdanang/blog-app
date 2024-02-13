import client from "./axiosInstance";

export const getComments = (params?: Record<string, unknown>) => {
  return client.get("/comments", { params });
};
