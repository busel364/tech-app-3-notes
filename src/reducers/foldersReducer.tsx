import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Folder, Note } from "../utils/types";

interface State {
    folders: Folder[],
    idCounter: number
}

const NAME_OF_STORAGE: string = 'folders';

const value = localStorage.getItem(NAME_OF_STORAGE) as string;

const defState = localStorage.getItem(NAME_OF_STORAGE) !== null ? JSON.parse(value) as State : {
    folders: [] as Folder[],
    idCounter: 0
};

const foldersSlice = createSlice({
    initialState: defState,
    name: "folders",
    reducers: {
        addNewFolder(state, action: PayloadAction<Folder>) {
            state.folders.unshift(action.payload);
            localStorage.setItem(NAME_OF_STORAGE, JSON.stringify(state));
        },
        deleteFolder(state, action: PayloadAction<string>) {
            const i = state.folders.findIndex(item => item.key === action.payload);
            state.folders.splice(i, 1);
            localStorage.setItem(NAME_OF_STORAGE, JSON.stringify(state));
        },
        updateFolder(state, action: PayloadAction<{ id: string, content: Note[] }>) {
            const i = state.folders.findIndex(item => item.key === action.payload.id);
            state.folders[i].notes = action.payload.content;
            localStorage.setItem(NAME_OF_STORAGE, JSON.stringify(state));
        },
        updateFoldersCounter(state) {
            state.idCounter += 1;
            localStorage.setItem(NAME_OF_STORAGE, JSON.stringify(state));
        },
        newFoldersCounterValue(state, action: PayloadAction<number>) {
            state.idCounter = action.payload;
            localStorage.setItem(NAME_OF_STORAGE, JSON.stringify(state));
        },
        changeFolderName(state, action: PayloadAction<{ folder: Folder, newName: string }>) {
            const i = state.folders.findIndex(item => item.key === action.payload.folder.key);
            state.folders[i].name = action.payload.newName;
            localStorage.setItem(NAME_OF_STORAGE, JSON.stringify(state));
        }
    }
})


export const { addNewFolder, deleteFolder, changeFolderName, newFoldersCounterValue, updateFoldersCounter, updateFolder } = foldersSlice.actions;
export default foldersSlice.reducer;