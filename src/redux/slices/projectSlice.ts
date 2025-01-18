import { createSlice } from '@reduxjs/toolkit';
import { cardInfo } from '@src/interfaces/common';

const initialState: { projects: cardInfo[] } = {
  projects: [
    {
      title: "React Micro-Frontend (MFE) Portfolio",
      subTitle: "Personal Project",
      details: [
        " Developed a comprehensive React-based Micro-Frontend (MFE) portfolio.",
        " Key Repositories: maddy-widgets (UI components), maddy-login (authentication), maddy-shell (main shell).",
        " Features: User login/signup, reusable widgets, and contact forms.",
        " Technologies: ReactJS, Webpack, GitHub Actions, AWS S3.",
        " Backend API: .NET Core for account management and email services.",
        " CI/CD: Automated deployments with GitHub Actions.",
      ],
      duration: "Duration: 2024",
      linkTitle: "View Project",
      url: "http://maddy-shell.s3-website.ap-south-1.amazonaws.com",
      type: 'personal',
    },
    {
      title: "IRASAH (React Front-End App)",
      subTitle: "Static Training Institute Application",
      details: [
        " Developed a mobile-responsive website for a training institute.",
        " Features: Dynamic pages and email form submissions with Email.js.",
        " Technologies: React, Email.js.",
        " Deployment: Publicly hosted on irasah.com.",
      ],
      duration: "Duration: 2023",
      linkTitle: "View Project",
      url: "https://www.irasah.com",
      type: 'personal',
    },
    {
      title: "Vehicle Auction Platform",
      subTitle: "Project for Automotive Financial Companies",
      details: [
        " Objective: Enabled advanced vehicle search with customizable filters and saved searches.",
        " Backend: Developed REST APIs in .NET Core for dynamic filtering and user preferences.",
        " Frontend: Created reusable ReactJS components for search filters and modals.",
        " Improved bidding and purchasing workflows with support for direct purchases, autobids, and warranties.",
        " Technologies: ReactJS, Redux, CSS Grid, .NET Core, Entity Framework, PostgreSQL, AWS RDS.",
      ],
      type: 'professional',
    },
    {
      title: "HCC Loan Payoff Platform",
      subTitle: "Loan Management for Hyundai Capital Canada",
      details: [
        " Objective: Enabled users to view loan details, calculate fees, and submit payoff requests.",
        " Backend: Built REST APIs for loan details, payment fees, and payoff requests.",
        " Frontend: Designed a responsive interface with dynamic loan breakdown and seamless transaction flows.",
        " Technologies: ReactJS, Redux, CSS Grid, .NET Core, Entity Framework, PostgreSQL, AWS RDS.",
      ],
      type: 'professional',
    },
  ]
};
// Create the slice
const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const { index, updatedProject } = action.payload;
      state.projects[index] = updatedProject;
    },
    removeProject: (state, action) => {
      const index = action.payload;
      state.projects.splice(index, 1);
    },
  },
});

// Export the actions
export const { addProject, updateProject, removeProject } =
  projectSlice.actions;

// Export the reducer
export default projectSlice.reducer;
