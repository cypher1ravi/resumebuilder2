import React from 'react';
import { useSelector } from 'react-redux';
import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    Phone as PhoneIcon,
    LocationOn as LocationOnIcon,
    Mail as MailIcon,

} from '@mui/icons-material';

import '../css/template1.css';



const Template1 = () => {
    const personalInfo = useSelector((state) => state.personalInformation);
    const educationInfo = useSelector((state) => state.education.educationList);
    const workInfo = useSelector((state) => state.workDetails.workList);
    const skillsInfo = useSelector((state) => state.keySkills.skillList);
    return (<div className="container">


        <main className="main-content">
            <section className="left-section">
                <div className="left-content">
                    <div className="profile">

                        <h2 className="name">{personalInfo.firstName} {personalInfo.lastName}</h2>
                        <p className="career">{personalInfo.title}</p>
                    </div>
                    <div className="contact-info">
                        <h3 className="main-title">Contact Info</h3>
                        <ul>
                            <li>
                                <i ><LocationOnIcon /></i>
                                {personalInfo.address}
                            </li>
                            <li>
                                <i><PhoneIcon /></i>
                                {personalInfo.phone}
                            </li>
                            <li>
                                <i ><MailIcon /></i>
                                {personalInfo.email}
                            </li>
                        </ul>
                    </div>
                    <div className="skills-section">
                        <h3 className="main-title">Skills</h3>
                        <ul>
                            {skillsInfo.map((s, index) => (
                                <li key={index}>
                                    <p className="skill-title">{s.skill}</p>
                                    <div className="progress-bar">
                                        <div className="progress " style={{ width: `${s.level}%` }}></div>
                                    </div>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div class="contact-info">
                        <h3 class="main-title">Follow On</h3>
                        <ul>
                            <li>
                                <i ><GitHubIcon /></i>
                                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">Github</a>
                            </li>
                            <li>
                                <i ><LinkedInIcon /></i>
                                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>

                            </li>
                        </ul>
                    </div>

                </div>
            </section>
            <section className="right-section">
                <div className="right-main-content">
                    <section className="about sect">
                        <h2 className="right-title">About Me</h2>
                        <p className="para">
                            {personalInfo.objective}
                        </p>
                    </section>

                    <section className="experince sect">
                        <h2 className="right-title">Experience</h2>
                        {workInfo.map((w, index) => (
                            <div className="timeline" key={index}>
                                <div className="left-tl-content">
                                    <h5 className="tl-title">{w.company}</h5>
                                    <p className="para">{w.startDate}-{w.endDate}</p>
                                </div>
                                <div className="right-tl-content">
                                    <div className="tl-content">
                                        <h5 className="tl-title-2">{w.position}</h5>
                                        <p className="para">
                                            {w.workDesc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                    <section className="education sect">
                        <h2 className="right-title">education</h2>
                        {educationInfo.map((e, index) => (
                            <div className="timeline" key={index}>
                                <div className="left-tl-content">
                                    <h5 className="tl-title">{e.institute}</h5>
                                    <p className="para">{e.year}</p>
                                </div>
                                <div className="right-tl-content">
                                    <div className="tl-content">
                                        <h5 className="tl-title-2">{e.subject}</h5>
                                        <p className="para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae
                                            voluptatem deleniti,
                                            laboriosam odio nobis quae fugit facilis quo.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        ))}


                    </section>

                </div>
            </section>
        </main>
    </div>
    );
};

export default Template1;