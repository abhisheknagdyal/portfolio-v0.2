import "./Skills.css";
import mongo from "./mongodb.svg";

const Skills = () =>{
    return(
        <div className="outter-container">
            <div className="skill-container">
                <div className="skill-title">
                    <p>TECH STACK</p>
                </div>
                <div className="skill-icons">
                    <i class="fa-brands fa-square-js skill-icon javascript" title="Javascript"></i>
                    <i class="fa-brands fa-react skill-icon react" title="React js"></i>
                    <i class="fa-brands fa-html5 skill-icon html" title="Html 5"></i>
                    <i class="fa-brands fa-css3-alt skill-icon css" title="Css 3"></i>
                    <i class="fa-brands fa-node-js  skill-icon node" title="Node js"></i>
                    {/* <i class="fa-brands fa-node skill-icon node"></i> */}
                    <img src = {mongo}  className="skill-icon node"  title="mongo db" alt="mongodv"/>
                </div>
            </div>
        </div>
    );
}

export default Skills;