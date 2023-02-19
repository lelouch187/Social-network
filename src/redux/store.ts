import { configureStore } from '@reduxjs/toolkit';
import profile from './slice/profilePageSlice';
import dialogs from './slice/dialogsPageSlice';
import { socialNetworkApi } from './RTKQuery';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [socialNetworkApi.reducerPath]: socialNetworkApi.reducer,
    profile,
    dialogs,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socialNetworkApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
