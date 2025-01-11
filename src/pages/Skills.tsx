import React, { Suspense } from 'react';
import { cardInfo } from '@src/interfaces/common';
import '../styles/css/SkillsComponent.scss';
import { skillsInfo } from '@src/Services/cardList';

const MaddyCardSection = React.lazy(
  () => import('maddy_widget/MaddyCardSection')
);

const SkillsComponent: React.FC = () => {
  return (
    <div className="skills-container" style={{ padding: '2.5rem' }}>
      <MaddyCardSection
        title="Skills and Expertise"
        subtitle="Technologies and Tools I've Worked With"
        cardInfoList={skillsInfo}
      />
    </div>
  );
};

export default SkillsComponent;
