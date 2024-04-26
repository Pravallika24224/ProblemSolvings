import { selector } from "recoil"
import { toDoListFilterState, toDoListState } from "./atom"

const filteredTodoList = selector({
  key: "filteredTodoList",
  get: ({get}) => {
    const list = get(toDoListState)
    const filterState = get(toDoListFilterState)
    switch(filterState) {
      case "Show Completed":
        return list.filter(x => x.isCompleted === true)
      case "Show Uncompleted":
        return list.filter(x => x.isCompleted === false)
      default:
        return list
    }
  }
})

const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(toDoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isCompleted).length;
    let allText = "";
    todoList
      .filter((item) => !item.isCompleted)
      .map((item) => (allText = allText + " " + item.name));
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
      allText
    };
  }
})

export {filteredTodoList, todoListStatsState}