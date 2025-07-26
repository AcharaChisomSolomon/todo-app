import styled from "@emotion/styled"

export default function TodoItem({ todo }) {
  const { description } = todo
  return (
    <li>
      {description}
    </li>
  )
};

const Container = styled.div`

`;