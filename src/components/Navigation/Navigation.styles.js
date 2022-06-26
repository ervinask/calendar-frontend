import styled from 'styled-components';

export const Navigation = styled.nav`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: grid;
  grid-template-rows: 7fr 2fr;
`;
