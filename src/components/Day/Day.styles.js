import styled from 'styled-components';

export const Day = styled.div`
  background-color: ${(props) => props.theme.background.tertiary};
  border-color: ${(props) => props.theme.border.primary};
  border: 0.1px solid;
  box-sizing: border-box;
  height: calc(100% / 6);
  margin: 0;
  width: calc(100% / 7);
`;

export const Text = styled.p`
  color: ${(props) => props.color};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin: 0;
  text-align: center;
`;
