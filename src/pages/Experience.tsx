import React from 'react';
import { experiences } from '@src/Services/cardList';
import { useIntl } from 'react-intl';
const MaddyCardSection = React.lazy(() => import('maddy_mfe/MaddyCardSection'));

const Experience: React.FC = () => {
  const intl = useIntl();
  return (
    <div className="experience-page">
      <MaddyCardSection
        title={intl.formatMessage({ id: 'experienceTitle' })}
        subtitle={intl.formatMessage({ id: 'experienceSubTitle' })}
        cardInfoList={experiences}
      />
    </div>
  );
};

export default Experience;
