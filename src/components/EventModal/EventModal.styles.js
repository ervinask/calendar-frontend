import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Modal = styled.section`
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: 101;
`;

export const EventModal = styled.article`
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
  flex-direction: column;
  left: 0;
  margin: auto;
  padding: 2rem 2rem 2rem;
  position: absolute;
  right: 0;
  top: 20%;
  width: 19rem;
`;

export const EventTitle = styled.div`
  font-size: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
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
  align-items: center;
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const EventIcon = styled.p`
  margin-right: 1rem;
`;

export const EventDesc = styled.div`
  border: none;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  word-wrap: break-word;
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
