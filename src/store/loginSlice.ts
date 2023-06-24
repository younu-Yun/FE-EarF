import { createSlice } from '@reduxjs/toolkit';

// 로그인 여부 전역 관리 (boolean)
interface LoginState {
  isLoggedIn: boolean;
}

// 로컬 스토리지 Key값
const STORAGE_KEY = 'isLoggedIn';

// 이전에 저장된 로그인 상태 가져오기
const getInitialLoginState = (): boolean => {
  const storedState = localStorage.getItem(STORAGE_KEY);
  return storedState ? JSON.parse(storedState) : false;
};

const initialState: LoginState = {
  isLoggedIn: getInitialLoginState(),
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state: LoginState) {
      state.isLoggedIn = true;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(true));
    },
    logout(state: LoginState) {
      state.isLoggedIn = false;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(false));
    },
  },
});

export type LoginSliceState = typeof initialState;
export type LoginSliceActions = typeof loginSlice.actions;
export const { login, logout } = loginSlice.actions;

export default loginSlice;
