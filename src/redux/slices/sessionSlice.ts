import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SessionUser {
  [key: string]: unknown;
}

interface SessionState {
  token: string | null;
  user: SessionUser | null;
  isAuthenticated: boolean;
}

const initialState: SessionState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (
      state,
      action: PayloadAction<{ token: string; user?: SessionUser | null }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user ?? null;
      state.isAuthenticated = true;
    },
    clearSession: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { clearSession, setSession } = sessionSlice.actions;
export default sessionSlice.reducer;
