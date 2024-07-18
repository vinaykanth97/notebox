import React, { useContext } from 'react'
import { NoteContext } from './NoteContext'

export default function CardOutline({ children, todoData }) {
    const noteContext = useContext(NoteContext)
    const RemoveNote = () => {
        noteContext.dispatch({
            type: 'REMOVENOTE',
            payload: {
                dataId: todoData.id
            }
        })
    }
    return (
        <div className="card ">
            <header className="card-header">
                <p className="card-header-title">Title</p>
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
