import { RootState } from "@/app/_store/store";
import {
  addUser,
  setUsers,
  deleteUser,
  updateUser,
  setSearchQuery,
  setCurrentPage,
} from "@/app/_store/usersSlice";
import {
  Body,
  deleteUser as deleteUserAPI,
  editUser as editUserAPI,
  getSingleUsers,
  getUsers,
  postUser,
} from "@/app/client/usersClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

export const useAllUsers = (page: number) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.users.query);

  return useQuery({
    queryKey: ["users", page, searchQuery],
    queryFn: async () => {
      const { data } = await getUsers({ page, name: searchQuery });
      console.log("hell", data);
      dispatch(setUsers(data));
      return data;
    },
    staleTime: 5000,
  });
};

export const useSingleUser = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getSingleUsers(id),
    staleTime: 5000,
  });
};

export const usePostUser = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: Body) => postUser(body),
    onSuccess: (data: any) => {
      dispatch(addUser(data));
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useDeleteUser = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteUserAPI(id),
    onSuccess: (data: any) => {
      dispatch(deleteUser(data));
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useEditUser = (id: number) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: Body) => editUserAPI(id, body),
    onSuccess: (data: any) => {
      dispatch(updateUser(data));
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useSearchUsers = () => {
  const dispatch = useDispatch();

  return (searchQuery: string) => {
    dispatch(setSearchQuery(searchQuery));
  };
};
