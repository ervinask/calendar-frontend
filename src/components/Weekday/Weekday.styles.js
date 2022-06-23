import styled from "styled-components";

export const Weekday = styled.p`
  background-color: ${(props) => props.theme.background.tertiary};
  width: calc(100% / 7);
  height: 2rem;
  margin: 0;

  box-sizing: border-box;
  text-align: center;
  line-height: 2rem;
`;
