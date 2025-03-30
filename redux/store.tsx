import { configureStore } from '@reduxjs/toolkit';
import questionsSlice from './slices/questionsSlice';
import categoriesSlice from './slices/categoriesSlice';

export const store = configureStore({
    reducer: {
        questions: questionsSlice,
        categories: categoriesSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
