import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const DATA = [
  {
    id: 1,
    description: 'Complete online JavaScript course',
    completed: true
  },
  {
    id: 2,
    description: 'Jog around the park 3x',
    completed: false
  },
  {
    id: 3,
    description: '10 minutes meditation',
    completed: false
  },
  {
    id: 4,
    description: 'Read for 1 hour',
    completed: false
  },
  {
    id: 5,
    description: 'Pick up groceries',
    completed: false
  },
  {
    id: 6,
    description: 'Complete Todo App on Frontend Mentor',
    completed: false
  }
]

export default function TodoMain() {
  const [todos, setTodos] = React.useState(DATA)
  
  const handleAddNewTodoItem = newTodoItem => {
    setTodos(t => [...t, newTodoItem]);
  }

  return (
    <>
      <TodoInput addNewTodo={handleAddNewTodoItem}></TodoInput>
      <ul>
        {todos.map(todo => (<TodoItem
          key={todo.id}
          todo={todo}
        ></TodoItem>))}
      </ul>
    </>
  )
}