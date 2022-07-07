import styled from 'styled-components';

export const TwoColumnCon = styled.div`
  background-color: #d1d1d1;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 6rem);
  margin: 6rem 0 0 4rem;
  padding: 4rem;
  width: calc(100% - 4rem);
  gap: 8rem;

  @media (max-width: 900px) {
    padding: 2rem;
    gap: 4rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
