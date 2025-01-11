import React from 'react';
import '../styles/css/Education.scss';
import { educationList } from '@src/Services/cardList';
const MaddyCardSection = React.lazy(
  () => import('maddy_widget/MaddyCardSection')
);

const Education: React.FC = () => {
  return (
    <div className="education-container" style={{ padding: '2.5rem' }}>
      <MaddyCardSection
        title="Educational Background"
        subtitle="Highlights of Academic Achievements"
        cardInfoList={educationList}
        borderColor="#ff9800"
      />
    </div>
  );
};

export default Education;
