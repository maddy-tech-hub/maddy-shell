import React from "react";
import "../styles/css/About.scss";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <section className="intro card">
        <h1>About Me</h1>
        <p>
          I am a passionate <strong>Full Stack Developer</strong> with over 4 years of experience in designing, developing, and deploying scalable web applications and RESTful APIs.
          My expertise spans front-end technologies like <strong>ReactJS</strong> and <strong>TypeScript</strong>, along with back-end solutions using <strong>ASP.NET Core</strong> and <strong>PostgreSQL</strong>.
          I specialize in building user-friendly interfaces and cloud-based architectures to deliver robust solutions.
        </p>
        <Link to="/contact" className="action-link">Get in Touch</Link>
      </section>

      <section className="skills card">
        <h2>Skills</h2>
        <ul>
          <li><strong>Front-End:</strong> ReactJS, TypeScript, Redux, Styled-components, CSS Grid, Flexbox</li>
          <li><strong>Back-End:</strong> ASP.NET Core, C#, RESTful APIs, Entity Framework</li>
          <li><strong>Databases:</strong> PostgreSQL, MySQL, Oracle</li>
          <li><strong>Cloud:</strong> AWS (RDS, S3), Azure</li>
          <li><strong>CI/CD:</strong> Azure Pipelines, Jenkins</li>
        </ul>
        <Link to="/skills" className="action-link">View Skills</Link>
      </section>

      <section className="education card">
        <h2>Education</h2>
        <p>
          <strong>B.Tech in Computer Science and Engineering</strong><br />
          RISE Krishna Sai Prakasam Group Institutions<br />
          GPA: 7.73/10.0<br />
          <em>Coursework:</em> Data Analytics, Web Development, Algorithms, Database Management Systems
        </p>
        <Link to="/education" className="action-link">View Education</Link>
      </section>

      <section className="experience card">
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
          <Link to="/experience" className="action-link">View Experience</Link>
        </div>
      </section>

      <section className="projects card">
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
        <Link to="/projects" className="action-link">View Projects</Link>
      </section>
    </div>
  );
};

export default About;
