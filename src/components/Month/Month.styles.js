import styled from 'styled-components';

export const Month = styled.div`
  background-color: ${(props) => props.theme.background.tertiary};
  height: calc(100% - 2rem);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;
