import React from 'react';
import { educationList } from '../../utils/education';

import './Education.css';


import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';

import RubberBand from 'react-reveal/RubberBand';
import Zoom from 'react-reveal/Zoom';


export const Education = () => {
    return (
        <>
            <div className="container education">
                <RubberBand>
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                        Education
                    </h2>
                    <hr />
                </RubberBand>

                {/* display education list in one column vertically using cards the educationList has an attribute _id make sure it fits in the screen without scrolling side ways*/}
                <div className="row">
                    {/* {educationList.map((edu) => (
                        <div key={edu._id} className="col-12 mb-3">
                            <div className="card p-3">
                                <h3>{edu.school}</h3>
                                <p>{edu.degree}</p>
                                <p>{edu.start} - {edu.end}</p>
                                {edu.details && (
                                    <ul>
                                        {edu.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))} */}

                    <Timeline position="alternate">
                        {educationList.map((edu) => (
                            <Zoom>
                                <TimelineItem key={edu._id} className="timeline-item">
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary" id="timeline-duration"
                                        >
                                            {edu.start} - {edu.end}
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" className="timeline-dot">
                                            {edu.e_icon}
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant="h4" component="span" className="timeline-school">
                                            {edu.school}
                                        </Typography>
                                        <Typography variant="h6" className="timeline-degree">{edu.degree}</Typography>
                                        {edu.details && (
                                            <ul>
                                                {edu.details.map((detail, index) => (
                                                    <li key={index} className="timeline-detail">{detail}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </TimelineContent>
                                </TimelineItem>
                            </Zoom>
                        ))}
                    </Timeline>
                </div>
            </div>
        </>
    );
}