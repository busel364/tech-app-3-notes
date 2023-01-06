import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { setNoteList } from '../../../reducers/noteReducer'
import { Folder } from '../../../utils/types'

interface Props{
    folder: Folder
}

const PreMain = ({folder}:Props) => {

    const dispatch = useAppDispatch();
    
    useEffect(() => {
      dispatch(setNoteList(folder.notes!));
    }, [])

  return (
    <div>
        
    </div>
  )
}

export default PreMain