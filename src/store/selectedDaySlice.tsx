import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

type InitialState = {
  id: number;
  value: string;
};

const initialState: InitialState = {
  id: 1,
  value: dayjs(new Date().toString()).format('YYYY MM DD'),
};
const selectedDaySlice = createSlice({
  name: 'selectedDay',
  initialState,
  reducers: {
    setSelectedDay: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default selectedDaySlice;
export const { setSelectedDay } = selectedDaySlice.actions;
