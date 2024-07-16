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
        <div class="card ">
            <header class="card-header">
                <p class="card-header-title">Title</p>
                <button class="card-header-icon" aria-label="more options" onClick={RemoveNote}>
                    <span class="icon">
                        &#x2715;
                    </span>
                </button>
            </header>
            {children}
        </div>
    )
}
