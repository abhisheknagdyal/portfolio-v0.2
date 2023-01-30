import { useEffect, useState } from "react";
import "./About.css"

const About = ( ) =>{
    const [loaded, setloaded] = useState(false);

    useEffect(()=>{
        setloaded(true);
    },[]);

    return(
        <div className="about-container">
            <div className="face-container">
                <div className="face"></div>
                <div className={loaded ? "back" : "stay-back"}></div>
            </div>
            <div className="about-disc overlay">
                <h1>Hey, I am <br/> Abhishek Choudhary</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ullam voluptatum excepturi consequatur dicta doloribus aspernatur molestiae doloremque consequuntur hic quia delectus culpa facere provident ipsum ad, sit expedita nisi</p>
                <div className="contact-icons">
                    <a href="https://github.com/abhisheknagdyal"target={"_blank"}>
                        <div className="icon-holder">
                            <i class="fa-brands fa-github"></i>
                        </div>
                    </a> 
                    <a href="https://www.linkedin.com/in/abhishek-choudhary-100677234/" target="_blank">
                        <div className="icon-holder">
                        <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </a> 
                </div>
            </div>    
        </div>
    );
};

export default About;