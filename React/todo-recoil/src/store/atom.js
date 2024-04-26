import { atom } from 'recoil'

const toDoListState = atom({
  key: "toDoListState",
  default: []
})

const toDoListFilterState = atom({
  key: "toDoListFilterState",
  default: 'Show All'
})

export {toDoListState, toDoListFilterState}