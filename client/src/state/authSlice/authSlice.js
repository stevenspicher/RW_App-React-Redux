import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    auth: { authData: null }
  },
  reducers: {
    authenticate(state, action) {
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));

      state = { ...state, authData: action.payload, loading: false, errors: null };
    },
    logout(state) {
      localStorage.clear();

      state = { ...state, authData: null, loading: false, errors: null };
    }
  }
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;