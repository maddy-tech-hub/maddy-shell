import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiResponse } from '@src/api/api';

// Define initial state
interface UserState {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Async Thunks
export const registerUser = createAsyncThunk(
  'register',
  async (
    userData: {
      fullName: string;
      email: string;
      password: string;
      phone?: string;
    },
    { rejectWithValue }
  ) => {
    try {
      return await apiResponse('/api/User/register', 'POST', userData);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const confirmOtp = createAsyncThunk(
  'confirmOtp',
  async (otpData: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      return await apiResponse('/api/User/confirmOtp', 'POST', otpData);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const resendOtp = createAsyncThunk(
  'resendOtp',
  async (userData: { email: string }, { rejectWithValue }) => {
    try {
      return await apiResponse('/api/User/resendOtp', 'POST', userData);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'login',
  async (
    loginData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      return await apiResponse('/api/User/login', 'POST', loginData);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const forgetPassword = createAsyncThunk(
  'forgetPassword',
  async (emailData: { email: string }, { rejectWithValue }) => {
    try {
      return await apiResponse('/api/User/forgot-password', 'POST', emailData);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'resetPassword',
  async (
    passwordData: {
      email: string;
      currentPassword: string;
      password: string;
      confirmPassword: string;
    },
    { rejectWithValue }
  ) => {
    try {
      return await apiResponse(
        '/api/User/reset-password',
        'POST',
        passwordData
      );
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    clearError(state) {
      state.error = null; // Reset the error state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Confirm OTP
      .addCase(confirmOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(confirmOtp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(confirmOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Resend OTP
      .addCase(resendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resendOtp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Forget Password
      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError } = userSlice.actions;
export default userSlice.reducer;
