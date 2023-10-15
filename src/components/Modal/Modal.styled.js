import { styled } from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  top: 0px;
  left: 0px;
  background-color: rgba(34, 13, 91, 0.23);
  z-index: 2000;
  overscroll-behavior: contain;
  backdrop-filter: blur(3.5px);
  animation: fadeIn 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 533px;
  max-height: 448px;
  background-color: rgb(64, 46, 155);
  padding: 40px 72px;
  overscroll-behavior: contain;
`;