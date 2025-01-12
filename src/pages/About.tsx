import React from "react";
import '../styles/css/About.scss';
import { skills } from "@src/Services/about";
const MaddyCardSection = React.lazy(
  () => import('maddy_widget/MaddyCardSection')
);
const About: React.FC = () => {
  return (
    <div className="about-container">
      <section className="intro">
        <h1>About Me</h1>
        <p>
          I am a passionate Full Stack Developer with over 4 years of experience in designing,
          developing, and deploying scalable web applications and RESTful APIs. My expertise
          spans front-end technologies like ReactJS and TypeScript, along with back-end solutions
          using ASP.NET Core and PostgreSQL. I specialize in building user-friendly interfaces and
          cloud-based architectures to deliver robust solutions.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li><strong>Front-End:</strong> ReactJS, TypeScript, Redux, Styled-components, CSS Grid, Flexbox</li>
          <li><strong>Back-End:</strong> ASP.NET Core, C#, RESTful APIs, Entity Framework</li>
          <li><strong>Databases:</strong> PostgreSQL, MySQL, Oracle</li>
          <li><strong>Cloud:</strong> AWS (RDS, S3), Azure</li>
          <li><strong>CI/CD:</strong> Azure Pipelines, Jenkins</li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>
          <strong>B.Tech in Computer Science and Engineering</strong><br />
          RISE Krishna Sai Prakasam Group Institutions<br />
          GPA: 7.73/10.0<br />
          <em>Coursework:</em> Data Analytics, Web Development, Algorithms, Database Management Systems
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Developer</h3>
          <p>
            Amiti Software Technologies Pvt. Ltd., Bengaluru<br />
            <em>June 2021 – Present</em>
          </p>
          <ul>
            <li>Developed reusable UI components using ReactJS and TypeScript.</li>
            <li>Designed and integrated REST APIs with ASP.NET Core.</li>
            <li>Built responsive layouts using CSS Grid and Flexbox.</li>
            <li>Contributed to code reviews and improved team coding standards.</li>
          </ul>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <h3>Professional Projects</h3>
        <ul>
          <li><strong>Retail IMS:</strong> Developed inventory management system using React and ASP.NET.</li>
          <li><strong>HCC Loan Pay Off:</strong> Built APIs for loan payoff tools using ASP.NET Core.</li>
        </ul>
        <h3>Independent Projects</h3>
        <ul>
          <li><strong>IRASAH:</strong> React-based front-end for a training institute with Email.js integration.</li>
          <li><strong>Account Management API:</strong> Developed ASP.NET APIs for authentication and user management.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
