import React from 'react'
import CardOutline from './CardOutline'

export default function RegularNotes({ todoData }) {
  return (
    <CardOutline todoData={todoData}>
      <div class="card-content">
        <div class="content">
          <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
        </div>
      </div>
    </CardOutline>
  )
}
