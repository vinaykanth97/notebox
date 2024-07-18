import React from 'react'
import CardOutline from './CardOutline'

export default function RegularNotes({ todoData }) {
  return (
    <CardOutline todoData={todoData}>
      <div className="card-content">
        <div className="content">
          <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
        </div>
      </div>
    </CardOutline>
  )
}
