import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedOptionState {
  value: string;
  name: string;
}

const initialState: SelectedOptionState = {
  value: 'all',
  name: '전체보기',
};

const selectedOptionSlice = createSlice({
  name: 'selectedOption',
  initialState,
  reducers: {
    setSelectedOption: (state, action: PayloadAction<SelectedOptionState>) => {
      state.value = action.payload.value;
      state.name = action.payload.name;
    },
  },
});

export const { setSelectedOption } = selectedOptionSlice.actions;

export default selectedOptionSlice.reducer;
