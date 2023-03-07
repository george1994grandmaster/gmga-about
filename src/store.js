import { configureStore } from "@reduxjs/toolkit";
import imageGallerySlice from "./features/imageGallerySlice";
import userSlice from "./features/userSlice";
import aboutSlice from "./features/aboutSlice";
import homeSlice from "./features/homeSlice";
import singleProfileSlice from "./features/singleProfileSlice";
import newsFeedSlice from "./features/newsFeedSlice";
import navBarSlice from "./features/navBarSlice";
export const store = configureStore({
  reducer: {
    imageGallery: imageGallerySlice,
    user: userSlice,
    about: aboutSlice,
    home: homeSlice,
    singleProfile: singleProfileSlice,
    newsFeed: newsFeedSlice,
    navBar: navBarSlice,
  },
});
