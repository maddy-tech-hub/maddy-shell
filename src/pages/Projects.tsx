import React from 'react';
import { RootStateType } from '@src/redux/store';
import { useSelector } from 'react-redux';
import { lazyRemote } from '@src/shared/lib/mfe/lazyRemote';
import { appRoutes } from '@src/shared/config/appRoutes';
import PageIntro from '@src/components/Layout/PageIntro';
import { PageCanvas, PageStack } from '@src/components/Layout/PageScaffold';

const CardSection = lazyRemote(
  () => import('ui_remote/CardSection'),
  'ui-card-section-projects'
);

const Projects: React.FC = () => {
  const projectList = useSelector(
    (state: RootStateType) => state.projectSlice.projects
  );
  const personalProjects = projectList.filter(
    (project) => project.type === 'personal'
  );
  const professionalProjects = projectList.filter(
    (project) => project.type === 'professional'
  );

  return (
    <PageCanvas>
      <PageStack>
        <PageIntro
          eyebrow="Selected projects"
          title="Projects that reflect how I build products in the real world"
          description="Each project here is meant to be easy to understand at a glance: what it was, what kind of problem it solved, and the technologies I used to build it. The mix includes personal builds and production work across finance, auction, appraisal, retail inventory, and loan-related systems."
          highlights={[
            'Finance Tracker',
            'Retail IMS appraisals',
            'Vehicle Auction',
            'Micro-frontends',
            'Loan payoff platform',
          ]}
          stats={[
            { value: String(personalProjects.length), label: 'Personal builds shown' },
            { value: String(professionalProjects.length), label: 'Enterprise projects highlighted' },
            { value: 'React + ASP.NET', label: 'Typical delivery stack' },
          ]}
          actions={[
            { label: 'Get In Touch', url: appRoutes.contact },
          ]}
        />
        <CardSection
          title="Independent Solutions"
          subtitle="Personal builds where I explore architecture, usability, and end-to-end ownership"
          cardInfoList={personalProjects}
          borderColor="#19b89b"
        />
        <CardSection
          title="Professional Projects"
          subtitle="Production work delivered in real teams across workflow-heavy business applications"
          cardInfoList={professionalProjects}
        />
      </PageStack>
    </PageCanvas>
  );
};

export default Projects;
