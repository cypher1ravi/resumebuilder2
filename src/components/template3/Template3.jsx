import React from 'react'
import "./template3.css"
import { useSelector } from 'react-redux';
import { GitHub, LinkedIn, } from '@mui/icons-material';
import { LinearProgress } from '@mui/material';
export default function Template3() {
    const personalInfo = useSelector((state) => state.personalInformation);
    const educationInfo = useSelector((state) => state.education.educationList);
    const workInfo = useSelector((state) => state.workDetails.workList);
    const skillsInfo = useSelector((state) => state.keySkills.skillList);
    const profileImage = useSelector((state) => state.profileImg)
    return (
        <div className='tepmlate3'>
            <div className="resume-main">
                <div className="left-box">
                    <br></br><br></br>
                    <div className="profile3">
                        <img src={profileImage.imageSrc} alt='profileImage' />
                    </div>
                    <div className="content-box">
                        <h2>Profile Info</h2>
                        <hr className="hr1" />
                        <p className="p1">{personalInfo.objective} </p>
                        <br />
                        <h2>My Skills:</h2>
                        <hr className="hr1" />
                        {skillsInfo.map((s, index) => (
                            <p key={index}>
                                <p className="p2">{s.skill}</p>
                                <LinearProgress variant='determinate' value={s.level} id='progress' color='inherit' />
                            </p>
                        ))}
                        <br /><br />
                        <h2>Follow Me</h2>
                        <hr className="hr1" />
                        <br />
                        <div className="col-div-3"><p className="p2"><GitHub /> </p> </div>
                        <div className="col-div-7">
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">{personalInfo.github}</a>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-div-3"><p className="p2"><LinkedIn /> </p></div>
                        <div className="col-div-7">
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a>
                        </div>


                    </div>
                </div>

                <div className="right-box">
                    <h1>
                        {personalInfo.firstName}<br />
                        <span>{personalInfo.lastName}</span>
                    </h1>
                    <p className="p3">{personalInfo.title}</p>

                    <br />
                    <h2 className="heading">Work Experience</h2>
                    <hr className="hr2" />
                    <br />
                    {workInfo.map((w, index) => (
                        <p key={index}>
                            <div className="col-div-4">
                                <p className="p5">{w.startDate} - {w.endDate}</p>
                                <span className="span1">{w.company} </span>
                            </div>
                            <div className="col-div-8">
                                <p className="p5">{w.position}</p>
                                <span className="span1">{w.workDesc}</span>
                            </div>
                            <div className="clearfix"></div>
                            <br />
                        </p>
                    ))}


                    <h2 className="heading">My Education</h2>
                    <hr className="hr2" />
                    <br />
                    {educationInfo.map((e, index) => (
                        <div key={index}>

                            <div className="col-div-4">
                                <p className="p5">{e.year}</p>
                                <span className="span1">{e.institution}</span>
                            </div>
                            <div className="col-div-8">
                                <p className="p5">{e.degree}</p>
                                <span className="span1"></span>
                            </div>
                            <div className="clearfix"></div>
                            <br />
                        </div>
                    ))}


                </div>

            </div>
        </div >
    )
}
