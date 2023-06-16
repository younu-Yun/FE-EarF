import { createSlice } from '@reduxjs/toolkit';

interface SelectedBadgeState {
  badge: string;
  name: string;
}

const initialState: SelectedBadgeState = {
  badge: '신규',
  name: '신규유저',
};

const selectedBadgeSlice = createSlice({
  name: 'SelectedBadge',
  initialState,
  reducers: {
    setSelectedBadge: (state, action) => {
      state.badge = action.payload.badge;
    },
  },
});

export const { setSelectedBadge } = selectedBadgeSlice.actions;
export default selectedBadgeSlice;
