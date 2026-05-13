import { RootStateType } from '@src/redux/store';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { lazyRemote } from '@src/shared/lib/mfe/lazyRemote';
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
  getRoundedExperienceValue,
} from '@src/shared/utils/experience';
import profile from '../assets/Reddy.jpg';
import cv from '../assets/Madhava_Reddy_Developer.pdf';

const Profile = lazyRemote(() => import('ui_remote/Profile'), 'ui-profile');
const CardSection = lazyRemote(
  () => import('ui_remote/CardSection'),
  'ui-card-section-home-featured'
);

const featuredProjectOrder = [
  'Finance Tracker Platform',
  'Retail IMS Appraisals Platform',
  'Vehicle Auction & Purchasing Platform',
  'HCC Loan Payoff Platform',
];

const Home: React.FC = () => {
  const intl = useIntl();
  const experienceValue = getRoundedExperienceValue(EXPERIENCE_JOIN_DATE);
  const { siteTitle, socialLinks } = useSelector(
    (state: RootStateType) => state.contactDetailsSlice
  );
  const projectList = useSelector(
    (state: RootStateType) => state.projectSlice.projects
  );

  const featuredProjects = featuredProjectOrder
    .map((title) => projectList.find((project) => project.title === title))
    .filter(Boolean);

  const profileData = {
    profileImage: profile,
    siteTitle,
    socialLinks,
    profileText: {
      greeting: intl.formatMessage({ id: 'greeting' }),
      name: intl.formatMessage({ id: 'name' }),
      title: intl.formatMessage({ id: 'bioTitle' }),
      description: (
        <FormattedMessage
          id="description"
          values={{ b: (chunks) => <strong>{chunks}</strong> }}
        />
      ),
      aboutLinkText: intl.formatMessage({ id: 'aboutLinkText' }),
      aboutLinkURL: intl.formatMessage({ id: 'aboutLinkURL' }),
      cvLinkText: intl.formatMessage({ id: 'cvLinkText' }),
      cvLinkURL: cv,
      badge:
        'Incoming Consultant (Senior Role) at Deloitte USI | Joining August 7, 2026',
    },
    highlights: [
      'React + TypeScript',
      'ASP.NET Web API',
      'PostgreSQL + API integration',
      'Micro-frontend architecture',
      'Reusable UI systems',
    ],
    metrics: [
      { value: experienceValue, label: 'Years of professional delivery' },
      { value: 'August 6, 2026', label: 'Last working day (current company)' },
      { value: 'Immediately', label: 'Interview availability' },
    ],
  };

  return (
    <>
      <div className="home-container">
        <Profile {...profileData} />
      </div>

      <PageCanvas>
        <PageStack>
          <PagePanelGrid>
            <PagePanel>
              <PanelEyebrow>Why teams hire me</PanelEyebrow>
              <PanelTitle>Frontend quality with backend awareness and product clarity</PanelTitle>
              <PanelCopy>
                I work best on products where the UI has to feel simple, but the
                workflows, API contracts, and business rules behind it are not.
              </PanelCopy>
              <BulletList>
                <li>Reusable React UI with clean structure and maintainable state flow</li>
                <li>ASP.NET Web API integration for secure, data-driven product journeys</li>
                <li>Practical delivery mindset across analysis, development, testing, and release support</li>
                <li>Joining Deloitte USI on August 7, 2026 and available for interview processes before joining</li>
              </BulletList>
            </PagePanel>

            <PagePanel>
              <PanelEyebrow>Domains I know well</PanelEyebrow>
              <PanelTitle>Finance, auction, appraisal, retail inventory, and loan workflows</PanelTitle>
              <PanelCopy>
                My recent work spans products where users are completing real tasks,
                not just browsing. That has made me strong at building workflow-heavy
                systems that still feel guided and understandable.
              </PanelCopy>
              <BulletList>
                <li>Auction and purchasing flows with search, pricing, bidding, and summary states</li>
                <li>Appraisal and condition-report workflows with eligibility, inspection, and submission steps</li>
                <li>Loan payoff and finance-oriented experiences where clarity and trust matter</li>
              </BulletList>
            </PagePanel>

            <PagePanel>
              <PanelEyebrow>How I deliver</PanelEyebrow>
              <PanelTitle>Thoughtful implementation, steady debugging, and scalable UI ownership</PanelTitle>
              <PanelCopy>
                I like thinking through the user journey before building. That helps
                me keep code easier to extend, easier to debug, and easier for teams
                to work with after the first release.
              </PanelCopy>
              <BulletList>
                <li>Comfortable turning complex requirements into simpler product flows</li>
                <li>Strong on debugging, refactoring, and improving messy implementations</li>
                <li>Used to collaborating with backend, QA, and product teams in Agile delivery</li>
              </BulletList>
            </PagePanel>
          </PagePanelGrid>

          <CardSection
            title="Featured Projects"
            subtitle="A quick view of the work that best reflects my product thinking, architecture style, and delivery across finance, inventory, auction, and loan-related systems"
            cardInfoList={featuredProjects}
            borderColor="#117eff"
          />
        </PageStack>
      </PageCanvas>
    </>
  );
};

export default Home;
