import React from 'react';
import { experiences } from '@src/Services/cardList';
const MaddyCardSection = React.lazy(
  () => import('maddy_widget/MaddyCardSection')
);

const Experience: React.FC = () => {
  return (
    <div className="experience-page" style={{ padding: '2.5rem' }}>
      <MaddyCardSection
        title="Professional Experience"
        subtitle="Building Scalable and Efficient Applications"
        cardInfoList={experiences}
      />
    </div>
  );
};

export default Experience;
