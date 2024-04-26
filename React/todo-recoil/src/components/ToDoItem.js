import React from 'react'
import { useRecoilState } from 'recoil'
import { toDoListState } from '../store/atom'

const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const ToDoItem = ({item, index}) => {
  const [todoList, setTodoList] = useRecoilState(toDoListState)
  
  const handleChange = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      name: e.target.value
    });
    setTodoList(newList);
  }

  const handeleToggleChange = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isCompleted: !item.isCompleted
    });
    setTodoList(newList);
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.name} onChange={handleChange}/>
      <input type="checkbox" value={item.isCompleted} checked={item.isCompleted} onChange={handeleToggleChange}/>
      <button onClick={deleteItem}>x</button>
    </div>
  )
}

export default ToDoItem