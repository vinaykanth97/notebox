import React, { useContext, useState } from 'react'
import CardOutline from './CardOutline'
import { NoteContext } from './NoteContext'


export default function CheckBoxNote({ todoData }) {
  const contextItems = useContext(NoteContext)
  const { dispatch } = contextItems
  const AddTaskHandler = (e, todoData) => {
    dispatch({
      type: 'ADDCHECKBOXLIST',
      payload: {
        ...todoData,
      }
    })
  }
  const RemoveTaskList = (e, id, listId) => {
    dispatch({
      type: 'REMOVECHECKBOXLIST',
      payload: {
        id,
        listId
      }
    })
  }
  const UpdateListHandler = (e, id, listId) => {
    e.preventDefault()
    console.log(e.target.checked)
    dispatch({
      type: 'UPDATECHECKBOXLIST',
      payload: {
        id,
        listId,
        [e.target.name]: e.target.value,
        // isCompleted: e.target.checked
      }
    })
  }
  const InputCheckHandler = (e) => {
    // console.log(e.target.checked)
  }
  return (
    <CardOutline todoData={todoData}>
      <div class="card-content">
        <div class="content">
          {todoData.list.length <= 0 ? <p>Add tasks to display</p> : todoData.list?.map((lis, index) => {
            return (
              <form className="checknote-wrap" onInput={(e) => UpdateListHandler(e, todoData.id, lis.id)}>
                <input className='list-title' name="listTitle" defaultValue={lis.listTitle} placeholder='Task Name' />
                <div className="actions">
                  <label class="checkbox">
                    <input type="checkbox" name='isCompleted' value={lis.isCompleted} onInput={InputCheckHandler} />
                  </label>
                  <div className="close" onClick={(e) => RemoveTaskList(e, todoData.id, lis.id)}>&#10006;</div>
                </div>
              </form>
            )

          })}

        </div>
      </div>
      <footer class="card-footer">
        <button class="button is-small" onClick={(e) => AddTaskHandler(e, todoData)}>Add Task</button>
      </footer>
    </CardOutline>
  )
}
