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

            case "ADDCHECKBOXLIST":
                let addCheckBoxNote = state.map(todoData => {
                    if (todoData.id === action.payload.id) {
                        return {
                            ...todoData,
                            list: [...todoData.list, {
                                listTitle: '',
                                id: uuidv4(),
                                isCompleted: false
                            }]
                        }
                    }
                    return todoData
                })
                return addCheckBoxNote

            case "UPDATECHECKBOXLIST":
                let updateCheckBoxNote = state.map(todoData => {
                    if (todoData.id === action.payload.id) {
                        console.log(todoData)
                        return {
                            ...todoData, list: [...todoData.list.map(todo => {
                                if (todo.id === action.payload.listId) {

                                    return {
                                        ...todo,
                                        listTitle: action.payload.listTitle,
                                        isCompleted: action.payload.isCompleted
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
                return state.map(todoData => todoData.id === action.payload.id && {
                    ...todoData, list: [...todoData.list.filter(list => list.id !== action.payload.listId)]
                })
            default:
                return state;
        }
    }
    const [todoNotes, dispatch] = useReducer(reducer, []);
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