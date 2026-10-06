import React from 'react';
import './Techstack.css';
import RubberBand from 'react-reveal/RubberBand';
import Flip from 'react-reveal/Flip';
import { TechstackList } from '../../utils/TechstackList';


export const Techstack = () => {
    return (
        <>
            <div className="container techstack" id="techstack">
                <RubberBand>
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Technologies Stack</h2>
                    <hr />
                    <p className="pb-3 text-center">
                        👉 Programming languages, frameworks, databases, front-end, back-end, and APIs
                    </p>
                </RubberBand>

                <div className="row">
                    {TechstackList.map((tech) => (
                        <Flip left>
                            <div key={tech.id} className="col-md-3">
                                <div className="card m-2">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="media d-flex justify-content-center">
                                                <div className="alig-self-center">
                                                    <tech.icon className="tech-icon" />
                                                </div>
                                                <div className="media-body">
                                                    <h5>{tech.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                    ))}
                </div>
            </div>
        </>
    )
}