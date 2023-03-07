import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockPosts } from "../utils/realData";
import customFetch from "../utils/axios";
const initialState = {
  addPostModalOpen: false,
  posts: mockPosts,
  addPostIsLoading: false,
  newsFeedIsLoading: false,
  addCommentIsLoading: false,
  filterType: "new",
};

export const getAllPosts = createAsyncThunk(
  "/",
  async (batchNumber, thunkAPI) => {
    const { filterType } = thunkAPI.getState().newsFeed;
    let url = `/batch${batchNumber}/${filterType}`;
    // try {
    //   const resp = await customFetch.get(url, {});
    //   return resp.data;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }
  }
);

export const addPost = createAsyncThunk("/", async (postData, thunkAPI) => {
  console.log(postData);
  // try {
  //   const resp = await customFetch.post("/", postData);
  //   return resp.data;
  // } catch (error) {
  //   return thunkAPI.rejectWithValue(error.response.data.msg);
  // }
});

export const addComment = createAsyncThunk(
  "/",
  async (commentData, thunkAPI) => {
    console.log(commentData);
    // try {
    //   const resp = await customFetch.post("/", postData);
    //   return resp.data;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }
  }
);

export const likeComment = createAsyncThunk(
  "/",
  async (commentData, thunkAPI) => {
    console.log(commentData);
    // try {
    //   const resp = await customFetch.post("/", postData);
    //   return resp.data;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }
  }
);

export const likePost = createAsyncThunk("/", async (postData, thunkAPI) => {
  console.log("Like: ", postData);
  // try {
  //   const resp = await customFetch.post("/", postData);
  //   return resp.data;
  // } catch (error) {
  //   return thunkAPI.rejectWithValue(error.response.data.msg);
  // }
});

export const deletePost = createAsyncThunk("/", async (postData, thunkAPI) => {
  console.log("Delete: ", postData);
  // try {
  //   const resp = await customFetch.post("/", postData);
  //   return resp.data;
  // } catch (error) {
  //   return thunkAPI.rejectWithValue(error.response.data.msg);
  // }
});

export const sharePost = createAsyncThunk("/", async (postData, thunkAPI) => {
  console.log("Share: ", postData);
  // try {
  //   const resp = await customFetch.post("/", postData);
  //   return resp.data;
  // } catch (error) {
  //   return thunkAPI.rejectWithValue(error.response.data.msg);
  // }
});

const newsFeedSlice = createSlice({
  name: "newsFeed",
  initialState,
  reducers: {
    openAddPostModal: (state) => {
      document.body.style.overflow = "hidden";
      return { ...state, addPostModalOpen: true };
    },
    closeAddPostModal: (state) => {
      document.body.style.overflow = "auto";
      return { ...state, addPostModalOpen: false };
    },
    handleFilter: (state, { payload }) => {
      console.log(payload);
      return { ...state, filterType: payload };
    },
  },
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = state.posts.concat(payload);
      //More to be added
    },
    [getAllPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = state.posts.concat(payload);
      //More to be added
    },
    [addPost.pending]: (state) => {
      state.addPostIsLoading = true;
    },
    [addPost.fulfilled]: (state, { payload }) => {
      state.addPostIsLoading = false;
      state.addPostModalOpen = false;
      //More to be added
    },
    [addPost.rejected]: (state, { payload }) => {
      state.addPostIsLoading = false;
      state.addPostModalOpen = false;
      //More to be added
    },
    [addComment.pending]: (state) => {
      state.addCommentIsLoading = true;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.addCommentIsLoading = false;
      //More to be added
    },
    [addComment.rejected]: (state, { payload }) => {
      state.addCommentIsLoading = false;
      //More to be added
    },
  },
});

export const { openAddPostModal, closeAddPostModal, handleFilter } =
  newsFeedSlice.actions;
export default newsFeedSlice.reducer;
