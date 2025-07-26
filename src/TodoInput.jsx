import styled from "@emotion/styled"
import React from "react";

const generateId = () => Math.ceil(Math.random() * 10000000)

export default function TodoInput({ addNewTodo }) {
  const [value, setValue] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim() !== '') {
      addNewTodo({
        id: generateId(),
        description: value,
        completed: false
      })
    }
    setValue('')
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Circle></Circle>
      <Input 
        type="text" 
        name="newTodo"
        value={value} 
        placeholder="Create a new todo..."
        onChange={e => setValue(e.target.value)}
        />
    </Container>
  )
};

const Container = styled.form`
  width: 100%;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--input-padding-y) var(--input-padding-x);
  border-radius: var(--radius-md);
  font-size: var(--font-size-body);
  margin-top: var(--spacing-6xl);
`;

const Circle = styled.div`
  width: var(--circle-size);
  height: var(--circle-size);
  border: var(--border-width-thick) solid var(--border-color);
  border-radius: 50%;
  flex-shrink: 0;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: inherit;
  color: inherit;
`;