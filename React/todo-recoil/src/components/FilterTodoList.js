import React from 'react'
import { toDoListFilterState } from '../store/atom'
import { useRecoilState } from 'recoil'
const FilterTodoList = () => {
  const [filter, setFilter] = useRecoilState(toDoListFilterState)
  const updateFilter = (e) => {
    setFilter(e.target.value)
  }
  return (
    <select value={filter} onChange={updateFilter}>
      <option value="Show All">Show All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
    </select>
  )
}

export default FilterTodoList