import React, { createContext, useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
export const NoteContext = createContext()

export const NoteContextProvider = ({ children }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADDTASK":
                // console.log(state)
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
                                listId: uuidv4(),
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

                        return {
                            ...todoData, list: [...todoData.list.map(todo => {
                                if (todo.listId === action.payload.listId) {
                                    // console.log(todo)
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