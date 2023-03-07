import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";
import axios from "axios";
const initialState = {
  navBarIsLoading: false,
  headerLogo: null,
  email: "",
  facebook: "",
  phone: "",
  instagram: "",
  address: "",
};

export const getNavBarInfo = createAsyncThunk("/", async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get(_, {});
    return resp.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

const navBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {},
  extraReducers: {
    [getNavBarInfo.pending]: (state) => {
      state.navBarIsLoading = true;
    },
    [getNavBarInfo.fulfilled]: (state, { payload }) => {
      state.email = payload.setting[0].email;
      state.facebook = payload.setting[0].facebook;
      state.phone = payload.setting[0].phone;
      state.instagram = payload.setting[0].instagram;
      state.address = payload.setting[0].trans.address;
      state.headerLogo = payload.setting[0].img_logo;
      state.navBarIsLoading = false;
      //   state.posts = state.posts.concat(payload);
      //More to be added
    },
    [getNavBarInfo.rejected]: (state, { payload }) => {
      state.navBarIsLoading = false;
      //   state.posts = state.posts.concat(payload);
      //More to be added
    },
  },
});

export const {} = navBarSlice.actions;
export default navBarSlice.reducer;
