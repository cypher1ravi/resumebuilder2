import React from 'react';
import { useSelector } from 'react-redux'; // Importing useSelector hook from react-redux for accessing Redux state
import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    Phone as PhoneIcon,
    LocationOn as LocationOnIcon,
    Mail as MailIcon,
} from '@mui/icons-material'; // Importing icons from Material-UI
import './template1.css'; // Importing CSS file for styling

// Template1 functional component
const Template1 = () => {
    // Accessing Redux state using useSelector hook
    const personalInfo = useSelector((state) => state.personalInformation);
    const educationInfo = useSelector((state) => state.education.educationList);
    const workInfo = useSelector((state) => state.workDetails.workList);
    const skillsInfo = useSelector((state) => state.keySkills.skillList);
    const profileImage = useSelector((state) => state.profileImg);

    // JSX rendering
    return (
        <div className="container">
            <main className="main-content">
                {/* Left section */}
                <section className="left-section">
                    <div className="left-content">
                        {/* Profile section */}
                        <div className="profile1">
                            <div className="image1">
                                {/* Rendering profile image */}
                                <img src={profileImage.imageSrc} alt="" />
                            </div>
                            {/* Rendering name and job title */}
                            <h3 className="name">{personalInfo.firstName} {personalInfo.lastName}</h3>
                            <div className="career">{personalInfo.title}</div>
                        </div>
                        {/* Contact information section */}
                        <div className="contact-info">
                            <h3 className="main-title">Contact Info</h3>
                            <ul>
                                {/* Rendering contact information */}
                                <li><i><LocationOnIcon /></i>{personalInfo.address}</li>
                                <li><i><PhoneIcon /></i>{personalInfo.phone}</li>
                                <li><i><MailIcon /></i>{personalInfo.email}</li>
                            </ul>
                        </div>
                        {/* Skills section */}
                        <div className="skills-section">
                            <h3 className="main-title">Skills</h3>
                            <ul>
                                {/* Mapping through skills information and rendering each item */}
                                {skillsInfo.map((s, index) => (
                                    <li key={index}>
                                        <p className="skill-title">{s.skill}</p>
                                        {/* Rendering progress bar for each skill */}
                                        <div className="progress-bar">
                                            <div className="progress" style={{ width: `${s.level}%` }}></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Follow section */}
                        <div className="contact-info">
                            <h3 className="main-title">Follow On</h3>
                            <ul>
                                {/* Rendering links to Github and LinkedIn profiles */}
                                <li><i><GitHubIcon /></i><a href={personalInfo.github} target="_blank" rel="noopener noreferrer">Github</a></li>
                                <li><i><LinkedInIcon /></i><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* Right section */}
                <section className="right-section">
                    <div className="right-main-content">
                        {/* About Me section */}
                        <section className="about sect">
                            <h2 className="right-title">About Me</h2>
                            {/* Rendering personal objective */}
                            <p className="para">{personalInfo.objective}</p>
                        </section>
                        {/* Experience section */}
                        <section className="experince sect">
                            <h2 className="right-title">Experience</h2>
                            {/* Mapping through work experience information and rendering each item */}
                            {workInfo.map((w, index) => (
                                <div className="timeline" key={index}>
                                    <div className="left-tl-content">
                                        <h5 className="tl-title">{w.company}</h5>
                                        <p className="para">{w.startDate}-{w.endDate}</p>
                                    </div>
                                    <div className="right-tl-content">
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">{w.position}</h5>
                                            <p className="para">{w.workDesc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                        {/* Education section */}
                        <section className="education sect">
                            <h2 className="right-title">Education</h2>
                            {/* Mapping through education information and rendering each item */}
                            {educationInfo.map((e, index) => (
                                <div className="timeline" key={index}>
                                    <div className="left-tl-content">
                                        <h5 className="tl-title">{e.institute}</h5>
                                        <p className="para">{e.year}</p>
                                    </div>
                                    <div className="right-tl-content">
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">{e.subject}</h5>
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
