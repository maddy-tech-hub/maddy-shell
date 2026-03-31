import { createSlice } from '@reduxjs/toolkit';
import { cardInfo } from '@src/interfaces/common';

const initialState: { projects: cardInfo[] } = {
  projects: [
    {
      title: 'Finance Tracker Platform',
      subTitle: 'Personal full-stack product',
      summary:
        'A personal product focused on helping users understand spending, track budgets, and build better financial visibility.',
      stack: ['React', 'TypeScript', 'ASP.NET Web API', 'PostgreSQL'],
      details: [
        'Designed a dashboard experience for transactions, savings goals, budget insights, and month-over-month cash-flow visibility.',
        'Built reusable React sections for summaries, category breakdowns, charts, and transaction workflows.',
        'Implemented ASP.NET Web API endpoints for authentication, recurring entries, budgeting rules, and analytics.',
        'Structured the backend with clean service boundaries so the product can grow without becoming hard to maintain.',
      ],
      duration: '2026',
      linkTitle: 'View Live App',
      url: 'https://smartfinancetrack.netlify.app/',
      type: 'personal',
    },
    {
      title: 'React Micro-Frontend Portfolio Platform',
      subTitle: 'Personal architecture and UI system project',
      summary:
        'This portfolio itself, built as a micro-frontend system to separate shell integration, auth flows, and shared UI ownership.',
      stack: ['React', 'Webpack 5', 'Module Federation', 'Styled Components'],
      details: [
        'Split the experience into a shell app, a login app, and a shared widgets app for clearer responsibilities.',
        'Used lazy loading, reusable UI patterns, and runtime remote loading to keep the system modular and easier to evolve.',
        'Improved the structure so the shell handles integration while widgets and auth stay independently maintainable.',
        'Focused on turning a few-years-old project into a cleaner, more scalable portfolio with better UX and code organization.',
      ],
      duration: '2025 - 2026',
      linkTitle: 'View Live Site',
      url: 'https://maddytech.rf.gd/',
      type: 'personal',
    },
    {
      title: 'Vehicle Turn-In & Condition Report Tool',
      subTitle: 'Enterprise inspection and appraisal workflow',
      summary:
        'A multi-step tool for eligibility validation, inspection, damage capture, pricing adjustments, and final submission.',
      stack: ['React', 'TypeScript', 'Redux', 'Axios'],
      details: [
        'Created reusable UI for VIN entry, eligibility validation, inspection categories, review steps, and final submission flows.',
        'Implemented real-time pricing summaries and damage-based adjustments to support accurate condition reporting.',
        'Integrated APIs for eligibility, pricing, submission, and state persistence across long-running user journeys.',
        'Added image upload and workflow navigation that helped users move through the process with less confusion.',
      ],
      duration: '2021 - 2023',
      type: 'professional',
    },
    {
      title: 'HCC Loan Payoff Platform',
      subTitle: 'Loan payoff and request submission workflow',
      summary:
        'A loan payoff experience built to help users review loan details, understand payoff fees, and complete request submissions clearly.',
      stack: ['React', 'ASP.NET Web API', 'REST APIs', 'Responsive UI'],
      details: [
        'Built a clean payoff journey for viewing loan details, fee calculations, and customer request submission states.',
        'Integrated backend APIs for loan data, fee calculation logic, and payoff request processing.',
        'Focused on responsive UX so the information-heavy flow stayed readable and easier for users to complete confidently.',
        'Supported a product experience where clarity and trust mattered as much as technical correctness.',
      ],
      duration: '2024',
      type: 'professional',
    },
    {
      title: 'Vehicle Auction & Purchasing Platform',
      subTitle: 'Enterprise automotive marketplace workflow',
      summary:
        'A high-volume auction and purchasing experience where users search, filter, save, bid, and buy through an end-to-end flow.',
      stack: ['React', 'TypeScript', 'Redux Toolkit', 'ASP.NET Web API'],
      details: [
        'Built advanced filtering, saved-search flows, filter pills, sorting, pagination, and persistent URL-based search state.',
        'Developed reusable UI for item lists, detail views, and multi-step bid or buy journeys with dynamic pricing and add-ons.',
        'Integrated REST APIs for search data, saved searches, real-time workflow state, and purchase summary handling.',
        'Helped make a complex transaction flow feel more guided, responsive, and reliable for end users.',
      ],
      duration: '2024 - 2025',
      type: 'professional',
    },
    {
      title: 'Retail IMS Appraisals Platform',
      subTitle: 'Retail inventory and appraisal workflow system',
      summary:
        'A production platform focused on appraisal, quote, and inventory-related workflows for dealership and seller-facing operations.',
      stack: ['React', 'Redux Toolkit', 'ASP.NET Web API', 'PostgreSQL'],
      details: [
        'Built seller and dealership workflows for appraisals, quote handling, inventory visibility, and auction transition states.',
        'Created reusable React UI for appraisal statuses, quote actions, dealer-side workflow screens, and connected inventory views.',
        'Integrated ASP.NET Web API services supporting communication flows, bid-related behavior, and inventory operations.',
        'Focused on responsive UX and stable data flow across React, Redux Toolkit, and PostgreSQL-backed business workflows.',
      ],
      duration: '2025 - Present',
      type: 'professional',
    },
  ],
};

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

export const { addProject, updateProject, removeProject } =
  projectSlice.actions;

export default projectSlice.reducer;
