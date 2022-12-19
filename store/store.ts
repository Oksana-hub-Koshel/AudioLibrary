import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice"
import playerReducer from "./slices/playerSlice"


export const store = configureStore({
  reducer: {
    user:userReducer,
    player:playerReducer
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