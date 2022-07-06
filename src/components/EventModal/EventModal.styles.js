import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Modal = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 101;
`;

export const EventModal = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  width: 19rem;
  padding: 2rem 2rem 2rem;
  margin: auto;
  position: absolute;
  background-color: white;
  left: 0;
  top: 20%;
  right: 0;
`;

export const EventTitle = styled.div`
  font-size: 1.25rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const EventDate = styled.div`
  border: none;
  font-size: 1.25rem;

  font-size: 1rem;
`;

export const EventEndTime = styled.div`
  border: none;
  font-size: 1rem;
`;

export const EventStartTime = styled.div`
  border: none;

  font-size: 1rem;
`;

export const Con = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const EventIcon = styled.p`
  margin-right: 1rem;
`;

export const EventDesc = styled.div`
  border: none;
  font-size: 1rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

export const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;
