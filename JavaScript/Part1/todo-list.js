/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

*/

class Todo {
  constructor() {
    this.list = []
  }
  newListItem(item) {
    this.list.push(item)
  }
  removeListItem(index) {
  this.list.splice(index, 1)
  }
  updateListItem(index, value) {
    this.list[index] = value
  }
  getAll() {
    this.list
  }
  getParticularItem(index) {
    this.list[index]
  }
  deleteList() {
    this.list = []
  }
}

let todoList = new Todo()
todoList.newListItem("List 1")
todoList.newListItem("List 2")
todoList.removeListItem(3)
todoList.getAll()

console.log(todoList)
