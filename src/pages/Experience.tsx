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
          title="Enterprise React delivery with strong API integration and senior-level ownership"
          description="My experience combines frontend architecture, reusable component work, API integration, and day-to-day product execution across workflow-heavy enterprise products. I am joining Deloitte USI as a Consultant (Senior Role) on August 7, 2026, and remain focused on reliable delivery, clean UX, secure access, and maintainable implementation."
          highlights={[
            'React + enterprise workflows',
            'ASP.NET Web API',
            'RBAC and auth flows',
            'Testing and debugging',
          ]}
          stats={[
            { value: 'Consultant (Senior Role)', label: 'Incoming role at Deloitte USI' },
            { value: 'August 7, 2026', label: 'Joining Deloitte USI' },
            { value: experienceValue, label: 'Years of experience' },
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
