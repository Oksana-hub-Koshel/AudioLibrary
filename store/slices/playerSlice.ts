import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface typesStore {
    play: boolean | null,
    id: number | null,



}
const initialState: typesStore = {
    play: null,
    id: null,

};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlay(state, action) {
            state.id = action.payload.id;
            state.play = true;
        },
        setPause(state) {
            state.play = false;
        }
    }
})
export const { setPlay, setPause } = playerSlice.actions;

// export const {}=playerSlice.actions;
export const selectCount = (state: RootState) => state.player;
export default playerSlice.reducer;