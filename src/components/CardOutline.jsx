import React, { useContext } from 'react'
import { NoteContext } from './NoteContext'

export default function CardOutline({ children, todoData, todoNotes }) {
    const noteContext = useContext(NoteContext)
    const RemoveNote = () => {
        noteContext.dispatch({
            type: 'REMOVENOTE',
            payload: {
                dataId: todoData.id
            }
        })
    }
    const UpdateOutlineHandler = (e) => {
        noteContext.dispatch({
            type: 'UPDATENOTEOUTLINE',
            payload: {
                ...todoData,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <div className="card ">
            <header className="card-header">
                <div className="card-header-title"><input type="text" name='title' className='input is-small' placeholder='Your Title' onInput={(e) => UpdateOutlineHandler(e)} value={todoData.title} /></div>
                <button className="card-header-icon" aria-label="more options" onClick={RemoveNote}>
                    <span className="icon">
                        &#x2715;
                    </span>
                </button>
            </header>
            {children}
        </div>
    )
}
