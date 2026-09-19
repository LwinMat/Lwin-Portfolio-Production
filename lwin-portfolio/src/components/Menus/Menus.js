import React from 'react';
import './Menus.css';
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcBusinessContact } from 'react-icons/fc';
import ProfilePic from '../../assets/images/LwinPhoto3.jpg';

import Zoom from 'react-reveal/Zoom';

import * as motion from "motion/react-client";

import { Link } from 'react-scroll';



const Menus = ({ toggle }) => {
    return (
        <>


            {toggle ? (
                <>

                    <Zoom>
                        <div className="navbar-profile-pic">
                            <img
                                src={ProfilePic}
                                alt="Profile Pic"
                            />
                        </div>
                    </Zoom>


                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                    >

                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to="home"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                        <FcHome />
                                        Home
                                    </Link>

                                </div>
                                <div className="nav-link">
                                    <Link to="about"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                        <FcAbout />
                                        About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="work-experience"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                        <FcPortraitMode />
                                        Work Experience
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="techstack"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                        <FcBiotech />
                                        Tech Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="education"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                        <FcReadingEbook />
                                        Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="projects"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                        <FcVideoProjector />
                                        Projects
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link to="contact"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={-100}
                                    >
                                        <FcBusinessContact />
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            ) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="home"
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}
                                >
                                    <FcHome title="Home" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}
                                >
                                    <FcAbout title="About" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="work-experience"
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}
                                >
                                    <FcPortraitMode title="Work Experience" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="techstack"
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}
                                >
                                    <FcBiotech title="Tech Stack" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="education"
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}
                                >
                                    <FcReadingEbook title="Education" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="projects"
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}
                                >
                                    <FcVideoProjector title="Projects" />
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to="contact"
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}
                                >
                                    <FcBusinessContact title="Contact" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}



        </>
    )
}

export default Menus;
