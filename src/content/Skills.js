import SkillsIcon from "../components/SkillsIcon"

export default function Skills () {
    const myskills= ["HTML", "CSS", "C", "JavaScript", "React", "WordPress"]
    return(
        <div className="contents skills">
            <h1>My Skills</h1>
            <br/>
            <u>
                {myskills.map((skill)=> 
                <li>{skill}</li>)}
            </u>
            <SkillsIcon/>
        </div>
    )
}