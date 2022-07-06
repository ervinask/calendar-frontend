import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EventCard = styled.div`
  width: calc(100% / 3 - 0.75rem);
  background-color: #1d222e;
  border-radius: 0.75rem;
  padding: 2rem 2rem 1.5rem;
  box-sizing: border-box;
  position: relative;
`;

export const Title = styled.h2`
  margin: 0;
  color: #dcdee4;
  margin-bottom: 0.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid white;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Time = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Date = styled.p`
  margin: 0;
  color: #fff;
  font-size: 1.25rem;
`;

export const ExactTime = styled.p`
  margin: 0;
  color: #dcdee4;
`;

export const Desc = styled.p`
  margin: 0;
  color: #dcdee4;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 1rem;
  cursor: pointer;
`;
