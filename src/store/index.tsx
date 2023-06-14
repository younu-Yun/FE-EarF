import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import selectedDaySlice from './selectedDaySlice';
import { communityApiSlice } from 'api/communityApiSlice';
import { communityTokenApiSlice } from 'api/communityTokenApiSlice';

export const store = configureStore({
  reducer: {
    selectedDay: selectedDaySlice.reducer,
    [communityApiSlice.reducerPath]: communityApiSlice.reducer,
    [communityTokenApiSlice.reducerPath]: communityTokenApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(communityApiSlice.middleware).concat(communityTokenApiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
