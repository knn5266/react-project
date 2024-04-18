import React from 'react'

export const TaskCardDeleteButton = ({taskCardsList,setTaskCardsList, taskCard}) => {
  const taskCardDelerteButton=(id) => {
    /* タスクカードを削除する*/
    setTaskCardsList(taskCardsList.filter((e)=> e.id !== id))
  }
  return (
    <div>
      <button onClick={() => taskCardDelerteButton(taskCard.id)} className='taskCardDeleteButton'><i className="fa-solid fa-xmark"></i></button>
    </div>
  )
}
