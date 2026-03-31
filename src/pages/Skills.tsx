import React, { Suspense } from 'react';
import { cardInfo } from '@src/interfaces/common';
import '../styles/css/SkillsComponent.scss';
import { skillsInfo } from '@src/Services/cardList';
import { useIntl } from 'react-intl';
import { lazyRemote } from '@src/shared/lib/mfe/lazyRemote';

const CardSection = lazyRemote(
  () => import('ui_remote/CardSection'),
  'ui-card-section-skills'
);

const SkillsComponent: React.FC = () => {
  const intl = useIntl();
  return (
    <div className="skills-container">
      <CardSection
        title={intl.formatMessage({ id: 'skillTitle' })}
        subtitle={intl.formatMessage({ id: 'skillSubTitle' })}
        cardInfoList={skillsInfo}
      />
    </div>
  );
};

export default SkillsComponent;
