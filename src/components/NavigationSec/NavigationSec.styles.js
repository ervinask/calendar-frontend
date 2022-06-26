import styled from 'styled-components';

export const NavigationSec = styled.div`
  background-color: ${(props) => props.background};
  display: grid;
  grid-template-rows: 3rem 3rem 1fr;
  gap: 0.9rem;
  padding: 0.5rem 0;
  align-items: end;
`;
