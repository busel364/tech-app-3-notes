import React from 'react'
import { useAppSelector } from '../../../../app/hooks';
import SideBarItem from './SideBarItem';

const SideBar = () => {
    const notes = useAppSelector(state => state.folder.notes);
    const folder = useAppSelector(state=>state.currentData.folder)

    return (
        <div className='sideBar'>
            <h4 className='p-2'><b>Notes:</b>{folder?.name}</h4>
            {notes.length>0 ? notes.map(item => <SideBarItem item={item} key={item.key===undefined?'0':item.key} />) :
                <b>Note list is empty</b>}
        </div>
    )
}

export default SideBar