import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import { truckReducer } from "./truck/slice";
import { filtersReducer } from "./filters/slice";
import { favoritesReducer } from "./favorites/slice";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const filtersPersistConfig = {
  key: "filters",
  storage,
};

const trucksPersistConfig = {
  key: "trucks",
  storage,
};

export const store = configureStore({
  reducer: {
    trucks: persistReducer(trucksPersistConfig, truckReducer),
    filters: persistReducer(filtersPersistConfig, filtersReducer),
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
