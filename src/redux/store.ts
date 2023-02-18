import { configureStore } from '@reduxjs/toolkit';
import profile from './slice/profilePageSlice';
import dialogs from './slice/dialogsPageSlice';

export const store = configureStore({
  reducer: {
    profile,
    dialogs,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
