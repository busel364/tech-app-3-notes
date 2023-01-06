import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import currentDataReducer from '../reducers/currentDataReducer';
import foldersReducer from '../reducers/foldersReducer';
import noteReducer from '../reducers/noteReducer';

export const store = configureStore({
  reducer: {
    folder: noteReducer,
    currentData: currentDataReducer,
    folders: foldersReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
