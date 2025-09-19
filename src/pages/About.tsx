import React from 'react';
import '../styles/css/About.scss';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <section className="intro card">
        <h1>About Me</h1>
        <p>
          <FormattedMessage
            id="description"
            values={{ b: (chunks) => <strong>{chunks}</strong> }}
          />
        </p>
        <Link to="/contact" className="action-link">
          Get in Touch
        </Link>
      </section>

      <section className="skills card">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Front-End:</strong> ReactJS, TypeScript, Redux,
            Styled-components, CSS Grid, Flexbox
          </li>
          <li>
            <strong>Back-End:</strong> ASP.NET Core, C#, RESTful APIs, Entity
            Framework
          </li>
          <li>
            <strong>Databases:</strong> PostgreSQL, MySQL, Oracle
          </li>
          <li>
            <strong>Cloud:</strong> AWS (RDS, S3), Azure
          </li>
          <li>
            <strong>CI/CD:</strong> Azure Pipelines, Jenkins
          </li>
        </ul>
        <Link to="/skills" className="action-link">
          View Skills
        </Link>
      </section>

      <section className="education card">
        <h2>Education</h2>
        <p>
          <strong>B.Tech in Computer Science and Engineering</strong>
          <br />
          RISE Krishna Sai Prakasam Group Institutions
          <br />
          GPA: 7.73/10.0
          <br />
          <em>Coursework:</em> Data Analytics, Web Development, Algorithms,
          Database Management Systems
        </p>
        <Link to="/education" className="action-link">
          View Education
        </Link>
      </section>

      <section className="experience card">
        <h2>Experience</h2>
        <>
          <h3>Software Developer</h3>
          <p>
            Amiti Software Technologies Pvt. Ltd., Bengaluru
            <br />
            <em>June 2021 – Present</em>
          </p>
          <Link to="/experience" className="action-link">
            View Experience
          </Link>
        </>
      </section>

      <section className="projects card">
        <h2>Projects</h2>
        <h3>Professional Projects</h3>
        <ul>
          <li>
            <strong>Retail IMS Appraisals:</strong> Developed a vehicle appraisal and inventory system for dealerships using ReactJS and .NET Core.
          </li>
          <li>
            <strong>Vehicle Auction Platform:</strong> Built dynamic search and bidding workflows for automotive auctions with ReactJS and .NET Core.
          </li>
          <li>
            <strong>HCC Loan Payoff Platform:</strong> Created APIs and responsive UI for loan management at Hyundai Capital Canada using ASP.NET Core and ReactJS.
          </li>
        </ul>

        <h3>Independent Projects</h3>
        <ul>
          <li>
            <strong>React Micro-Frontend (MFE) Portfolio:</strong> Developed a
            comprehensive React-based MFE portfolio with features like user
            login/signup and reusable widgets.
          </li>
          <li>
            <strong>IRASAH:</strong> Created a responsive React front-end for a
            training institute with email form submissions using Email.js.
          </li>
        </ul>
        <Link to="/projects" className="action-link">
          View Projects
        </Link>
      </section>
    </div>
  );
};

export default About;
