import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactDetailsSlice from './slices/contactDetailsSlice';
import projectSlice from './slices/projectSlice';
import sessionSlice from './slices/sessionSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session'],
};

export const rootReducer = combineReducers({
  contactDetailsSlice,
  projectSlice,
  session: sessionSlice,
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
export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = typeof store.dispatch;
export default store;
