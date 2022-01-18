import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contacts/api";
import { filter } from "./contacts/contacts-reducer";
import { authReducer } from "../redux/auth";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user", "isLoggedIn"],
};

export const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
