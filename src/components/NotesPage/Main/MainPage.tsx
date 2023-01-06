import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../app/hooks';
import { setCurrentNote } from '../../../thunkFunctions/currentDataAsyncActions';
import { emptyNote } from '../../../utils/consts';
import NewNote from './NewNote/NewNote';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        setIsClicked(false);
    }, [])
    return (
        <div>
            {!isClicked ? <div className='container row text-center mainPageContainer'>
                <h2>Open note or create new</h2>
                <button className='buttonMainPage'
                onClick={() => {
                    setIsClicked(true)
                    dispatch(setCurrentNote(emptyNote));
                    }}>Create New</button>
            </div> : <NewNote />}
        </div>
    )
}

export default MainPage