import React from 'react';
import styled, { keyframes } from 'styled-components';

// Spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Spinner style for the loader
const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

// Container for the loader, can be placed anywhere (button, screen, etc.)
const LoaderContainer = styled.div<{ fullScreen?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => (props.fullScreen ? 'fixed' : 'absolute')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  ${(props) =>
    props.fullScreen &&
    `
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
  `}
`;

// Optional loading text style
const LoadingText = styled.div`
  margin-top: 12px;
  color: #3498db;
  font-size: 14px;
  font-weight: bold;
`;

interface LoaderProps {
  text?: string; // optional text prop
  fullScreen?: boolean; // whether to display loader fullscreen
}

const Loader: React.FC<LoaderProps> = ({ text, fullScreen = false }) => {
  return (
    <LoaderContainer fullScreen={fullScreen}>
      <Spinner />
      {text && <LoadingText>{text}</LoadingText>}
    </LoaderContainer>
  );
};

export default Loader;
