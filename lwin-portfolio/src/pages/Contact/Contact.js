import React from 'react'
import './Contact.css'
import contactImage from '../../assets/images/contact.png';

import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';

import { toast } from 'react-toastify';

import axios from 'axios';

export const Contact = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        try {
            if (!name || !email || !message) {
                toast.error("Please fill in all fields.");
                return;
            }

            const res = await axios.post('/api/v1/portfolio/sendEmail', {
                name,
                email,
                message
            });

            // validation
            if (res.data.success) {
                toast.success(res.data.message);
                setName('');
                setEmail('');
                setMessage('');
            }
            else {
                toast.error(res.data.message);
            }
        }
        catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <div className="container contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <LightSpeed>
                                        <img src={contactImage}
                                            alt="Contact"
                                            className="image" />
                                    </LightSpeed>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <Rotate>

                                <div className="card2 d-flex card border-0 px-4 py-3">
                                    <div className="row">
                                        <div className="row">
                                            <h5>
                                                Connect With
                                                <BsLinkedin color="blue" size={30} className="ms-2" onClick={() => window.open('https://www.linkedin.com/in/lwin-mateo-lopez-89334425b/', '_blank')} />
                                                <ImGithub color="black" size={30} className="ms-2" onClick={() => window.open('https://github.com/LwinMat', '_blank')} />
                                            </h5>
                                        </div>

                                        <div className="row px-3 mb-4">
                                            <div className="line" />
                                            <small className="or text-center">OR</small>
                                            <div className="line" />
                                        </div>

                                        <div className="row px-3">
                                            <input
                                                type="text"
                                                name="name"
                                                className="mb-3"
                                                placeholder="Write you Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>

                                        <div className="row px-3">
                                            <input
                                                type="email"
                                                name="email"
                                                className="mb-3"
                                                placeholder="Enter your Email Address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="row px-3">
                                            <textarea
                                                type="text"
                                                name="msg"
                                                className="mb-3"
                                                placeholder="Write your message"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </div>

                                        <div className="row px-3">
                                            <button className="button" onClick={handleSubmit}>
                                                SEND MESSAGE</button>
                                        </div>


                                    </div>

                                </div>
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

