import React from 'react';
import { useSelector } from 'react-redux'; // Importing useSelector hook from react-redux for accessing Redux state
import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    Phone as PhoneIcon,
    LocationOn as LocationOnIcon,
    WorkOutline as WorkOutlinedIcon,
    Mail as MailIcon,
    Description as DescriptionIcon,
    Language as LanguageIcon,
    HandymanOutlined as HandymanOutlinedIcon,
    SchoolOutlined as SchoolOutlinedIcon
} from '@mui/icons-material'; // Importing icons from Material-UI
import {
    Typography,
    LinearProgress,
} from '@mui/material'; // Importing Typography and LinearProgress components from Material-UI
import './template2.css'; // Importing CSS file for styling

// Template2 functional component
export default function Template2() {
    // Accessing Redux state using useSelector hook
    const educationInfo = useSelector((state) => state.education.educationList);
    const workInfo = useSelector((state) => state.workDetails.workList);
    const personalInfo = useSelector((state) => state.personalInformation);
    const skillsInfo = useSelector((state) => state.keySkills.skillList);

    // JSX rendering
    return (
        <div className="sheet ">
            <div className="two-column resume">
                {/* Resume header section */}
                <section className="resume__section resume__header">
                    <div className="resume__content">
                        <div>
                            {/* Rendering first name and last name */}
                            <Typography variant="h1">{personalInfo.firstName} {personalInfo.lastName}</Typography>
                            {/* Rendering job title */}
                            <Typography marginLeft={4} variant="h2">{personalInfo.title}</Typography>
                        </div>
                        {/* Contact information */}
                        <div className="info-item">
                            <span className="info-label"><i><LocationOnIcon fontSize='smaller' /></i></span>
                            <span className="info-text">{personalInfo.address}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label"><i><MailIcon fontSize='smaller' /></i></span>
                            <span className="info-text">{personalInfo.email}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label"><i><PhoneIcon fontSize='smaller' /></i></span>
                            <span className="info-text">{personalInfo.phone}</span>
                        </div>
                    </div>
                </section>
                <div className="resume__columns">
                    <div className="resume__main">
                        {/* Professional Summary section */}
                        <section className="resume__section resume__summary">
                            <div className="resume__content">
                                <div className="resume__section-title">
                                    <i><DescriptionIcon /></i>
                                    <Typography variant="h2">Professional Summary</Typography>
                                </div>
                                <div className="other">
                                    <div className="other-info">
                                        {/* Rendering professional summary */}
                                        <p>{personalInfo.objective}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Education section */}
                        <section className="resume__section resume__experience">
                            <div className="resume__content">
                                <div className="resume__section-title">
                                    <i><SchoolOutlinedIcon /></i>
                                    <Typography variant="h2">Education</Typography>
                                </div>
                                <div className="xp-item">
                                    {/* Mapping through education information and rendering each item */}
                                    {educationInfo.map((e, index) => (
                                        <div key={index}>
                                            <div className="xp-job">{e.degree}<br /><small>{e.institution}</small></div>
                                            <div className="xp-date">{e.year}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        {/* Employment History section */}
                        <section className="resume__section resume__experience">
                            <div className="resume__content">
                                <div className="resume__section-title">
                                    <i><WorkOutlinedIcon /></i>
                                    <Typography variant="h2">Employment History</Typography>
                                </div>
                                <div className="xp-item">
                                    {/* Mapping through work experience information and rendering each item */}
                                    {workInfo.map((w, index) => (
                                        <div key={index}>
                                            <div className="xp-job">{w.position}<span>@{w.company}</span></div>
                                            <div className="xp-date">{w.startDate} – {w.endDate}</div>
                                            <div className="xp-detail">{w.workDesc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="resume__side">
                        {/* Skills section */}
                        <section className="resume__section resume__skills">
                            <div className="resume__content">
                                <div className="resume__section-title">
                                    <i><HandymanOutlinedIcon /></i>
                                    <Typography variant="h2">Skills</Typography>
                                </div>
                                <div className="resume__text">
                                    {/* Mapping through skills information and rendering each item */}
                                    {skillsInfo.map((s, index) => (
                                        <div className="extra" key={index}>
                                            <div className="extra-info"><i>{s.skill}</i><br /></div>
                                            {/* Rendering linear progress bar for each skill */}
                                            <div className="extra-details"><LinearProgress variant="determinate" value={s.level} /></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        {/* Follows section */}
                        <section className="resume__section resume__languages">
                            <div className="resume__content">
                                <div className="resume__section-title">
                                    <i><LanguageIcon /></i>
                                    <Typography variant="h2">Follows</Typography>
                                </div>
                                <div className="info-item">
                                    <span className="info-label"><i><GitHubIcon fontSize='small' /></i></span>
                                    <span className="info-text"><a href={personalInfo.github} target="blank" rel="noopener noreferrer">{personalInfo.github}</a></span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label"><i><LinkedInIcon fontSize='small' /></i></span>
                                    <span className="info-text"><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a></span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
