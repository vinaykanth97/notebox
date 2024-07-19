import React, { useContext } from 'react'
import { NoteContext } from './NoteContext'
import NoteTypeModal from './NoteTypeModal'

export default function NoteTypes() {
    const popupContext = useContext(NoteContext)
    const TaskModalHandler = () => {
        popupContext.setPopup(true)
    }
    return (
        <div className='notetype has-text-right'>
            <button className="button" onClick={TaskModalHandler}>Add Task</button>
        </div>
    )
}
