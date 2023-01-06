import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Folder, Note } from "../utils/types";

const defState = {
    note: null as null | Note,
    folder: null as null | Folder
}
const currentDataSlice = createSlice({
    initialState: defState,
    name: 'currentNote',
    reducers: {
        setNote(state, action: PayloadAction<Note>) {
            state.note = action.payload;
        },
        setFolder(state, action: PayloadAction<Folder|null>) {
            state.folder = action.payload;
        }
    }
})

export const { setNote, setFolder } = currentDataSlice.actions;
export default currentDataSlice.reducer;