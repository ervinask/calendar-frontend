import styled from 'styled-components';

export const Navigation = styled.nav`
  display: grid;
  grid-template-rows: 7fr 2fr;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: relative;
`;
