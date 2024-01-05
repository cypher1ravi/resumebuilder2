import React from 'react'
import "./template3.css"
import { useSelector } from 'react-redux';
export default function Template3() {
    // const skillsInfo = useSelector((state) => state.keySkills.skillList);
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
                        <p className="p1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                        <h3>Language:</h3>
                        <p className="p2">English</p>
                        <div id="progress"></div>
                        <p className="p2">Hindi</p>
                        <div id="progress1"></div>

                        <br /><br />
                        <h2>My Skills</h2>
                        <hr className="hr1" />
                        <br />
                        <div className="col-div-6"><p className="p2">HTML</p></div>
                        <div className="col-div-6">
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle1"></i>
                            <i className="fa fa-circle circle1"></i>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-div-6"><p className="p2">CSS</p></div>
                        <div className="col-div-6">
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle1"></i>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-div-6"><p className="p2">JQUERY</p></div>
                        <div className="col-div-6">
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle1"></i>
                            <i className="fa fa-circle circle1"></i>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-div-6"><p className="p2">JAVASCRIPT</p></div>
                        <div className="col-div-6">
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle"></i>
                            <i className="fa fa-circle circle1"></i>
                            <i className="fa fa-circle circle1"></i>
                            <i className="fa fa-circle circle1"></i>
                        </div>

                        <div className="clearfix"></div>
                        <br />
                        <h2>interests</h2>
                        <hr className="hr1" />
                        <br />
                        <div className="col-div-3 col3">
                            <i className="fa fa-futbol-o in"></i>
                            <span className="inp">Sports</span>
                        </div>
                        <div className="col-div-3 col3">
                            <i className="fa fa-futbol-o in"></i>
                            <span className="inp">Drive</span>
                        </div>
                        <div className="col-div-3 col3">
                            <i className="fa fa-futbol-o in"></i>
                            <span className="inp">Sports</span>
                        </div>
                        <div className="col-div-3 col3">
                            <i className="fa fa-futbol-o in"></i>
                            <span className="inp">Sports</span>
                        </div>
                    </div>
                </div>

                <div className="right-box">
                    <h1>
                        Devesh<br />
                        <span>Rai</span>
                    </h1>
                    <p className="p3">UI & UX DESIGNER</p>

                    <br />
                    <h2 className="heading">Work Experience</h2>
                    <hr className="hr2" />
                    <br />
                    <div className="col-div-4">
                        <p className="p5">2015-2016</p>
                        <span className="span1">Company Name</span>
                    </div>
                    <div className="col-div-8">
                        <p className="p5">Web Designer</p>
                        <span className="span1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <div className="clearfix"></div>
                    <br />
                    <div className="col-div-4">
                        <p className="p5">2015-2016</p>
                        <span className="span1">Company Name</span>
                    </div>
                    <div className="col-div-8">
                        <p className="p5">Web Designer</p>
                        <span className="span1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <div className="clearfix"></div>
                    <br />
                    <div className="col-div-4">
                        <p className="p5">2015-2016</p>
                        <span className="span1">Company Name</span>
                    </div>
                    <div className="col-div-8">
                        <p className="p5">Web Designer</p>
                        <span className="span1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <div className="clearfix"></div>

                    <br />
                    <h2 className="heading">My Education</h2>
                    <hr className="hr2" />
                    <br />
                    <div className="col-div-4">
                        <p className="p5">2015-2016</p>
                        <span className="span1">Company Name</span>
                    </div>
                    <div className="col-div-8">
                        <p className="p5">Web Designer</p>
                        <span className="span1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <div className="clearfix"></div>
                    <br />
                    <div className="col-div-4">
                        <p className="p5">2015-2016</p>
                        <span className="span1">Company Name</span>
                    </div>
                    <div className="col-div-8">
                        <p className="p5">Web Designer</p>
                        <span className="span1">Lorem Ipsum is simply dummy text of the .</span>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>

            </div>
        </div>
    )
}
