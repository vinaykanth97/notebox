import React, { useContext } from 'react'
import RegularNotes from './RegularNotes'
import CheckBoxNote from './CheckBoxNote'
import { NoteContext } from './NoteContext'

export default function DisplayNotes() {
    const contextItems = useContext(NoteContext)
    const { todoNotes } = contextItems
    return (
        <div className="fixed-grid infowrap has-4-cols-desktop has-2-cols-tablet has-1-cols-mobile">
            <div className='grid '>
                {todoNotes?.map((todo, i) => {
                    return (
                        <div key={i} className='col'>
                            {todo.isType === "normalnote" ? <RegularNotes todoData={todo} key={i} /> : <CheckBoxNote todoData={todo} key={i} />}
                        </div>
                    )
                })}

            </div>
        </div>

    )
}
