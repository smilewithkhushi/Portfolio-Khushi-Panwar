import logo from './logo.svg';
import './App.css';
import './userdata.css';
import React from 'react';
import projectsList from './projectData';
import { Link } from "react-scroll"
import volunteeringList from './volunteeringData';
import VolunteeringListDisplay from './volunteeringDataDisplay';

import educationList from './educationData';
import EducationListDisplay from './EducationDataDisplay';
import TypeWriterEffect from 'react-typewriter-effect';
import experienceList from './experienceData';
import ExperienceListDisplay from './ExperienceDataDisplay';
import ProjectListDisplay from './ProjectDataDisplay';
import certificationData from './certificationData';
import CertificationListDisplay from './certificateDataDisplay';
import ImageGallery from './imagegallery';


function App() {
  const education = educationList.map((eduItem) => {
    console.log("Eduitem value = " + { eduItem });
    return (
      <EducationListDisplay
        key={eduItem.id}
        name={eduItem.name}
        institute={eduItem.institute}
        grade={eduItem.grade}
        year={eduItem.year}
      />
    )
  })

  const experience = experienceList.map((expItem) => {
    console.log("Eduitem value = " + { expItem });
    return (
      <ExperienceListDisplay
        key={expItem.id}
        name={expItem.name}
        organization={expItem.organization}
        tenure={expItem.tenure}
        desc={expItem.desc}
        image={expItem.image}
      />
    )
  })

  const volunteering = volunteeringList.map((volItem) => {
    return (
      <VolunteeringListDisplay
        key={volItem.id}
        name={volItem.name}
        position={volItem.position}
        description={volItem.description}
        image={volItem.image}
      />
    )
  })

  const certification = certificationData.map((certItem) => {
    return (
      <CertificationListDisplay
        key={certItem.id}
        name={certItem.name}
        organization={certItem.organization}
        date={certItem.date}
        image={certItem.image}
      />
    )
  })

  const project = projectsList.map((item) => {
    console.log("Eduitem value = " + { item });
    return (
      <ProjectListDisplay
        key={item.id}
        name={item.name}
        description={item.description}
        tech={item.tech}
        github={item.github}
        image={item.image}
      />
    )
  })

  return (
    <div className="App">
      <video autoPlay loop muted id='video'>
        <source src="media/dynamicbg.mp4" type="video/mp4" />
      </video>


      <div className='app-navbar'>


        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >Contact</Link>

        <Link
          activeClass="active"
          to="certifications"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >Certifications</Link>


        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >Projects</Link>


        <Link
          activeClass="active"
          to="volunteering"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >Volunteering</Link>


        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >Experience</Link>


        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >Education</Link>


        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >About</Link>

      </div>

      <header className="app-header">

        <div className="app-container">
          <h1 className='welcome'>Hi there! I'm Khushi Panwar</h1>
          <h2 className='welcome-2'>

            <TypeWriterEffect
              startDelay={2000}
              cursorColor="#3F3D56"
              loop={true}
              repeat={true}
              nextTextDelay={5000}
              typeSpeed={80}
              multiText={[
                'A Full Stack Developer',
                'A Mentor',
                'A Community Builder',
                'A Content Creator',
                'A Full Stack Developer',
              ]}

            />

          </h2>
        </div>

        <div className='pfp-container'>
          <img src="media/pfp.png" alt="Khushi Panwar" className="pfp" />
        </div>
      </header>
      <br /><br />

      <section className="about" id="about">
        <img src="media/clouds.png" className="clouds" />
        <img src="media/clouds-2.png" className="clouds-2" />
        <center>
          <h2 className='section-heading'>About Me</h2>
            <div className="about-text">
              I'm a third year undergrad pursuing B.Sc (Hons) in Computer Science from Shaheed Rajguru College of Applied Sciences for Women, University of Delhi.
              <br></br>
              I'm a tech enthusiast passionate about learning latest technologies  and to encourage people to dive into the world of innovations.
              I'm skilled with Front End Website & App Development, Data science '(intermediate)' & Cloud Platforms such as GCP, Azure and AWS.
              <br></br>
              I'm a Full Stack Learner, Mentor, Community Builder and a YouTuber. I'm also an Alpha Microsoft Learn Student Ambassador. Being in community, I've organized various events and hackathons. I always look forward to utilize my skills and gain new learning experiences.

            </div>
        </center>
        <br />
        <br />
      </section>

      <br />

      <section className="education" id="education">
        <img src="media/sphere.png" className="sphere-2" />
        <center>
          <h2 className='section-heading'>Education</h2>
          <div className='education-content'>
            {education}
          </div>
        </center>
        <br /><br />
      </section>
      <br />

      <section className="experience" id="experience">

        <img src="media/sphere.png" className="sphere" />
        <img src="media/astro4.png" className="astro-4" />

        <center>
          <h2 className='section-heading'>Experience</h2>
          <div className="experience-content">
            {experience}
          </div>
        </center>

        <img src="media/chain.png" className="diamond" />
        <img src="media/astro3.png" className="astro-3" />
        <br /><br /> </section>
      <br />


      <section className="volunteering" id="volunteer">

        <center>
          <h2 className='section-heading'>Volunteering</h2>
          <div className='volunteer-content'>
            {volunteering}
          </div>
        </center>
        <br /><br />
      </section>

      <br />

      <section className="experience" id="projects">
        <img src="media/astro2.png" className="astro-2" />
        <img src="media/diamond.png" className="spring" />

        <center>
          <h2 className='section-heading'>Projects</h2>
          <div className="project-content">
            {project}
          </div>
        </center>

        <img src="media/spring.png" className="spring" />

        <img src="media/diamond.png" className="diamond" />
        <br /> <br /><br /></section>
      <br />

      <section className="volunteering" id="certifications">
        <center>
          <h2 className='section-heading'>Certifications</h2>
          <div className="certification-content">
            {certification}
          </div>
        </center>
        <br /><br /> </section>
      <br />
      <section className="experience" id="contact">
        <center>

          <img src="media/astro1.png" className="astro1" />
          <h2 className='section-heading'>Contact Me</h2>
          <div class="container">
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <div class="icon">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <h3>
                    <a href="https://www.linkedin.com/in/smilewithkhushi/" target="_blank">smilewithkhushi</a>
                  </h3>
                  <p>This is where I network and build my professional protfolio.</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <div class="icon">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <h3>
                    <a href="https://twitter.com/smilewithkhushi" target="_blank">@SmileWithKhushi</a>
                  </h3>
                  <p>This is where I post random tweets about tech & life</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <div class="icon">
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <h3>
                    <a href="https://github.com/smilewithkhushi" target="_blank">@SmileWithKhushi</a>
                  </h3>
                  <p>This is where I share code and work on projects.</p>
                </div>
              </div>
            </div>
          </div>

        </center>
      </section>



    </div>
  );
}

export default App;
