import React from 'react';
import { educationList } from '@src/Services/cardList';
import { lazyRemote } from '@src/shared/lib/mfe/lazyRemote';
import PageIntro from '@src/components/Layout/PageIntro';
import { PageCanvas, PageStack } from '@src/components/Layout/PageScaffold';

const CardSection = lazyRemote(
  () => import('ui_remote/CardSection'),
  'ui-card-section-education'
);

const Education: React.FC = () => {
  return (
    <PageCanvas>
      <PageStack>
        <PageIntro
          eyebrow="Foundation"
          title="Education that gave me a strong technical foundation"
          description="My formal education gave me the technical base and systems thinking that I still rely on in product development. It shaped how I approach problem solving, architecture, and clean implementation in real projects."
          highlights={[
            'Computer science fundamentals',
            'Algorithms and systems thinking',
            'Database concepts',
            'Web engineering basics',
          ]}
          stats={[
            { value: 'B.Tech CSE', label: 'Primary degree' },
            { value: '77%', label: 'Engineering aggregate' },
            { value: '93.3%', label: 'Intermediate aggregate' },
          ]}
        />
        <CardSection
          title="Educational Background"
          subtitle="Academic milestones that supported my move into product engineering"
          cardInfoList={educationList}
          borderColor="#ff8e5f"
        />
      </PageStack>
    </PageCanvas>
  );
};

export default Education;
