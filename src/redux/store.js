import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import recipesIdSlice from './id-recipes/slice';
import categories from './recipes/slice'

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import favoriteRecipesReducer from './favorite/slice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const persistedReducerAuth = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducerAuth,
    recipesId: recipesIdSlice,
    // shoppingList: shoppingListReducer,
    // mainRecipes: mainRecipeReduser,
    favoriteRecipes: favoriteRecipesReducer,
    // myRecipes: myRecipesReducer,
    // ingredients: ingredientsReducer,
    // search: searchReducer,
    categories,
    // subscribe: subscribeReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
