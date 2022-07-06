import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputCon = styled.div`
  display: flex;
  width: 100%;
  font-family: sans-serif;
  gap: 0.25rem;
  align-items: center;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
  position: relative;
`;

export const Label = styled.label`
  width: 10rem;
  position: absolute;
  left: 1rem;
`;

export const Input = styled.input`
  background: transparent;
  padding: 1rem 1rem 1rem 9rem;
  border: none;
  width: 100%;
  font-weight: bold;

  &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
