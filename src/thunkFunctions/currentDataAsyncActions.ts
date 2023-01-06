import { AppDispatch, RootState } from "../app/store"
import { setFolder, setNote } from "../reducers/currentDataReducer"
import { addNewFolder, updateFoldersCounter } from "../reducers/foldersReducer"
import { addNoteToList, updateNoteCounter } from "../reducers/noteReducer"
import { emptyNote } from "../utils/consts"
import { Folder, Note } from "../utils/types"

export const setCurrentNote = (note: Note) => {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const id = getState().folder.idCounter.toString();
        dispatch(addNoteToList({ ...note, key: id }));
        dispatch(setNote({ ...note, key: id }));
        dispatch(updateNoteCounter());
    }
}

export const setCurrentFolder = (folder: Folder) => {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const id = getState().folders.idCounter.toString();
        dispatch(addNewFolder({ ...folder, key: id }));
        dispatch(setFolder({ ...folder, key: id }));
        dispatch(setNote(getState().folders.folders[0].notes[0]));
        dispatch(updateNoteCounter());
        dispatch(updateFoldersCounter());
    }
}