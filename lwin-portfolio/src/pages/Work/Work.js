import React from 'react';

import { workExperienceList } from '../../utils/workExperience';

import './Work.css';

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

export const Work = () => {
    return (
        <>
            <div className="container work" id="work-experience">
                <RubberBand>
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                        Work Experience
                    </h2>
                    <hr />
                </RubberBand>

                {/* display work experience list in one column vertically using cards the educationList has an attribute _id make sure it fits in the screen without scrolling side ways*/}
                <div className="row">
                    {/* {workExperienceList.map((work) => (
                        <div key={work._id} className="col-12 mb-3">
                            <div className="card p-3">
                                <h3>{work.company}</h3>
                                <p>{work.position}</p>
                                <p>{work.start} - {work.end}</p>
                                <ul>
                                    {work.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))} */}

                    <Timeline position="alternate">
                        {workExperienceList.map((work) => (
                            <Zoom>
                                <TimelineItem key={work._id} className="timeline-item">
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary" id="timeline-duration">
                                            {work.start} - {work.end}
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" className="timeline-dot"></TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant="h4" component="span" className="timeline-position">
                                            {work.position}
                                        </Typography>
                                        <Typography variant="h6" className="timeline-company">
                                            {work.company}
                                        </Typography>
                                        <ul>
                                            {work.details.map((detail, index) => (
                                                <li key={index} className="timeline-detail">{detail}</li>
                                            ))}
                                        </ul>
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