import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../utils/types";

const defState = {
    idCounter: 0,
    notes: [{
        title: 'string',
        date: Date.now(),
        key: `-1`,
        content: '<p>content1</p>'
    }, {
        title: 'string2',
        date: Date.now(),
        key: `-2`,
        content: '<p>content2</p>'
    },] as Note[]
};



const noteListSlicer = createSlice({
    initialState: defState,
    name: 'folder',
    reducers: {
        addNoteToList(state, action: PayloadAction<Note>) {
            state.notes.unshift(action.payload);
        },
        updateNote(state, action: PayloadAction<Note>) {
            const i = state.notes.findIndex(item => item.key === action.payload.key);
            state.notes[i] = action.payload;
            state.notes.sort((a, b) => a.date === b.date ? 0 : a.date < b.date ? 1 : -1)
        },
        removeFromList(state, action: PayloadAction<string>) {
            const i = state.notes.findIndex(item => item.key === action.payload);
            state.notes.splice(i, 1);
        },
        updateNoteCounter(state) {
            state.idCounter += 1;
        },
        newNoteCounterValue(state, action: PayloadAction<number>) {
            state.idCounter = action.payload;
        },
        setNoteList(state, action:PayloadAction<Note[]>){
            state.notes = action.payload;
            state.idCounter = action.payload.length;
        }
    }
})


export const { addNoteToList, updateNote,setNoteList, removeFromList, updateNoteCounter, newNoteCounterValue } = noteListSlicer.actions;
export default noteListSlicer.reducer;