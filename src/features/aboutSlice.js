import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";

import { ProfileInfo } from "../utils/data";
import { aboutDescription } from "../utils/data";
import { missionDescription } from "../utils/data";

const initialState = {
  aboutIsLoading: false,
  aboutDescription: "",
  aboutCoverBanner: null,
  aboutSliderImages: ProfileInfo[0].slider,
  // aboutText: aboutDescription,
  missionSliderImages: ProfileInfo[0].slider,
  missionText: missionDescription,
};

export const getAboutInfo = createAsyncThunk("/", async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get(_, {});
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: {
    [getAboutInfo.pending]: (state) => {
      state.aboutIsLoading = true;
    },
    [getAboutInfo.fulfilled]: (state, { payload }) => {
      state.aboutIsLoading = false;
      state.aboutDescription = payload.setting[0].trans.description;
      state.aboutCoverBanner = payload.setting[0].img_about;
      //   state.posts = state.posts.concat(payload);
      //More to be added
    },
    [getAboutInfo.rejected]: (state, { payload }) => {
      state.aboutIsLoading = false;
      //   state.posts = state.posts.concat(payload);
      //More to be added
    },
  },
});

export const {} = aboutSlice.actions;
export default aboutSlice.reducer;
