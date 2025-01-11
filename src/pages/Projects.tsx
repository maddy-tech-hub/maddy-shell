import React from 'react';
import { RootStateType } from '@src/redux/store';
import { useSelector } from 'react-redux';
const MaddyCardSection = React.lazy(
  () => import('maddy_widget/MaddyCardSection')
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
    <div className="projects-page" style={{ padding: '2.5rem' }}>
      <MaddyCardSection
        title="Independent Solutions"
        subtitle="Independent initiatives and personal contributions"
        cardInfoList={personalProjects}
        borderColor="#ff9800"
      />
      <MaddyCardSection
        title="Professional Projects"
        subtitle="Impactful organizational contributions"
        cardInfoList={professionalProjects}
      />
    </div>
  );
};

export default Projects;
