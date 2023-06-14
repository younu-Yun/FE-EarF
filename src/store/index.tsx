import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import selectedDaySlice from './selectedDaySlice';
import { communityApiSlice } from 'api/communityApiSlice';
import loginSlice from './loginSlice';

export const store = configureStore({
  reducer: {
    selectedDay: selectedDaySlice.reducer,
    [communityApiSlice.reducerPath]: communityApiSlice.reducer,
    login: loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(communityApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
