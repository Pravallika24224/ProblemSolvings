import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { toDoListState } from '../store/atom'
let id= 0
const AddToDoItem = () => {
  const [inputValue, setInputValue] = useState("")
  const setToDoList = useSetRecoilState(toDoListState)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleAddToDo = () => {
    setToDoList((todoList) => [
      ...todoList, {
      id: id++,
      name: inputValue,
      isCompleted: false
    }
  ])
    setInputValue("")
  }
  return (
    <div>
      <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      />
      <button onClick={handleAddToDo}>ADD Item</button>
    </div>
  )
}

export default AddToDoItem