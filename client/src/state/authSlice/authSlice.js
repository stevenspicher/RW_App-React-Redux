import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    auth: { authData: null }
  },
  reducers: {
    authenticate(state, action) {
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
    },
    logout() {
      localStorage.clear();
    }
  }
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;