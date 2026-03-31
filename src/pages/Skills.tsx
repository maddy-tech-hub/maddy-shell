import React from 'react';
import { skillsInfo } from '@src/Services/cardList';
import { lazyRemote } from '@src/shared/lib/mfe/lazyRemote';
import PageIntro from '@src/components/Layout/PageIntro';
import { PageCanvas, PageStack } from '@src/components/Layout/PageScaffold';

const CardSection = lazyRemote(
  () => import('ui_remote/CardSection'),
  'ui-card-section-skills'
);

const SkillsComponent: React.FC = () => {
  return (
    <PageCanvas>
      <PageStack>
        <PageIntro
          eyebrow="Core toolkit"
          title="A delivery stack shaped around React products and .NET-backed systems"
          description="My toolkit reflects the products I enjoy building most: modern React interfaces, dependable ASP.NET Web API services, reusable UI systems, and delivery practices that help teams move quickly without creating long-term maintenance pain."
          highlights={[
            'React + TypeScript',
            'Redux Toolkit',
            'ASP.NET Web API',
            'PostgreSQL + Entity Framework',
            'AI-assisted workflows',
          ]}
          stats={[
            { value: 'Frontend + backend', label: 'Comfort across the stack' },
            { value: 'Reusable UI', label: 'Design-system mindset' },
            { value: 'Agile teams', label: 'Delivery environment' },
          ]}
        />
        <CardSection
          title="Skills and Expertise"
          subtitle="Technologies, tooling, and delivery practices I use to ship polished products"
          cardInfoList={skillsInfo}
        />
      </PageStack>
    </PageCanvas>
  );
};

export default SkillsComponent;
