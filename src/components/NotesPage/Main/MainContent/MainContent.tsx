import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../../app/hooks';
import { updateNote } from '../../../../reducers/noteReducer';
import { Note } from '../../../../utils/types';
import NewNote from '../NewNote/NewNote';

interface Props {
    item: Note
}

const MainContent = ({ item }: Props) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState(item.content ?? '');

    useEffect(() => {
        setValue(item.content ?? '')
    }, [item])


    return (
        <div className='mainContent'>
            {item.title === 'New Note' ? <NewNote /> :
                <Editor
                    apiKey='xv7hzqeeoltpvyd4gfv9x70unlwvmjgk9mhx1c9k8td1ifpg'
                    initialValue={item.content}
                    value={value}
                    init={{
                        height: '85vh',
                        plugins: 'lists link image paste help wordcount',
                        toolbar: 'undo redo | blocks | fontfamily fontsize | bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help',
                        fontsize_formats: "8pt 9pt 10pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",
                    }}
                    onEditorChange={(newValue, editor) => {
                        setValue(newValue);
                        dispatch(updateNote({ content: newValue, date: Date.now(), title: editor.getContent({ format: 'text' }).split(' ')[0].length < 15 ? editor.getContent({ format: 'text' }).split(' ')[0] : `${editor.getContent({ format: 'text' }).slice(0, 15)}...`, key: item.key }))
                    }} />
            }
        </div>

    )
}

export default MainContent