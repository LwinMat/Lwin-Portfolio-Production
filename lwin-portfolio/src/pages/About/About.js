import React from 'react'
import './About.css'
import ProfilePic from '../../assets/images/LwinPhoto3.jpg';

// import * as motion from "motion/react-client";

import Jump from 'react-reveal/Jump';


export const About = () => {
    return (
        <>
            {/*  make the section appear in jump using motion */}
            <Jump>
                <div className="about" id="about">
                    <div className="row">
                        <div className="col-md-6 co-xl-6 col-lg-6 col-xs-12 about-img">
                            <img src={ProfilePic} alt="Profile Pic" />
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About Me</h1>
                            <p>My name is Lwin Mateo Lopez. I graduated from Seneca Polytechnic with a Bachelor's Degree in Software Development.
                                I chose to study software development because I wanted to learn and experiment with the logic and creativity involved in programming.
                                I wanted to learn how web application and mobile application were developed.
                                <br /> <br />
                                Through my school projects and internships, I learned to work with various web
                                development technologies including JavaScript, React, Node.js, Express,
                                MongoDB, HTML5, and CSS3. I am passionate about building web
                                applications and continuously learning new technologies to enhance my skills.
                                <br /> <br />
                                I also have a professional certificate in Generative AI and Agents for Software Development, where I learned to 
                                integrating Artificial Intelligence into web applications, where it is not only fixing any errors but to use AI tools in workflow stages.
                                <br/> <br/>
                                As for programming languages, I am proficient in JavaScript and Python. I enjoy
                                problem-solving and collaborating with others to create innovative solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    )
}
