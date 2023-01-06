import React from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FormOutlined,
    DeleteOutlined,
    AppstoreAddOutlined
} from '@ant-design/icons';
import Button from 'antd/es/button';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { removeFromList } from '../../../reducers/noteReducer';
import { setFolder, setNote } from '../../../reducers/currentDataReducer';
import { setCurrentNote } from '../../../thunkFunctions/currentDataAsyncActions';


interface Props {
    setIsOpen: (a: boolean) => void
    isOpen: boolean
}

const Header = ({ isOpen, setIsOpen }: Props) => {

    const dispatch = useAppDispatch();
    const note = useAppSelector(state => state.currentData.note);
    const notes = useAppSelector(state => state.folder.notes);

    return (
        <div className='row container-fluid header'>
            <div className='col-2 row pt-2 pb-3'>
                <div className=' col-3 m-0' onClick={() => setIsOpen(!isOpen)}>
                    <Button type='text'>
                        {isOpen ? <MenuFoldOutlined style={{ fontSize: '1.5rem' }} title={'Close Menu'} /> : <MenuUnfoldOutlined title={'Open Menu'} style={{ fontSize: '1.5rem' }} />}
                    </Button>
                </div>
                <div className=' col-3 m-0'>
                    <Button type='text'
                        onClick={() => {
                            dispatch(setFolder(null))}}>
                                <AppstoreAddOutlined style={{ fontSize: '1.5rem' }} title={'Back to Main'} /></Button>
            </div>
            {note ? <>
                <div className='col-3 m-0'>
                    <Button type='text' onClick={() => {
                        dispatch(removeFromList(note.key!));
                        dispatch(setNote(notes[1]));
                    }}>
                        <DeleteOutlined className='pb-2' style={{ fontSize: '1.5rem' }} title={'Delete'} />
                    </Button>
                </div>
                <div className='col-3 m-0'>
                    <Button type='text' onClick={() => {
                        dispatch(setCurrentNote({ content: '', date: Date.now(), title: 'New Note' }));
                    }}>
                        <FormOutlined style={{ fontSize: '1.5rem' }} title={'Create new'} />
                    </Button>
                </div>
            </> : null}
        </div>
        </div >
    )
}

export default Header

