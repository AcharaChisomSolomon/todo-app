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
      <Description onClick={() => updateTodo(id)}>
        <Circle completed={completed}>
          {completed && <img src={iconCheck} />}
        </Circle>
        <Text completed={completed}>{description}</Text>
      </Description>
      <CrossSVG 
        className="delete-icon" 
        onClick={() => deleteTodo(id)}
      >
        <img src={iconCross} />
      </CrossSVG>
    </List>
  )
};

const CrossSVG = styled.button`
  cursor: pointer;
  background-color: inherit;
  border: none;
  flex-shrink: 0;
  
  @media (min-width: var(--breakpoint-mobile)) {
    display: none;
  }
`;

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

  &:hover div {
    border-color: var(--color-check-bg);
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