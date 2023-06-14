import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import selectedDaySlice from './selectedDaySlice';
import { communityApiSlice } from 'api/communityApiSlice';
import loginSlice from './loginSlice';
import selectedOptionReducer from './selectedOptionSlice';

export const store = configureStore({
  reducer: {
    selectedDay: selectedDaySlice.reducer,
    [communityApiSlice.reducerPath]: communityApiSlice.reducer,
    login: loginSlice.reducer,
    selectedOption: selectedOptionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(communityApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
