import styled from 'styled-components';

export const Header = styled.header`
  margin: 0;
  padding: 0 2rem;
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  gap: 1rem;
  box-sizing: border-box;
  border-bottom: 0.125rem #f05151 solid;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  width: 15rem;
`;

export const Next = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  cursor: pointer;
`;

export const Previous = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  cursor: pointer;
`;
