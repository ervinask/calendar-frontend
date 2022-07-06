import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchBar = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  padding: 1.2rem;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem 3rem;
  font-size: 1.25rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 2rem;

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 20px;
  }
  box-sizing: border-box;
`;
