import styled from 'styled-components';

export const CreateEventForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 19rem;
  padding: 2rem;
  border: 1px solid black;
  margin: 2rem auto;
`;

export const TitleInput = styled.input`
  border: none;
  border-bottom: 0.125rem solid black;
  font-size: 1.25rem;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 0.125rem solid #f05151;
  }
`;

export const DateInput = styled.input`
  border: none;
  border-bottom: 0.125rem solid black;
  font-size: 1.25rem;

  font-size: 1rem;

  &:focus {
    outline: none;
    border-bottom: 0.125rem solid #f05151;
  }
`;

export const EndTimeInput = styled.input`
  border: none;
  border-bottom: 0.125rem solid black;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-bottom: 0.125rem solid #f05151;
  }
`;

export const StartTimeInput = styled.input`
  border: none;
  border-bottom: 0.125rem solid black;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-bottom: 0.125rem solid #f05151;
  }
`;

export const Con = styled.div`
  display: flex;
  align-content: center;
  gap: 1rem;
  width: 100%;
`;

export const EventLabel = styled.label`
  margin-right: 1rem;
`;

export const DescInput = styled.textarea`
  border: none;
  font-size: 1rem;
  width: 100%;
  resize: none;
  background: ${(props) => props.theme.background.secondary};
  height: 5rem;

  &:focus {
    outline: none;
    border-bottom: 0.125rem solid #f05151;
  }
`;
