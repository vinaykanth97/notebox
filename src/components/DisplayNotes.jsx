import React, { useContext } from 'react'
import RegularNotes from './RegularNotes'
import CheckBoxNote from './CheckBoxNote'
import { NoteContext } from './NoteContext'

export default function DisplayNotes() {
    const contextItems = useContext(NoteContext)
    const { todoNotes } = contextItems
    return (
        <div className="fixed-grid infowrap">
            <div className='grid has-2-cols eq-height'>
                {todoNotes?.map((todo, i) => {
                    return (
                        <>
                            {todo.isType === "normalnote" ? <RegularNotes todoData={todo} key={i}/> : <CheckBoxNote todoData={todo} key={i}/>}
                        </>
                    )
                })}

            </div>
        </div>

    )
}
