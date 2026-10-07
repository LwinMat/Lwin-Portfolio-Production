import React, { useState } from 'react';
import './MobileNav.css';

import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcBusinessContact } from 'react-icons/fc';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";


export const MobileNav = () => {

    const [open, setOpen] = useState(false);

    // handle open
    const handleOpen = () => {
        setOpen(!open);
    }

    // handle menu clicks
    const handleMenuClick = () => {
        setOpen(false);
    }

    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (
                        <AiOutlineMenuFold
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen} />
                    ) : (
                        <IoMenu
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen} />
                    )}

                    <IoMenu size={30} className="mobile-nav-icon" />
                    <span className="mobile-nav-title">My Portfolio App</span>

                </div>
                {open && (
                    <div className="mobile-nav-menu">
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
                                            onClick={handleMenuClick}
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
                                            onClick={handleMenuClick}
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
                                            onClick={handleMenuClick}
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
                                            onClick={handleMenuClick}
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
                                            onClick={handleMenuClick}
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
                                            onClick={handleMenuClick}
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
                                            onClick={handleMenuClick}
                                        >
                                            <FcBusinessContact />
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}


            </div>

        </>
    );
}