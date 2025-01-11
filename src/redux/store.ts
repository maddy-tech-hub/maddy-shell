import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import servicesSlice from './slices/servicesSlice';
import technologySlice from './slices/technologySlice';
import contactDetailsSlice from './slices/contactDetailsSlice';
import projectSlice from './slices/projectSlice';

const persistConfig = {
  key: 'root', // The key under which the persisted state will be stored.
  storage, // The storage mechanism (localStorage by default).
};

export const rootReducer = combineReducers({
  contactDetailsSlice,
  projectSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = typeof store.dispatch;
export default store;
