import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

interface PostsState {
  data: Post[];
}

const initialState: PostsState = {
  data: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
