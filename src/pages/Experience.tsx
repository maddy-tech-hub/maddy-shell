import React from 'react';
import { experiences } from '@src/Services/cardList';
import { lazyRemote } from '@src/shared/lib/mfe/lazyRemote';
import PageIntro from '@src/components/Layout/PageIntro';
import { PageCanvas, PageStack } from '@src/components/Layout/PageScaffold';
import {
  EXPERIENCE_JOIN_DATE,
  getRoundedExperienceValue,
} from '@src/shared/utils/experience';

const CardSection = lazyRemote(
  () => import('ui_remote/CardSection'),
  'ui-card-section-experience'
);

const Experience: React.FC = () => {
  const experienceValue = getRoundedExperienceValue(EXPERIENCE_JOIN_DATE);

  return (
    <PageCanvas>
      <PageStack>
        <PageIntro
          eyebrow="Professional experience"
          title="Building enterprise React products with strong API integration and reliable delivery"
          description="My experience combines frontend architecture, reusable component work, API integration, and day-to-day product execution. I've worked on complex workflows where clean UX, secure access, performance, and maintainability all matter at the same time."
          highlights={[
            'React + enterprise workflows',
            'ASP.NET Web API',
            'RBAC and auth flows',
            'Testing and debugging',
          ]}
          stats={[
            { value: 'Senior Software Developer', label: 'Current role' },
            { value: experienceValue, label: 'Years of experience' },
            { value: 'Agile teams', label: 'Working model' },
          ]}
        />
        <CardSection
          title="Professional Experience"
          subtitle="Hands-on work across scalable interfaces, APIs, and workflow-heavy product delivery"
          cardInfoList={experiences}
        />
      </PageStack>
    </PageCanvas>
  );
};

export default Experience;
