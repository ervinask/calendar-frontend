import styled from 'styled-components';

export const Month = styled.div`
  background-color: ${(props) => props.theme.background.tertiary};
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 2rem);
  margin: 0;
  padding: 0;
  width: 100%;
`;
