import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EventCard = styled.div`
  background-color: #1d222e;
  border-radius: 0.75rem;
  box-sizing: border-box;
  padding: 2rem 2rem 1.5rem;
  position: relative;
  width: calc(100% / 3 - 0.75rem);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  border-bottom: 1px solid white;
  color: #dcdee4;
  margin-bottom: 0.5rem;
  margin: 0;
  overflow: hidden;
  padding-bottom: 0.25rem;
  text-overflow: ellipsis;
`;

export const Time = styled.div`
  align-items: flex-end;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Date = styled.p`
  color: #fff;
  font-size: 1.25rem;
  margin: 0;
`;

export const ExactTime = styled.p`
  color: #dcdee4;
  margin: 0;
`;

export const Desc = styled.p`
  color: #dcdee4;
  margin: 0;
  overflow: hidden;
  text-align: justify;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  cursor: pointer;
  position: absolute;
  right: 2rem;
  top: 1rem;
`;
