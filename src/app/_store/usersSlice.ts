import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Body } from "../client/usersClient";

interface UsersState {
  data: Body[];
  query: string;
  currentPage: number;
}

const initialState: UsersState = {
  data: [],
  query: "",
  currentPage: 1,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Body[]>) => {
      state.data = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    addUser: (state, action: PayloadAction<Body>) => {
      state.data.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<Body>) => {
      const index = state.data.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
  },
});

export const {
  setUsers,
  setSearchQuery,
  setCurrentPage,
  addUser,
  updateUser,
  deleteUser,
} = usersSlice.actions;
export default usersSlice.reducer;
