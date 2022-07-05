import styled from 'styled-components';

export const NavigationSec = styled.div`
  align-items: end;
  background-color: ${(props) => props.background};
  display: grid;
  gap: 0.9rem;
  grid-template-rows: 3rem 3rem 1fr;
  padding: 0.5rem 0;
`;
