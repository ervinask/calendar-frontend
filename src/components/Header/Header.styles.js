import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  border-bottom: 0.125rem #f05151 solid;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  height: ${(props) => props.height};
  margin: 0;
  padding: 0 2rem;
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  width: 15rem;
`;

export const Next = styled.p`
  cursor: pointer;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const Previous = styled.p`
  cursor: pointer;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
