import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { setFolder, setNote } from '../../reducers/currentDataReducer';
import { changeFolderName, deleteFolder } from '../../reducers/foldersReducer';
import { Folder } from '../../utils/types';
import Paragraph from 'antd/es/typography/Paragraph';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

interface Props {
    item: Folder
}

const FoldersMainPageItem = ({ item }: Props) => {

    const dispatch = useAppDispatch();
    const [newName, setNewName] = useState(item.name);

    return (
        <div className='folderItem m-5'>
            <div className='text-end pt-1 pe-1'>
                <Button
                    style={{ padding: '1px 10px 10px 10px' }}
                    onClick={() => dispatch(deleteFolder(item.key!))}>
                    <CloseOutlined />
                </Button>
            </div>
            <div className='itemBlock' onClick={() => {
                dispatch(setFolder(item))
                dispatch(setNote(item.notes[0]))
                if (item.name !== newName) {
                    dispatch(changeFolderName({ folder: item, newName }))
                }
            }}>
            </div>
            <div className='row'>
                <div className='nameChanger pb-2 col-8 offset-2 px-0'>
                    <Paragraph style={{ fontSize: '1.2rem', width: '65%', margin: '0 auto' }} editable={{
                        onChange: setNewName,
                        maxLength: 15,
                        autoSize: { maxRows: 1, minRows: 1 }
                    }}>{newName}</Paragraph>
                </div>
                <div className='col-6 offset-3 '>
                    <p className='pt-4 py-2'>Notes count: {item.notes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default FoldersMainPageItem