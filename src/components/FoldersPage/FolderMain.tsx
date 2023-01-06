import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import FoldersMainPage from './FoldersMainPage'

const FolderMain = () => {

  const folders = useAppSelector(state => state.folders.folders);

  return (
    <div>
      <Routes>
        <Route
          path='/*'
          element={<FoldersMainPage folders={folders} />} />
        {folders.map(item => <Route
          path={item.key} 
          key={item.key}/>)}
      </Routes>
    </div>
  )
}

export default FolderMain