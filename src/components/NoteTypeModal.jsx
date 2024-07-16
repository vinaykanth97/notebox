import React, { useContext } from 'react'
import { NoteContext } from './NoteContext'
import { v4 as uuidv4 } from 'uuid';
export default function NoteTypeModal() {
    const contextItems = useContext(NoteContext)
    const { setPopup, popup, dispatch } = contextItems
    const HandleClose = () => {
        setPopup(false)
    }
    const CreateNormalNote = () => {
        dispatch({
            type: "ADDTASK", payload: {
                id: uuidv4(), isType: 'normalnote'
            }
        })
    }
    const CreateCheckBoxNote = () => {
        dispatch({
            type: "ADDTASK", payload: {
                id: uuidv4(), isType: 'checkboxnote', list: []
            }
        })
    }
    return (
        <div className={`modal ${popup ? 'd-block' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <button className="button is-primary" onClick={CreateNormalNote}>Normal Note</button>
                <button className="button is-link" onClick={CreateCheckBoxNote}>Checkbox Note</button>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={HandleClose}></button>
        </div>
    )
}
