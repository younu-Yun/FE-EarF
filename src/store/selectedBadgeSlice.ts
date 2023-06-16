import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedBadgeState {
  type: string;
}

const initialState: SelectedBadgeState = {
  type: '신규',
};

const selectedBadgeSlice = createSlice({
  name: 'SelectedBadge',
  initialState,
  reducers: {
    setSelectedBadge: (state, action: PayloadAction<SelectedBadgeState>) => {
      state.type = action.payload.type;
    },
  },
});

export const { setSelectedBadge } = selectedBadgeSlice.actions;
export default selectedBadgeSlice.reducer;
