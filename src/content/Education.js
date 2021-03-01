import Widecard from "../components/Widecard";

export default function Education() {
    return(
        <div className="contents education">
            <h1>My Education</h1>
            <br/>
            <Widecard 
             title="Bachelor Events Management" 
             place="University of Derby" 
             from="2018" 
             to="2021"
             description="First Year Modules"
             modules="Event Planning,
             Fundamentals of Event Studies, Customer Service Excellence, Event Design, Marketing and Communication, Introduction to Higher Education and Professional Development for Event Managers "
             description2="Second Year Modules"
             modules2="Event Productions, Management and Leadership, Research Skills, Heritage Management, Outdoor Leadership Adventure"
             description3="Third Year Modules"
             modules3="Consumer Behaviour, Crisis Communication and Reputation Management, Event Management Badge of Excellence, Event Tourism, Strategic Management, Independent Study"
            />
            <Widecard 
             title="Software Developer" 
             place="Purple Beard LTD" 
             from="2021" 
             to=" 2021"
             description="Three months Apprenticeship of Software Development, giving to all the students skills in HTML, CSS, React, JavaScript and WordPress. During the course, 
             students presented a small project and a full personalized portfolio, including their skills, education and how to be contacted."             
            />
            <Widecard 
             title="Professional Tourism Technician" 
             place="Professional Profitecla School" 
             from="2015" 
             to=" 2018"
             description="Three years of Tourism Education, with volunteering in several events in Porto City, such as ComicCon and Porto Marathons. Final Project for the conclusion of the course was the creation of a 
             business, and the execution in a real life scenario."             
            />
        </div>
    );
};
