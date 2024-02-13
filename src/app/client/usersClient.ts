import client from "./axiosInstance";
export type Body = {
  email: string;
  name: string;
  gender: string;
  status: string;
  id?: number;
};

export const getUsers = (params?: Record<string, unknown>) => {
  return client.get("/users", { params });
};

export const getSingleUsers = (id: number) => {
  return client.get(`/users/${id}`);
};

export const postUser = (body: Body) => {
  return client.post("/users", body);
};

export const deleteUser = (id: number) => {
  return client.delete(`/users/${id}`);
};

export const editUser = (id: number, body: Body) => {
  return client.put(`/users/${id}`, body);
};
