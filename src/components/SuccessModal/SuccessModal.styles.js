import styled from 'styled-components';

export const SuccessModal = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 101;
`;

export const ModalCon = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 2rem 2rem 2rem;
  margin: auto;
  position: absolute;
  background-color: white;
  left: 0;
  top: 20%;
  right: 0;
`;

export const SuccessMessage = styled.p`
  font-size: 2rem;
  font-family: sans-serif;
`;
