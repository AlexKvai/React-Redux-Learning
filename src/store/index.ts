import { githubApi } from './github/guthub.api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
   reducer: {
      [githubApi.reducerPath]: githubApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(githubApi.middleware),
});
