import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfile, resetPassowrd, updateUserProfile } from '../api';

// Fetch user profile
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async () => {
    const response = await getUserProfile();
    return response;
  }
);

// Update user profile
export const updateUserProfileThunk = createAsyncThunk(
  'user/updateUserProfile',
  async (userData) => {
    const response = await updateUserProfile(userData);
    return response;
  }
);
export const resetPasswordThunk = createAsyncThunk(
    'user/resetPassword',
    async (passwordData) => {
      const response = await resetPassowrd(passwordData);
      return response;
    }
  );
const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateUserProfileThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(updateUserProfileThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })   .addCase(resetPasswordThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetPasswordThunk.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(resetPasswordThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
