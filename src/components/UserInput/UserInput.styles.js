import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputCon = styled.div`
  border-radius: 0 0 0 1rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 1.25rem;
`;

export const Input = styled.input`
  padding: 1rem 0.8rem 0.6rem;
  border: none;
  outline: none;
  background: transparent;
  box-shadow: #dee0e7 0px 2px 4px 0px inset;
`;
