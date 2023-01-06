import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setFolder } from '../../../reducers/currentDataReducer';
import { updateFolder } from '../../../reducers/foldersReducer';
import Header from '../Header/Header';
import MainContent from './MainContent/MainContent';
import MainPage from './MainPage';
import SideBar from './SideBar/SideBar';

const Main = () => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(true);
    const { note, folder } = useAppSelector(state => state.currentData);
    const notes = useAppSelector(state => state.folder.notes);


    useEffect(() => {
        return () => {
            dispatch(updateFolder({ id: folder!.key!, content: notes }))
        }
    }, [notes])

    return (
        <div className='container-fluid row m-0 main'>
            {isOpen ?
                <div className='col-2 p-0'>
                    <SideBar />
                </div> : null}
            <div className='col row p-0 mainMainContent'>
                <div className='col-12 ps-4 pe-0'>
                    <Header setIsOpen={setIsOpen} isOpen={isOpen} />
                </div>
                <div className='col-12'>
                    {note ? <MainContent item={note} /> : <MainPage />}
                </div>
            </div>
        </div>
    )
}

export default Main