import styled from 'styled-components';

export const InputCon = styled.div`
  align-items: center;
  border-bottom: 1px solid black;
  display: flex;
  font-family: sans-serif;
  gap: 0.25rem;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  left: 1rem;
  position: absolute;
  width: 9rem;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  font-weight: bold;
  padding: 1rem 1rem 1rem 9rem;
  width: 100%;

  &:focus {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    outline: none;
  }
`;
