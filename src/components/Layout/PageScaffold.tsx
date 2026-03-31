import styled from 'styled-components';

export const PageCanvas = styled.main`
  padding: 2rem 1.25rem 4rem;
`;

export const PageStack = styled.div`
  width: min(1200px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PagePanelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2rem;
`;

export const PagePanel = styled.article`
  padding: 1.5rem;
  border-radius: 28px;
  border: 1px solid rgba(13, 27, 51, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 249, 255, 0.94));
  box-shadow: 0 24px 60px rgba(8, 24, 48, 0.1);
`;

export const PanelEyebrow = styled.p`
  margin: 0 0 0.8rem;
  color: #2d4fd4;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const PanelTitle = styled.h3`
  margin: 0;
  color: #0d1b33;
  font-size: 1.3rem;
`;

export const PanelCopy = styled.p`
  margin: 0.85rem 0 0;
  color: #5a6986;
  line-height: 1.8;
`;

export const BulletList = styled.ul`
  display: grid;
  gap: 0.75rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 1rem;
    color: #5a6986;
    line-height: 1.75;

    &::before {
      content: '';
      position: absolute;
      top: 0.7rem;
      left: 0;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #117eff;
    }
  }
`;
