import { FaSchool } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";

export const educationList = [
    {
        _id: 1,
        e_icon: <FaUniversity style={{ color: "white", flex: 1, marginTop: "3px" }} size={45} />,
        school: "University of Texas - Austin Texas, USA",
        degree: "Professional Certificate in Generative AI and Agents for Software Development",
        start: "May 2026",
        end: "September 2026",
        details: [
            "Coursework: Generative AI, Agents, Prompt Engineering, LLMs, LangChain",
            "Assignments: ThreadHive application, DevAnswer application",
        ]
    },
    {
        _id: 2,
        // set the size icon big
        e_icon: <FaSchool style={{ color: "white", flex: 1, marginTop: "2px" }} size={45} />,
        school: "Seneca Polytechnic - Canada",
        degree: "Honours Bachelor of Technology - Software Development",
        start: "January 2021",
        end: "August 2025",
        details: [
            "Coursework: C++, Python, Web Programming, Databases, Cloud",
            "Capstone Project: MERN full-stack web app",
        ]
    },
    
];