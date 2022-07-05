import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1.25rem;
  height: 3rem;
  justify-content: center;
  width: 100%;
  &:hover {
    box-shadow: 0.125rem 0 #f05151 inset;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #c9cbd1;
`;
