import React, { useContext, useEffect } from 'react'
import CardOutline from './CardOutline'
import { NoteContext } from './NoteContext'
import { v4 as uuidv4 } from 'uuid'

export default function CheckBoxNote({ todoData }) {
  const contextItems = useContext(NoteContext)
  const { dispatch } = contextItems
  const AddTaskHandler = (e, todoData) => {
    dispatch({
      type: 'ADDCHECKBOXLIST',
      payload: {
        ...todoData,
        list: [...todoData.list, {
          listTitle: '',
          listId: uuidv4(),
          isCompleted: false
        }]
      }
    })
  }
  const RemoveTaskList = (e, id, listId) => {
    // console.log(todoData)
    dispatch({
      type: 'REMOVECHECKBOXLIST',
      payload: {
        id,
        listId
      }
    })
  }
  const UpdateListHandler = (e, id, list) => {
    dispatch({
      type: 'UPDATECHECKBOXLIST',
      payload: {
        id,
        ...list,
        [e.target.name]: e.target.name === "isCompleted" ? e.target.checked : e.target.value
      }
    })
  }

  useEffect(() => {
    // console.log(todoData)
  }, [todoData])

  return (
    <CardOutline todoData={todoData}>
      <div className="card-content">
        <div className="content">
          {todoData.list.length <= 0 ? <p>Add tasks to display</p> : todoData.list?.map((lis, index) => {
            // console.log(lis)
            return (
              <div className="checknote-wrap" key={index}>
                <input type='text' className={`is-small input list-title ${lis.isCompleted ? 'strike' : ''}`} name="listTitle" placeholder='Task Name' onInput={(e) => UpdateListHandler(e, todoData.id, lis)} value={lis.listTitle} />
                <div className="actions">
                  <label className="checkbox">
                    <input type="checkbox" name='isCompleted' key={lis.isCompleted} defaultChecked={lis.isCompleted} onInput={(e) => UpdateListHandler(e, todoData.id, lis)} />
                  </label>
                  <div className="close" onClick={(e) => RemoveTaskList(e, todoData.id, lis.listId)}>&#10006;</div>
                </div>
              </div>
            )

          })}

        </div>
      </div>
      <footer className="card-footer">
        <button className="button is-small" onClick={(e) => AddTaskHandler(e, todoData)}>Add Task</button>
      </footer>
    </CardOutline>
  )
}
