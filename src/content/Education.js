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