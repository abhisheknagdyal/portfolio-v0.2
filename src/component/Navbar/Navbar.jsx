// import { Fragment } from "react";
import "./Navbar.css"
const Navbar = ( ) =>{
    return(
        <div className="nav">
            <div className="logo" style={{color:"white"}}>
                <p>aC.</p>
            </div>
            <div><button className="contact-me">Contact me!</button></div>
        </div>
    );
};

export default Navbar;