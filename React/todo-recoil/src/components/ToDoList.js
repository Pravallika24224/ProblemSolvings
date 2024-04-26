import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoList } from '../store/selector'
import AddToDoItem from './AddToDoItem'
import FilterTodoList from './FilterTodoList'
import ToDoItem from './ToDoItem'
import ToDoListStats from './ToDoListStats'
const ToDoList = () => {
  const filteredList = useRecoilValue(filteredTodoList)
  return (
    <div>
      <ToDoListStats />
      <AddToDoItem />
      <FilterTodoList />
      {filteredList.map((item, index) => <ToDoItem item={item} index={index} key={item.id} />)}
    </div>

  )
}

export default ToDoList