import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface typesStore {
  firstName: string | null,
  id: number | null
}

const initialState: typesStore = {
  firstName: "Kirill",
  id: 1,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
    },
    removeUser(state) {
      state.id = null;
      state.firstName = null;
    }
  }
})

export const { setUser, removeUser } = userSlice.actions;
export const selectCount = (state: RootState) => state.user;
export default userSlice.reducer;