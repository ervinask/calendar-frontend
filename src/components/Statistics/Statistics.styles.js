import styled from 'styled-components';

export const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  @media (max-width: 768px) {
  }
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-family: sans-serif;
`;

export const StatCon = styled.div`
  margin: 0;
  font-family: sans-serif;
  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;

export const Space = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 33%;
    justify-content: start;
    align-items: center;
  }
`;

export const Stat = styled.p`
  margin: 2rem 0;
  font-family: sans-serif;
  color: black;
  width: 100%;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Result = styled.p`
  margin: 2rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;
