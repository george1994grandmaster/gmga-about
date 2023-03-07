import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";
const initialState = {
  guidesIsLoading: false,
  filteredGuideList: [],
};

export const getGuidesInfo = createAsyncThunk(
  "/",
  async (guidesBatchNumber, thunkAPI) => {
    // const { guideBadgeNumber } = thunkAPI.getState.home;
    let url = `main?page=${guidesBatchNumber}`;
    try {
      const resp = await customFetch.get(url, {});
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    filterUsersBySkill: (state, { payload }) => {
      let filteredList;
      if (state.filteredGuideList.indexOf(payload) > -1) {
        filteredList = state.filteredGuideList.filter(
          (data) => data !== payload
        );
      } else {
        filteredList = state.filteredGuideList.concat(payload);
      }
      //More to be added
      return { ...state, filteredGuideList: filteredList };
    },

    filterUsersBySearch: (state, { payload }) => {
      console.log(payload);
      return { ...state };
    },
  },
  extraReducers: {
    [getGuidesInfo.pending]: (state) => {
      state.guidesIsLoading = true;
    },
    [getGuidesInfo.fulfilled]: (state, { payload }) => {
      state.guidesIsLoading = false;
      // state.filteredGuideList = payload.user.data;

      //   state.posts = state.posts.concat(payload);
      //More to be added
    },
    [getGuidesInfo.rejected]: (state, { payload }) => {
      state.guidesIsLoading = false;
      //   state.posts = state.posts.concat(payload);
      //More to be added
    },
  },
});

export const { filterUsersBySkill, filterUsersBySearch, setGuideBadgeNumber } =
  homeSlice.actions;
export default homeSlice.reducer;
