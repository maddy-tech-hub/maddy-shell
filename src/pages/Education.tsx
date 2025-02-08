import React from 'react';
import '../styles/css/Education.scss';
import { educationList } from '@src/Services/cardList';
import { useIntl } from 'react-intl';
const MaddyCardSection = React.lazy(() => import('maddy_mfe/MaddyCardSection'));

const Education: React.FC = () => {
  const intl = useIntl();
  return (
    <div className="education-container">
      <MaddyCardSection
        title={intl.formatMessage({ id: 'educationTitle' })}
        subtitle={intl.formatMessage({ id: 'educationSubTitle' })}
        cardInfoList={educationList}
        borderColor="#ff9800"
      />
    </div>
  );
};

export default Education;
