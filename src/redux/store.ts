import { configureStore } from '@reduxjs/toolkit';
import updateSlice from './updateSlice';
import callendar from "./callendarSlice"

export const store = configureStore({
  reducer: {
    updateSlice: updateSlice,
    callendar,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
