import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockUser } from "../utils/realData";
import customFetch from "../utils/axios";

const initialState = {
  name: mockUser.trans.name,
  surname: mockUser.trans.surname,
  coverPhoto: mockUser.img_cover,
  profilePicture: mockUser.img,
  activitiesProvided: mockUser.activities,
  whatsapp: mockUser.whatsapp,
  instagram: mockUser.instagram,
  mail: mockUser.email,
  phone: mockUser.phone,
  languages: mockUser.language,
  aboutUser: mockUser.trans.description,
  posts: [],
};

export const saveProfileInfo = createAsyncThunk(
  "/",
  async (updatedProfileInfo, thunkAPI) => {
    console.log(updatedProfileInfo);
    // try {
    //   const resp = await customFetch.post("/", updatedProfileInfo);
    //   return resp.data;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }
  }
);

const singleProfileSlice = createSlice({
  name: "singleProfile",
  initialState,
  reducers: {
    saveChangedUserInfo: (state, { payload }) => {
      return { ...state };
    },
  },
  extraReducers: {},
});

export const { saveChangedUserInfo } = singleProfileSlice.actions;
export default singleProfileSlice.reducer;
