import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CreateEventForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  left: 4rem;
  margin: 2rem auto;
  padding: 4rem 2rem 2rem;
  position: absolute;
  width: 19rem;
`;

export const TitleInput = styled.input`
  border-bottom: 0.125rem solid black;
  border: none;
  font-size: 1.25rem;
  width: 100%;

  &:focus {
    border-bottom: 0.125rem solid #f05151;
    outline: none;
  }
`;

export const DateInput = styled.input`
  border-bottom: 0.125rem solid black;
  border: none;
  font-size: 1.25rem;
  font-size: 1rem;

  &:focus {
    border-bottom: 0.125rem solid #f05151;
    outline: none;
  }
`;

export const EndTimeInput = styled.input`
  border-bottom: 0.125rem solid black;
  border: none;
  font-size: 1rem;

  &:focus {
    border-bottom: 0.125rem solid #f05151;
    outline: none;
  }
`;

export const StartTimeInput = styled.input`
  border-bottom: 0.125rem solid black;
  border: none;
  font-size: 1rem;

  &:focus {
    border-bottom: 0.125rem solid #f05151;
    outline: none;
  }
`;

export const Con = styled.div`
  align-content: center;
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const EventLabel = styled.label`
  margin-right: 1rem;
`;

export const DescInput = styled.textarea`
  background: ${(props) => props.theme.background.secondary};
  border: none;
  font-size: 1rem;
  height: 5rem;
  resize: none;
  width: 100%;

  &:focus {
    border-bottom: 0.125rem solid #f05151;
    outline: none;
  }
`;

export const CloseButton = styled(FontAwesomeIcon)`
  color: black;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;

  &:hover {
    color: grey;
  }
`;
