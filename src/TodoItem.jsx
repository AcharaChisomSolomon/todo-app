import styled from "@emotion/styled"

import iconCheck from './images/icon-check.svg'
import iconCross from './images/icon-cross.svg'

export default function TodoItem({ todo, updateTodo, deleteTodo, onDragStart, onDragOver, onDrop }) {
  const { id, description, completed } = todo

  return (
    <List
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, id)}
    >
      <Description 
        onClick={() => updateTodo(id)}
        role="checkbox"
        aria-checked={completed}
        aria-labelledby={`todo-text-${id}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            updateTodo(id);
          }
        }}
      >
        <Circle completed={completed} aria-hidden="true">
          {completed && <img src={iconCheck} alt="" />}
        </Circle>
        <Text completed={completed} id={`todo-text-${id}`}>{description}</Text>
      </Description>
      <CrossSVG 
        className="delete-icon" 
        onClick={() => deleteTodo(id)}
        aria-label={`Delete todo: ${description}`}
        type="button"
      >
        <img src={iconCross} alt="" />
      </CrossSVG>
    </List>
  )
};

const List = styled.li`
  list-style: none;
  margin: 0;
  width: 100%;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--input-padding-y) var(--input-padding-x);
  font-size: var(--font-size-sm);
  cursor: move;
  transition: all 0.3s ease;

  &:hover .delete-icon {
    display: block;
  }

  /* Drag states */
  &:active {
    cursor: grabbing;
  }

  &[draggable="true"]:hover {
    /* transform: translateY(-2px); */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  cursor: pointer;
  flex-grow: 1;
  border: none;
  background: none;
  padding: 0;
  text-align: left;
  outline: none;

  &:hover div {
    border-color: var(--color-check-bg);
  }

  &:focus {
    outline: 2px solid var(--color-primary-blue);
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const Circle = styled.div`
  width: var(--circle-size);
  height: var(--circle-size);
  border: var(--border-width-thick) solid var(--border-color);
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  
  /* Apply gradient background when completed */
  ${props => props.completed && `
    background: var(--color-check-bg);
    border: none;
  `}
`;

const Text = styled.p`
  ${props => props.completed && `
    text-decoration: line-through;
    color: var(--text-completed-color);
  `}
`;

const CrossSVG = styled.button`
  cursor: pointer;
  background-color: inherit;
  border: none;
  flex-shrink: 0;
  padding: 4px;
  border-radius: 4px;
  
  &:focus {
    outline: 2px solid var(--color-primary-blue);
    outline-offset: 2px;
  }
  
  @media (min-width: 34.375rem) {
    display: none;
  }
`;