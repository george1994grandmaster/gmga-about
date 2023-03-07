import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  scrollPosition: 0,
  galleryModalOpen: false,
  slideIndex: null,
  images: [],
};

const imageGallerySlice = createSlice({
  name: "imageGallery",
  initialState,
  reducers: {
    setModalOpen: (state, { payload }) => {
      const { scrollPosition, galleryModalOpen, slideIndex, images } = payload;
      document.body.style.overflow = "hidden";
      return {
        ...state,
        scrollPosition: scrollPosition,
        galleryModalOpen: galleryModalOpen,
        slideIndex: slideIndex,
        images: images,
      };
    },
    setModalClose: (state) => {
      document.body.style.overflow = "auto";
      return {
        ...state,
        galleryModalOpen: false,
        slideIndex: null,
        images: [],
      };
    },
  },
  extraReducers: {},
});

export const { setModalOpen, setModalClose } = imageGallerySlice.actions;
export default imageGallerySlice.reducer;
