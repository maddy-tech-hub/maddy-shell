import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '@src/redux/store';
import { appRoutes } from '@src/shared/config/appRoutes';
import PageIntro from '@src/components/Layout/PageIntro';
import {
  BulletList,
  PageCanvas,
  PagePanel,
  PagePanelGrid,
  PageStack,
  PanelCopy,
  PanelEyebrow,
  PanelTitle,
} from '@src/components/Layout/PageScaffold';
import {
  EXPERIENCE_JOIN_DATE,
  getRoundedExperienceLabel,
  getRoundedExperienceValue,
} from '@src/shared/utils/experience';

const About: React.FC = () => {
  const experienceLabel = getRoundedExperienceLabel(EXPERIENCE_JOIN_DATE);
  const experienceValue = getRoundedExperienceValue(EXPERIENCE_JOIN_DATE);
  const { socialLinks } = useSelector(
    (state: RootStateType) => state.contactDetailsSlice
  );

  return (
    <PageCanvas>
      <PageStack>
        <PageIntro
          eyebrow="About me"
          title="A full-stack developer focused on making complex products clear and usable"
          description={`I'm based in Bengaluru and work mainly with React, TypeScript, and ASP.NET Web API. Over the last ${experienceLabel}, I've delivered products where the workflows are detailed, the business rules are heavy, and the UI still needs to feel simple, fast, and trustworthy. I enjoy bringing structure to that kind of work through reusable frontend architecture, clean API integration, and thoughtful implementation.`}
          highlights={[
            'React + TypeScript',
            'ASP.NET Web API',
            'Reusable UI systems',
            'Workflow-heavy products',
            'Product-minded engineering',
          ]}
          stats={[
            { value: experienceValue, label: 'Years of experience' },
            { value: 'August 6, 2026', label: 'Last working day (current company)' },
            { value: 'August 7, 2026', label: 'Joining Deloitte USI' },
          ]}
          actions={[
            { label: 'Explore Projects', url: appRoutes.projects },
            { label: 'View Skills', url: appRoutes.skills },
            {
              label: 'LinkedIn Profile',
              url:
                socialLinks.linkedin ||
                'https://www.linkedin.com/in/madhava-reddy-vemireddy-9a0826167',
            },
          ]}
        />

        <PagePanelGrid>
          <PagePanel>
            <PanelEyebrow>What I bring</PanelEyebrow>
            <PanelTitle>Frontend depth with enough backend awareness to build complete features</PanelTitle>
            <PanelCopy>
              My strongest value is in the overlap between interface quality and
              backend-connected product delivery. I am comfortable shaping the user
              journey, integrating APIs, and keeping the implementation readable for
              the next set of features.
            </PanelCopy>
            <BulletList>
              <li>Strong hands-on work with React, Hooks, Redux Toolkit, routing, and reusable UI patterns</li>
              <li>Practical ASP.NET Web API integration with authentication, business logic, and data-backed workflows</li>
              <li>Comfortable supporting a feature from requirement analysis through testing and release</li>
            </BulletList>
          </PagePanel>

          <PagePanel>
            <PanelEyebrow>How I work</PanelEyebrow>
            <PanelTitle>Think first, implement cleanly, and improve what feels messy</PanelTitle>
            <PanelCopy>
              I like to understand the real flow before I start building. That helps
              me avoid unnecessary complexity and keeps the code easier to extend,
              debug, and maintain after the first delivery.
            </PanelCopy>
            <BulletList>
              <li>Prefer clean structure and clear ownership over rushed implementations</li>
              <li>Strong on debugging, bug fixing, and refactoring features that have become hard to manage</li>
              <li>Used to collaborating with backend, QA, and product teams in Agile delivery environments</li>
            </BulletList>
          </PagePanel>

          <PagePanel>
            <PanelEyebrow>What I build best</PanelEyebrow>
            <PanelTitle>Products where clarity matters more than visual noise</PanelTitle>
            <PanelCopy>
              A lot of my work sits in domains where users are completing real tasks:
              bidding, appraisal, eligibility checks, payoff requests, and finance
              workflows. Those products need the UI to guide people well while still
              handling complex business logic underneath.
            </PanelCopy>
            <BulletList>
              <li>Auction, pricing, and purchasing flows with dynamic API-backed state</li>
              <li>Inspection, appraisal, and retail inventory workflows with multiple decision steps</li>
              <li>Finance and loan-oriented experiences where trust, readability, and stability matter</li>
            </BulletList>
          </PagePanel>

          <PagePanel>
            <PanelEyebrow>Current direction</PanelEyebrow>
            <PanelTitle>Growing toward stronger product and platform ownership</PanelTitle>
            <PanelCopy>
              Alongside enterprise work, I use personal projects to sharpen how I
              think about architecture and UX. The Finance Tracker helps me practice
              end-to-end full-stack product building, while this portfolio lets me
              improve micro-frontend structure, reusable UI, and overall presentation.
            </PanelCopy>
            <BulletList>
              <li>Building full-stack product features with React, ASP.NET Web API, and PostgreSQL</li>
              <li>Improving reusable UI systems and cleaner module boundaries in micro-frontends</li>
              <li>Using AI-assisted development tools like Codex, Claude, and Cline to speed up research, refactoring, and delivery</li>
            </BulletList>
          </PagePanel>
        </PagePanelGrid>
      </PageStack>
    </PageCanvas>
  );
};

export default About;
