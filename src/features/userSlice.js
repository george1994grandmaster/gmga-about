import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockUser } from "../utils/realData";
import customFetch from "../utils/axios";

const initialState = {
  isLoading: false,
  user: true,
  user_id: 1,
  user_img:
    "https://i0.wp.com/www.northwestalpineguides.com/wp-content/uploads/2022/02/Aaron-S-280x250-2.jpg?fit=280%2C250&ssl=1",
  passwordChangeNotification: { success: false, text: "" },
  accountDeactivationNotification: { success: false, text: "" },
  userPostVisibilityOption: "PUBLIC",
  errorMessage: null,
};

export const loginUser = createAsyncThunk(
  "/",
  async (loginCredentials, thunkAPI) => {
    console.log(loginCredentials);
    // try {
    //   const resp = await customFetch.post("/", loginCredentials);
    //   return resp.data;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }
  }
);

export const recoverPassword = createAsyncThunk(
  "/",
  async (recoveryEmail, thunkAPI) => {
    console.log(recoveryEmail);
    // try {
    //   const resp = await customFetch.post("/", recoveryEmail);
    //   return resp.data;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }
  }
);

export const changePassword = createAsyncThunk(
  "/",
  async (passwordData, thunkAPI) => {
    console.log(passwordData);
    // try {
    //   const resp = await customFetch.post("/", passwordData);
    //   return resp.data;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }
  }
);

export const handleUserPostVisibility = createAsyncThunk(
  "/",
  async (visibilityType, thunkAPI) => {
    console.log(visibilityType);
    // try {
    //   const resp = await customFetch.post("/", passwordData);
    //   return resp.data;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }
  }
);

export const deactivateAccount = createAsyncThunk(
  "/",
  async (userData, thunkAPI) => {
    console.log(userData);
    return false;
    // try {
    //   const resp = await customFetch.post("/", passwordData);
    //   return resp.data;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNewPasswordsMathingError: (state, { payload }) => {
      return {
        ...state,
        passwordChangeNotification: { success: false, text: payload },
      };
    },
    setAccountDeactivationError: (state, { payload }) => {
      return {
        ...state,
        accountDeactivationNotification: { success: false, text: payload },
      };
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      //More to be added
    },
    [loginUser.rejected]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      //More to be added
    },
    [recoverPassword.pending]: (state) => {
      state.isLoading = true;
    },
    [recoverPassword.fulfilled]: (state) => {
      state.isLoading = false;
      //More to be added
    },
    [recoverPassword.rejected]: (state) => {
      state.isLoading = false;
      //More to be added
    },
    [changePassword.pending]: (state) => {
      state.isLoading = true;
    },
    [changePassword.fulfilled]: (state) => {
      state.isLoading = false;
      state.passwordChangeNotification = {
        success: true,
        text: "Password Changed",
      };
      //More to be added
    },
    [changePassword.rejected]: (state) => {
      state.isLoading = false;
      state.passwordChangeNotification = {
        success: false,
        text: "Incorrect Password",
      };
      //More to be added
    },
    [deactivateAccount.pending]: (state) => {
      state.isLoading = true;
    },
    [deactivateAccount.fulfilled]: (state) => {
      state.isLoading = false;
      state.accountDeactivationNotification = {
        success: false,
        text: "",
      };
      //More to be added
    },
    [deactivateAccount.rejected]: (state) => {
      state.isLoading = false;
      state.accountDeactivationNotification = {
        success: false,
        text: "Incorrect Email Password",
      };
      //More to be added
    },
  },
});

export const { setNewPasswordsMathingError, setAccountDeactivationError } =
  userSlice.actions;
export default userSlice.reducer;
