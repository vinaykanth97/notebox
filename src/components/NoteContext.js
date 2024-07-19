import React, { createContext, useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
export const NoteContext = createContext()

export const NoteContextProvider = ({ children }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADDTASK":
                return [action.payload, ...state];
            case "REMOVENOTE":
                return state.filter(data => data.id !== action.payload.dataId)

            case "UPDATENOTEOUTLINE":
                let updateNoteState = state.map((todoData) => {
                    if (todoData.id === action.payload.id) {
                        return {
                            ...action.payload
                        }
                    }
                    return todoData
                })
                return updateNoteState



            case "ADDCHECKBOXLIST":
                let addCheckBoxNote = state.map(todoData => {
                    if (todoData.id === action.payload.id) {
                        return {
                            ...action.payload,
                        }
                    }
                    return todoData
                })
                return addCheckBoxNote



            case "UPDATECHECKBOXLIST":
                let updateCheckBoxNote = state.map(todoData => {
                    if (todoData.id === action.payload.id) {

                        return {
                            ...todoData, list: [...todoData.list.map(todo => {
                                if (todo.listId === action.payload.listId) {
                                    return {
                                        ...action.payload
                                    }
                                }
                                return todo
                            })]
                        }
                    }

                    return todoData
                })
                return updateCheckBoxNote
            case "REMOVECHECKBOXLIST":
                let removedList = state.map(todoData => {
                    if (todoData.id === action.payload.id) {
                        return {
                            ...todoData, list: [...todoData.list.filter(list => {
                                return action.payload.listId !== list.listId
                            })]
                        }
                    }
                    return todoData
                })
                return removedList
            default:
                return state;
        }
    }


    if (localStorage.getItem('Notes') === "" || localStorage.getItem('Notes') === null) {
        localStorage.setItem('Notes', JSON.stringify([]))
    }
    const [todoNotes, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('Notes')));
    const [popup, setPopup] = useState(false)
    return (
        <NoteContext.Provider value={
            {
                dispatch,
                todoNotes,
                popup,
                setPopup
            }
        }>
            {children}
        </NoteContext.Provider>
    )
}