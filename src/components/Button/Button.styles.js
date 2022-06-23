import styled from "styled-components";

export const Button = styled.button`
  border: 0.05rem solid black;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.color};
`;
