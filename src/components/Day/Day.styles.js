import styled from "styled-components";

export const Day = styled.div`
  background-color: ${(props) => props.theme.background.tertiary};
  width: calc(100% / 7);
  margin: 0;
  border: 0.1px solid;
  border-color: ${(props) => props.theme.border.primary};
  box-sizing: border-box;
`;

export const Text = styled.p`
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-align: center;
`;
