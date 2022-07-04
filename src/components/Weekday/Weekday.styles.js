import styled from 'styled-components';

export const Weekday = styled.p`
  background-color: ${(props) => props.theme.background.tertiary};
  box-sizing: border-box;
  height: 2rem;
  line-height: 2rem;
  margin: 0;
  text-align: center;
  width: calc(100% / 7);
`;
