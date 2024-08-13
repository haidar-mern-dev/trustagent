// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import authReducer from "./authSlice"; 
import formReducer from "./formSlice";
import userReducer from './userSlice';
import propertiesReducer from './propertiesSlice';

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  properties: propertiesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);
