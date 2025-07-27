import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import styled from "@emotion/styled";

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
  const [listMode, setListMode] = React.useState('all')
  
  const nonCompletedItems = todos.reduce((total, t) => !t.completed ? total + 1 : total, 0)
  let todosToDisplay;
  switch(listMode) {
    case 'all':
      todosToDisplay = [...todos]
      break
    case 'active':
      todosToDisplay = todos.filter(t => !t.completed)
      break
    case 'completed':
      todosToDisplay = todos.filter(t => t.completed)
  }

  const handleSetListMode = mode => {
    setListMode(mode)
  }

  const handleAddNewTodoItem = newTodoItem => {
    setTodos(t => [...t, newTodoItem]);
  }

  const handleUpdateTodo = id => {
    setTodos(todos => {
      return todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    })
  }

  const handleDeleteTodo = id => {
    setTodos(todos => {
      return todos.filter(t => t.id !== id)
    })
  }

  const handleClearCompleted = () => {
    setTodos(todos => todos.filter(t => !t.completed))
  }

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e, dropTargetId) => {
    e.preventDefault();
    const draggedId = parseInt(e.dataTransfer.getData('text/plain'));
    
    if (draggedId === dropTargetId) return;

    setTodos(todos => {
      const draggedIndex = todos.findIndex(todo => todo.id === draggedId);
      const targetIndex = todos.findIndex(todo => todo.id === dropTargetId);
      
      const newTodos = [...todos];
      const draggedTodo = newTodos[draggedIndex];
      
      // Remove dragged item
      newTodos.splice(draggedIndex, 1);
      // Insert at new position
      newTodos.splice(targetIndex, 0, draggedTodo);
      
      return newTodos;
    });
  }

  return (
    <section>
      <TodoInput addNewTodo={handleAddNewTodoItem}></TodoInput>
      <ListContainer>
        {todosToDisplay.map(todo => (<TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        ></TodoItem>))}
      </ListContainer>
      <Options>
        <Counter>
          <p>{nonCompletedItems === 0 ? 'No' : nonCompletedItems} item{nonCompletedItems === 1 ? '' : 's'} left</p>
        </Counter>
        <TodoStates>
          <TodoState 
            onClick={() => handleSetListMode('all')}
            isActive={listMode === 'all'}
          >
            All
          </TodoState>
          <TodoState 
            onClick={() => handleSetListMode('active')}
            isActive={listMode === 'active'}
          >
            Active
          </TodoState>
          <TodoState 
            onClick={() => handleSetListMode('completed')}
            isActive={listMode === 'completed'}
          >
            Completed
          </TodoState>
        </TodoStates>
        <Clearer>
          <ClearState onClick={handleClearCompleted}>Clear Completed</ClearState>
        </Clearer>
      </Options>
    </section>
  )
}

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: var(--spacing-3xl);
  box-shadow: var(--shadow-strong);

  li {
    border-bottom: var(--border-width-thick) solid var(--border-color);
  }

  li:first-of-type {
    /* Add desired styles here, for example: */
    border-top-left-radius: var(--radius-md);
    border-top-right-radius: var(--radius-md);
  }
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  color: var(--text-secondary);
`;

const Counter = styled.div`
  background-color: var(--bg-secondary);
  flex: 1;
  padding: var(--input-padding-y) var(--input-padding-x);
  font-size: var(--font-size-body);
  border-bottom-left-radius: var(--radius-md);
  box-shadow: var(--shadow-strong);

  @media (min-width: 34.375rem) {
    flex: revert;
  }
`;

const TodoStates = styled.div`
  padding: var(--input-padding-y) var(--input-padding-x);
  background-color: var(--bg-secondary);
  order: 1;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  gap: var(--spacing-2xl);

  margin-top: var(--spacing-xl);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-strong);

  @media (min-width: 34.375rem) {
    order: 0;
    flex-basis: auto;
    border-radius: 0;
    margin: 0;
    flex: 1;
  }
`;

const TodoState = styled.button`
  color: inherit;
  background-color: inherit;
  border: none;
  padding: 0;
  margin: 0;
  font-weight: var(--font-weight-bold);
  transition: color var(--transition-normal);

  /* Highlight active state */
  ${props => props.isActive && `
    color: var(--color-primary-blue);
  `}

  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
  
  /* Override hover for active state */
  ${props => props.isActive && `
    &:hover {
      color: var(--color-primary-blue);
    }
  `}
`;

const Clearer = styled.div`
  background-color: var(--bg-secondary);
  padding: var(--input-padding-y) var(--input-padding-x);
  border-bottom-right-radius: var(--radius-md);
  box-shadow: var(--shadow-strong);
`;

const ClearState = styled.button`
  color: inherit;
  background-color: inherit;
  border: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-body);

  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;