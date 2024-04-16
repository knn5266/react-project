import React, { useState } from 'react'
import { TaskCardsTitle } from './TaskCardsTitle'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskAddInput } from './input/TaskAddInput'
import { Tasks } from './Tasks'

export const TaskCard = () => {
  const [inputText, setInputText] = useState('')
  const [taskList, setTaskList] = useState([])
  return (
    <div className='taskCard'>
      <TaskCardsTitle />
      <TaskCardDeleteButton />
      <TaskAddInput inputText={inputText} setInputText={setInputText} taskList={taskList} setTaskList={setTaskList}/>
      <Tasks />
    </div>
  )
}
