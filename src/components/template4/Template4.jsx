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

export default function Template4() {
    const educationInfo = useSelector((state) => state.education.educationList);
    const workInfo = useSelector((state) => state.workDetails.workList);
    const personalInfo = useSelector((state) => state.personalInformation);
    const skillsInfo = useSelector((state) => state.keySkills.skillList);
    const profileImage = useSelector((state) => state.profileImg)



    return (
        <div className='template4'>
            <div className="wrapper">
                <div className="intro">
                    <div className="profile2">
                        <div className="photo">
                            <img alt="Chih-Hsiang Chen" src={profileImage.imageSrc} />
                        </div>
                        <div className="bio">
                            <h1 className="name">{personalInfo.firstName} {personalInfo.lastName}</h1>
                            <p className="profession">{personalInfo.title}</p>
                        </div>
                    </div>
                    <div className="intro-section about">
                        <h1 className="title">about me</h1>
                        <p className="paragraph">
                            {personalInfo.objective}</p>
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
                <div className="detail">
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
                        <div className="detail-section edu">
                            <div className="detail-title">
                                <i> <WorkIcon /></i>
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
                    </div>
                    <div className="detail-section pg-skill">
                        <div className="detail-title">
                            <i><LaptopCodeIcon /></i>
                            <span> skills</span>
                        </div>
                        <div className="detail-content">
                            <ul className="pg-list">
                                {skillsInfo.map((s, index) => (
                                    <li key={index}>
                                        <span>{s.skill}</span>
                                        <div className="sb-skeleton">
                                            <div className="skillbar" style={{ "--pgbar-length": `${s.level}%` }}></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    {/* <div className="detail-section tool-skill">
                        <div className="detail-title">
                            <ConstructionIcon />
                            <span>Development Tools</span>
                        </div>
                        <div className="detail-content">
                            <ul className="tool-list">
                                <li>
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle className="cbar" cx="50" cy="50" r="45" style={{ "--percent": "0.6" }}></circle>
                                    </svg>
                                    <span className="tl-name">Photoshop</span>
                                    <span className="tl-exp">60%</span>
                                </li>
                                <li>
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle className="cbar" cx="50" cy="50" r="45" style={{ "--percent": "0.8" }}></circle>
                                    </svg>
                                    <span className="tl-name">Sublime</span>
                                    <span className="tl-exp">80%</span>
                                </li>
                                <li>
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle className="cbar" cx="50" cy="50" r="45" style={{ "--percent": "0.7" }}></circle>
                                    </svg>
                                    <span className="tl-name">Git</span>
                                    <span className="tl-exp">70%</span>
                                </li>
                                <li>
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle className="cbar" cx="50" cy="50" r="45" style={{ "--percent": "0.74" }}></circle>
                                    </svg>
                                    <span className="tl-name">NPM</span>
                                    <span className="tl-exp">74%</span>
                                </li>
                            </ul>
                        </div>
                    </div> */}

                </div>
            </div>
        </div >
    );
}
