import "./Skills.css";

const Skills = () =>{
    return(
        <div className="outter-container">
            <div className="skill-container">
                <div className="skill-title">
                    <p>SKILLS</p>
                </div>
                <div className="skill-icons">
                    <i class="fa-brands fa-square-js skill-icon javascript"></i>
                    <i class="fa-brands fa-react skill-icon react"></i>
                    <i class="fa-brands fa-html5 skill-icon html"></i>
                    <i class="fa-brands fa-css3-alt skill-icon css"></i>
                </div>
            </div>
        </div>
    );
}

export default Skills;