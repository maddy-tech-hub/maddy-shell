import React, { FC } from 'react';
import styled from 'styled-components';
import loginBanner from '../assets/banner.jpg';

interface AuthTemplateProps {
  children: React.ReactNode;
  title?: string;
}

const TemplateWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f6f9;
`;

const RightPanel = styled.div`
  flex: 1;
  background: url(${loginBanner}) no-repeat center center/cover;
  background-size: cover;
  background-position: center;
  z-index: 1; /* Ensure it is below the interactive elements */
  position: relative; /* Required for z-index to take effect */
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
  }
`;

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  children,
  title,
}) => {
  return (
    <TemplateWrapper>
      <LeftPanel>
        <Logo>{title}</Logo>
        {children}
      </LeftPanel>
      <RightPanel />
    </TemplateWrapper>
  );
};
