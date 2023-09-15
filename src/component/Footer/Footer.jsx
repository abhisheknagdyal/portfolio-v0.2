import "./Footer.css"

function Footer(  ){
    return(
        <div className="footer">
            <a href="cv.pdf" download target={"_blank"}
            className="download" ><button className="download-btn"><i class="fa-solid fa-download"></i>DOWNLOAD CV</button></a>
            <p><i class="fa-regular fa-copyright"></i> 2023 Abhishek Choudhary</p>
        </div>
    );
};

export default Footer;