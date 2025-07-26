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
  gap: calc(12rem / 16);
  padding: calc(14rem / 16) calc(20rem / 16);
  border-radius: calc(8rem / 16);
  font-size: calc(12rem / 16);
  margin-top: calc(40rem / 16);
`;

const Circle = styled.div`
  width: calc(20rem / 16);
  height: calc(20rem / 16);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  flex-shrink: 0;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: inherit;
  color: inherit;
`;