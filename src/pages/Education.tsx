import React from 'react';
import '../styles/css/Education.scss';
import { educationList } from '@src/Services/cardList';
import { useIntl } from 'react-intl';
import { lazyRemote } from '@src/shared/lib/mfe/lazyRemote';

const CardSection = lazyRemote(
  () => import('ui_remote/CardSection'),
  'ui-card-section-education'
);

const Education: React.FC = () => {
  const intl = useIntl();
  return (
    <div className="education-container">
      <CardSection
        title={intl.formatMessage({ id: 'educationTitle' })}
        subtitle={intl.formatMessage({ id: 'educationSubTitle' })}
        cardInfoList={educationList}
        borderColor="#ff9800"
      />
    </div>
  );
};

export default Education;
