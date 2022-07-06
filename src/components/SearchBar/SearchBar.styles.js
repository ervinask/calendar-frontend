import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchBar = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
`;

export const Icon = styled(FontAwesomeIcon)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-size: 1.25rem;
  padding: 1.2rem;
  position: absolute;
`;

export const Input = styled.input`
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-sizing: border-box;
  font-size: 1.25rem;
  padding: 1.2rem 3rem;
  width: 100%;

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 20px;
  }
`;
