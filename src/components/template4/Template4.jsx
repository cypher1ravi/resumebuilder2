import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LaptopCodeIcon from '@mui/icons-material/Laptop';
import { useSelector } from 'react-redux';

import "./template4.css";

// Template4 functional component
export default function Template4() {
    // Redux state selectors
    const educationInfo = useSelector((state) => state.education.educationList);
    const workInfo = useSelector((state) => state.workDetails.workList);
    const personalInfo = useSelector((state) => state.personalInformation);
    const skillsInfo = useSelector((state) => state.keySkills.skillList);
    const profileImage = useSelector((state) => state.profileImg);

    // JSX rendering
    return (
        <div className='template4'>
            <div className="wrapper">
                <div className="intro">
                    {/* Profile information section */}
                    <div className="profile2">
                        <div className="photo">
                            <img alt="Chih-Hsiang Chen" src={profileImage.imageSrc} />
                        </div>
                        <div className="bio">
                            <h1 className="name">{personalInfo.firstName} {personalInfo.lastName}</h1>
                            <p className="profession">{personalInfo.title}</p>
                        </div>
                    </div>
                    {/* Introduction and contact section */}
                    <div className="intro-section about">
                        <h1 className="title">about me</h1>
                        <p className="paragraph">
                            {personalInfo.objective}
                        </p>
                    </div>
                    <div className="intro-section contact">
                        <h1 className="title">Contact</h1>
                        <div className="info-section">
                            <i><PhoneIcon /></i>
                            <span>{personalInfo.phone}</span>
                        </div>
                        <div className="info-section">
                            <i><LocationOnIcon /></i>
                            <span>{personalInfo.address}</span>
                        </div>
                        <div className="info-section">
                            <i> <EmailIcon /></i>
                            <span>{personalInfo.email}</span>
                        </div>
                    </div>
                    {/* Social media follow section */}
                    <div className="intro-section follow">
                        <h1 className="title">Follow</h1>
                        <div className="info-section link">
                            <i><GitHubIcon /></i>
                            <a href="http://github.com" target="_blank" rel="noopener noreferrer"><span>Github</span></a>
                        </div>
                        <div className="info-section link">
                            <i><LinkedInIcon /></i>
                            <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><span>Linkedin</span></a>
                        </div>
                    </div>
                </div>
                {/* Detailed information section */}
                <div className="detail">
                    {/* Education timeline section */}
                    <div className="detail-section edu">
                        <div className="detail-title">
                            <i><SchoolIcon /></i>
                            <span>Education</span>
                        </div>
                        <div className="detail-content">
                            {educationInfo.map((edu, index) => (
                                <div className="timeline-block" key={index}>
                                    <h1>{edu.degree}</h1>
                                    <p>{edu.institution}</p>
                                    <time>{edu.year}</time>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Work experience timeline section */}
                    <div className="detail-section work">
                        <div className="detail-title">
                            <i><WorkIcon /></i>
                            <span>Work Experience</span>
                        </div>
                        <div className="detail-content">
                            {workInfo.map((w, index) => (
                                <div className="timeline-block" key={index}>
                                    <h1>{w.position}</h1>
                                    <h5>{w.company}</h5>
                                    <time>{w.startDate}-{w.endDate}</time>
                                    <p>{w.workDesc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Skills section */}
                    <div className="detail-section skills">
                        <div className="detail-title">
                            <i><LaptopCodeIcon /></i>
                            <span>Skills</span>
                        </div>
                        <div className="detail-content">
                            <ul className="skill-list">
                                {skillsInfo.map((s, index) => (
                                    <li key={index}>
                                        <span>{s.skill}</span>
                                        <div className="skill-bar">
                                            <div className="skill-progress" style={{ width: `${s.level}%` }}></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
