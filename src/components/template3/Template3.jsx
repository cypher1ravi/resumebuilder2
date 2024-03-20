import React from 'react';
import "./template3.css"; // Importing CSS file for styling
import { useSelector } from 'react-redux'; // Importing useSelector hook from react-redux for accessing Redux state
import { GitHub, LinkedIn } from '@mui/icons-material'; // Importing icons from Material-UI
import { LinearProgress } from '@mui/material'; // Importing LinearProgress component from Material-UI for rendering progress bars

// Template3 functional component
export default function Template3() {
    // Accessing Redux state using useSelector hook
    const personalInfo = useSelector((state) => state.personalInformation);
    const educationInfo = useSelector((state) => state.education.educationList);
    const workInfo = useSelector((state) => state.workDetails.workList);
    const skillsInfo = useSelector((state) => state.keySkills.skillList);
    const profileImage = useSelector((state) => state.profileImg);

    // JSX rendering
    return (
        <div className='tepmlate3'> {/* Root div with className 'tepmlate3' */}
            <div className="resume-main"> {/* Container div for the main resume layout */}
                {/* Left section of the resume */}
                <div className="left-box">
                    <br /><br /> {/* Line breaks for spacing */}
                    <div className="profile3"> {/* Profile image container */}
                        <img src={profileImage.imageSrc} alt='profileImage' /> {/* Rendering profile image */}
                    </div>
                    <div className="content-box"> {/* Container for profile information, skills, and social media links */}
                        <h2>Profile Info</h2> {/* Heading for profile information */}
                        <hr className="hr1" /> {/* Horizontal rule for styling */}
                        <p className="p1">{personalInfo.objective} </p> {/* Rendering profile objective */}
                        <br /> {/* Line break for spacing */}
                        <h2>My Skills:</h2> {/* Heading for skills section */}
                        <hr className="hr1" /> {/* Horizontal rule for styling */}
                        {/* Mapping through skills and rendering each skill with a progress bar */}
                        {skillsInfo.map((s, index) => (
                            <p key={index}>
                                <p className="p2">{s.skill}</p> {/* Rendering skill name */}
                                <LinearProgress variant='determinate' value={s.level} id='progress' color='inherit' /> {/* Rendering progress bar for the skill */}
                            </p>
                        ))}
                        <br /><br /> {/* Line breaks for spacing */}
                        <h2>Follow Me</h2> {/* Heading for social media links */}
                        <hr className="hr1" /> {/* Horizontal rule for styling */}
                        <br /> {/* Line break for spacing */}
                        <div className="col-div-3"><p className="p2"><GitHub /> </p> </div> {/* GitHub icon */}
                        <div className="col-div-7">
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">{personalInfo.github}</a> {/* GitHub link */}
                        </div>
                        <div className="clearfix"></div> {/* Clearing floats */}
                        <div className="col-div-3"><p className="p2"><LinkedIn /> </p></div> {/* LinkedIn icon */}
                        <div className="col-div-7">
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a> {/* LinkedIn link */}
                        </div>
                    </div>
                </div>

                {/* Right section of the resume */}
                <div className="right-box">
                    <h1>
                        {personalInfo.firstName}<br /> {/* Rendering first name */}
                        <span>{personalInfo.lastName}</span> {/* Rendering last name */}
                    </h1>
                    <p className="p3">{personalInfo.title}</p> {/* Rendering job title */}

                    <br /> {/* Line break for spacing */}
                    <h2 className="heading">Work Experience</h2> {/* Heading for work experience section */}
                    <hr className="hr2" /> {/* Horizontal rule for styling */}
                    <br /> {/* Line break for spacing */}
                    {/* Mapping through work experience and rendering each item */}
                    {workInfo.map((w, index) => (
                        <p key={index}>
                            <div className="col-div-4">
                                <p className="p5">{w.startDate} - {w.endDate}</p> {/* Rendering date range */}
                                <span className="span1">{w.company} </span> {/* Rendering company name */}
                            </div>
                            <div className="col-div-8">
                                <p className="p5">{w.position}</p> {/* Rendering position */}
                                <span className="span1">{w.workDesc}</span> {/* Rendering work description */}
                            </div>
                            <div className="clearfix"></div> {/* Clearing floats */}
                            <br /> {/* Line break for spacing */}
                        </p>
                    ))}

                    <h2 className="heading">My Education</h2> {/* Heading for education section */}
                    <hr className="hr2" /> {/* Horizontal rule for styling */}
                    <br /> {/* Line break for spacing */}
                    {/* Mapping through education details and rendering each item */}
                    {educationInfo.map((e, index) => (
                        <div key={index}>
                            <div className="col-div-4">
                                <p className="p5">{e.year}</p> {/* Rendering year */}
                                <span className="span1">{e.institution}</span> {/* Rendering institution */}
                            </div>
                            <div className="col-div-8">
                                <p className="p5">{e.degree}</p> {/* Rendering degree */}
                                <span className="span1"></span>
                            </div>
                            <div className="clearfix"></div> {/* Clearing floats */}
                            <br /> {/* Line break for spacing */}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
