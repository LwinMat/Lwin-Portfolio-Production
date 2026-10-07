import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Lwin-Resume.pdf'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

import { motion } from 'framer-motion';

import './home.css'

const Home = () => {
    const [theme, setTheme] = useTheme();
    // handle theme
    const handleTheme = () => {
        setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
    }
    return (
        <>
            <div className="container-fluid home-container" id="home">
                <div className="theme-btn" onClick={handleTheme}>
                    {theme === 'light' ? (
                        <BsFillMoonStarsFill size={30} />
                    ) : (<MdSunny size={30} />)}
                </div>
                <div className="container home-content">

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                    >

                        <h2>Hi 👋, I'm a</h2>

                        <h1>
                            <Typewriter
                                options={{
                                    strings: ["Software Developer",
                                        "Full Stack Developer",
                                        "MERN Stack Developer",
                                        "React Native Developer",
                                        "Python Programmer",
                                        "JavaScript Programmer"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="home-buttons">
                            {/* <button className="btn btn-hire">Hire Me</button> */}
                            {/* <a className="btn btn-hire"
                                href="#contact"
                                rel="noreferrer"
                                target="_blank"
                            >Hire Me</a> */}
                            <a className="btn btn-cv" href={Resume} download="Lwin_Mateo.pdf">My Resume</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Home;
