import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setNote } from '../../../../reducers/currentDataReducer'
import { Note } from '../../../../utils/types'

interface Props {
    item: Note
}

const SideBarItem = ({ item }: Props) => {

    const dispatch = useAppDispatch();
    const currentNote = useAppSelector(state => state.currentData.note);

    return (
        <div className={`${currentNote?.key === item.key ? 'bg' : ''} sideBarItem my-3`} onClick={() => {
            dispatch(setNote(item));
        }}>
            <p className='ps-3 pt-1'><b>{item.title}</b></p>
        </div>
    )
}


export default SideBarItem