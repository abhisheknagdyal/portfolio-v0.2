import "./Project.css"

const Project = ({project}) =>{
    const {imageUrl1, projectName, link, descirption} = project;

    return(
        <div className="outter-conatainer">
            <div className="project-container">
                <div className="project-dics-container">
                    <h2>{projectName}</h2>
                    <p className="project-disc">
                        {descirption}
                    </p>
                    <a href={link} target="_blank" >
                    <div className="link">
                        <p><i class="fa-solid fa-up-right-from-square"></i> View Website</p> 
                    </div>
                    </a> 
                </div>
                <div className="project-image">
                    <div className="image-pc">
                        <img src={imageUrl1} alt="" />
                    </div>
                    {/* <div className="image-mobile">
                        <img src={image2} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Project;
