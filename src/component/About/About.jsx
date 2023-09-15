import { motion } from "framer-motion";
import "./About.css"

const About = ( ) =>{


    return(
        <div className="about-container">
            <div className="face-container">
                <div className="face"></div>
                <motion.div 
                 animate={{x: 30, y:30}}
                 transition={{duration:1}}
                 className="back"></motion.div>
            </div>
            <motion.div className="about-disc overlay">
                <h1>Hey, I am <br/> Abhishek Choudhary</h1>

                <p>I am pursuing my bachelors degree in Computer Science and have a strong passion for web development, I am eager to start my career as a Web developer. I have gained hands-on experience in developing responsive and user-friendly web applications using HTML, CSS, and JavaScript and React. I am a quick learner and am always up for challenges.</p>
                <div className="contact-icons">
                    <a href="https://github.com/abhisheknagdyal" target={"_blank"} rel="noreferrer">
                        <div className="icon-holder">
                            <i class="fa-brands fa-github"></i>
                        </div>
                    </a> 
                    <a href="https://www.linkedin.com/in/abhishek-choudhary-100677234/" target="_blank" rel="noreferrer">
                        <div className="icon-holder">
                        <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </a> 
                </div>
            </motion.div>    
        </div>
    );
};

export default About;