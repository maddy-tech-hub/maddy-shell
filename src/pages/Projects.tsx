import React from 'react';
import { RootStateType } from '@src/redux/store';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
const MaddyCardSection = React.lazy(() => import('maddy_mfe/MaddyCardSection'));

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
  const intl = useIntl();
  return (
    <div className="projects-page">
      <MaddyCardSection
        title={intl.formatMessage({ id: 'independentProjectTitle' })}
        subtitle={intl.formatMessage({ id: 'independentProjectSubTitle' })}
        cardInfoList={personalProjects}
        borderColor="#ff9800"
      />
      <MaddyCardSection
        title={intl.formatMessage({ id: 'professionalProjectTitle' })}
        subtitle={intl.formatMessage({ id: 'professionalProjectSubTitle' })}
        cardInfoList={professionalProjects}
      />
    </div>
  );
};

export default Projects;
