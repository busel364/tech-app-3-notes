import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setNoteList } from '../../reducers/noteReducer'
import { setCurrentFolder } from '../../thunkFunctions/currentDataAsyncActions'
import { emptyNote } from '../../utils/consts'
import { Folder } from '../../utils/types'
import Main from '../NotesPage/Main/Main'
import FoldersMainPageItem from './FoldersMainPageItem'

interface Props {
    folders: Folder[]
}

const FoldersMainPage = ({ folders }: Props) => {

    const dispatch = useAppDispatch();
    const currentFolder = useAppSelector(state => state.currentData.folder)

    useEffect(() => {
        if (currentFolder) {
            dispatch(setNoteList(currentFolder!.notes!));
        }
    }, [currentFolder, dispatch])

    return (
        <div>
            {!currentFolder ?
                <div className='container row text-center mainPageContainer'>
                    {folders.length > 0 ?
                        <div className='row row-cols-3 ms-1 pe-0 ps-5'>
                            {folders.map(item => <FoldersMainPageItem item={item} key={item.key} />)}
                        </div> :
                        <h2>Note list is empty</h2>}
                    <button className='buttonMainPage'
                        onClick={() => {
                            dispatch(setCurrentFolder({ notes: [emptyNote], date: Date.now(), name: 'New Folder' }));
                        }}>Create New</button>
                </div> : <Main />}
        </div>
    )
}

export default FoldersMainPage