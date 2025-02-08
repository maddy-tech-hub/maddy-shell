export interface cardInfo {
  title: string;
  subTitle?: string;
  details?: string[];
  duration?: string;
  linkTitle?: string;
  url?: string;
  type?: string;
}

export interface RouteConfig {
  path: string;
  label: string;
  Component: React.LazyExoticComponent<React.FC>;
}

// Define initial state
/*const initialState: { projects: cardInfo[] } = {
  projects: [
    {
      title: 'HCC Turn In Migration',
      details: [
        'Developed vehicle remarketing tools using ReactJS and Spring for Hyundai and Kia.',
        'Refactored a monolithic application into microservices using ReactJS, SCSS, and Spring.',
        'Created XML templates, implemented the service layer, and converted XML to JSON.',
      ],
      duration: 'Aug. 2021 to Feb. 2022',
      type: 'professional',
    },
    {
      title: 'HCC/TCCI/MBC Demo Program',
      details: [
        'Developed a demo program for Hyundai, Lexus, Toyota and Mercedes Benz vehicles.',
        'Created seeding scripts, launched vehicles to new states, and validated prices.',
        'Ensured compliance with the complete vehicle lifecycle.',
      ],
      duration: 'Mar. 2022 to Aug. 2022',
      type: 'professional',
    },
    {
      title: 'Bid Buy Migration',
      details: [
        'Developed a generic vehicle purchasing tool in responsive design.',
        'Created reusable UI components like Vehicle Summary Prices and Transport Options.',
        'Integrated user selections with APIs to process auction vehicle purchases.',
      ],
      duration: 'Sep. 2022 to Apr. 2023',
      type: 'professional',
    },
    {
      title: 'Search 2.0 Migration',
      details: [
        'Developed a generic vehicle filter tool with a responsive design.',
        'Created reusable components like Filter Modal and Saved Search Modal.',
        'Implemented functionality for filtering vehicles and saving searches.',
      ],
      duration: 'May. 2023 to Dec. 2023',
      type: 'professional',
    },
    {
      title: 'Chase Seller Removed Vehicles',
      details: [
        'Implemented a feature to automatically remove vehicles meeting seller removal conditions.',
        'Stored audit information for tracking purposes.',
      ],
      duration: 'Jan. 2024 to Mar. 2024',
      type: 'professional',
    },
    {
      title: 'HCC Loan Pay Off',
      details: [
        'Developed a Loan Pay Off tool using ASP.NET framework.',
        'Created APIs to fetch loan details, payment method fees, and process loan payoff requests.',
      ],
      duration: 'Apr. 2024 to Oct. 2024',
      type: 'professional',
    },
    {
      title: 'Retail IMS Project',
      details: [
        'Developing a Retail Inventory Management System (IMS) to streamline retail inventory processes.',
        'Building secure APIs and responsive interfaces using React and ASP.NET.',
      ],
      duration: 'Nov. 2023 to Present',
      type: 'professional',
    },
    {
      title: 'IRASAH Training Institute',
      details: [
        'A static React app featuring services, contact forms, and responsive design.',
      ],
      url: 'https://irasah.com',
      duration: 'Completed: 2024',
      type: 'personal',
    },
    {
      title: 'Account Management API',
      details: [
        'Developed RESTful APIs for user authentication, product management, and notifications.',
      ],
      url: 'https://maddyhub.onrender.com/index.html',
      duration: 'Hosted: 2024',
      type: 'personal',
    },
  ],
};
*/
