import React, { Suspense } from 'react';
import { cardInfo } from '@src/interfaces/common';
import '../styles/css/SkillsComponent.scss';
import { skillsInfo } from '@src/Services/cardList';
import { useIntl } from 'react-intl';

const MaddyCardSection = React.lazy(() => import('maddy_mfe/MaddyCardSection'));

const SkillsComponent: React.FC = () => {
  const intl = useIntl();
  return (
    <div className="skills-container">
      <MaddyCardSection
        title={intl.formatMessage({ id: 'skillTitle' })}
        subtitle={intl.formatMessage({ id: 'skillSubTitle' })}
        cardInfoList={skillsInfo}
      />
    </div>
  );
};

export default SkillsComponent;
