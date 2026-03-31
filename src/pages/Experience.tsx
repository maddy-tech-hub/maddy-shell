import React from 'react';
import { experiences } from '@src/Services/cardList';
import { useIntl } from 'react-intl';
import { lazyRemote } from '@src/shared/lib/mfe/lazyRemote';

const CardSection = lazyRemote(
  () => import('ui_remote/CardSection'),
  'ui-card-section-experience'
);

const Experience: React.FC = () => {
  const intl = useIntl();
  return (
    <div className="experience-page">
      <CardSection
        title={intl.formatMessage({ id: 'experienceTitle' })}
        subtitle={intl.formatMessage({ id: 'experienceSubTitle' })}
        cardInfoList={experiences}
      />
    </div>
  );
};

export default Experience;
