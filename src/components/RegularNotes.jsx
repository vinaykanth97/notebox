import React, { useContext } from 'react'
import CardOutline from './CardOutline'
import { NoteContext } from './NoteContext'

export default function RegularNotes({ todoData }) {
  const noteContext = useContext(NoteContext)
  return (
    <CardOutline todoData={todoData}>
      <div className="card-content">
        <div className="content">
          <textarea className="textarea" name='description' value={todoData.description} placeholder="e.g. Hello world" onInput={(e) => noteContext.dispatch({
            type: 'UPDATENOTEOUTLINE',
            payload: {
              ...todoData,
              [e.target.name]: e.target.value
            }
          })}></textarea>
        </div>
      </div>
    </CardOutline>
  )
}
