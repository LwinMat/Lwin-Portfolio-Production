import React from 'react';
import './Projects.css';

import appLogo from '../../assets/images/NEAR_Logo.png';
import PortfolioImage from '../../assets/images/ePortfolio.png';
import devAnswerImage from '../../assets/images/favicon-32x32.png';
import RubberBand from 'react-reveal/RubberBand';
import Spin from 'react-reveal/Spin';

import vid1 from '../../assets/videos/sample1.mp4';
import vid2 from '../../assets/videos/sample2.mp4';
import { FaRegPlayCircle } from "react-icons/fa";


export const Projects = () => {
    return (
        <>
            <div className="container project" id="projects">
                <RubberBand>
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                        Projects
                    </h2>
                    <hr />
                    <p className="pb-3 text-center">
                        Here are some of my projects I have only done during my years in college. However, the best project that appealed to me was based on mobile application.
                        Where I applied the knowledge to the Seneca Hackathon 2024.
                    </p>
                </RubberBand>

                {/* card design */}
                <div className="row" id="ads">
                    <Spin>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Mobile Application</span>
                                    <img src={appLogo} alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">React Native</span>
                                    <span className="card-detail-badge">iOS/Android</span>
                                    <span className="card-detail-badge">JavaScript</span>
                                    <span className="card-detail-badge">Firebase</span>
                                    <span className="card-detail-badge">EXPO</span>
                                </div>
                                <div className="card-body">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">NEAR App</h5>
                                    </div>
                                    {/* <a className="ad-btn" href="https://github.com/LwinMat/SEAN">View</a> */}
                                {/* links to open videos from the src/assets/videos*/}
                                    
                                </div>

                                <div className="button-Links">
                                    <a className="btn btn-primary" onClick={() => window.open(vid1, '_blank')}><FaRegPlayCircle/> Video 1</a>
                                    <a className="btn btn-primary" onClick={() => window.open(vid2, '_blank')}><FaRegPlayCircle/> Video 2</a>
                                </div>
                                

                                
                            </div>
                        </div>

                        
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">MERN Stack</span>
                                    <img src={PortfolioImage} alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">React JS</span>
                                    <span className="card-detail-badge">Express JS</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                    <span className="card-detail-badge">Node JS</span>
                                </div>
                                <div className="card-body">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Electronic Portfolio</h5>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">AI application</span>
                                    <img src={devAnswerImage} alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">React JS</span>
                                    <span className="card-detail-badge">Express JS</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                    <span className="card-detail-badge">Node JS</span>
                                    <span className="card-detail-badge">Claude Code</span>
                                    <span className="card-detail-badge">GitHub Copilot</span>
                                    <span className="card-detail-badge">OpenAI</span>
                                </div>
                                <div className="card-body">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">DevAnswer App</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </Spin>
                </div>
            </div>
        </>
    );
};