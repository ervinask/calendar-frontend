import styled from 'styled-components';

export const NavItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0.125rem 0 #f05151 inset;
  }
`;
