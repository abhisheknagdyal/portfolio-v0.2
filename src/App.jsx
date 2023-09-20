import './App.css';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import ProjectContainer from './component/ProjectContainer/ProjectConatiner';
import Skills from './component/Skills/Skills'

function App() {
  const projects = [
    {
      id:1,
      imageUrl1:"../images/crwn.png",
      projectName:"Shop-it",
      link:"https://shopi-it.netlify.app",
      descirption:"Ecommerce website with User authentication and Cart Using React, Redux and FireBase",
    },
    {
      id:2,
      imageUrl1:"../images/workout.png",
      projectName:"let's Workout",
      link: null,
      descirption:"A MERN stack application with authneticatoin using JWT and mongodb. All CRDU operations and with error handling",
    },
    {
      id:3,
      imageUrl1:"../images/monster.png",
      projectName:"Monster Cards",
      link:"https://monsters-cards.netlify.app",
      descirption:"Search functionality using React and Fetching data from external API",
    },
    {
      id:5,
      imageUrl1:"../images/quote-gen.png",
      projectName:"Quote Genrator",
      link:"https://quotegenerator22.netlify.app",
      descirption:"Quote genrator using API with Twitter post Share functionality",
    },
    {
      id:6,
      imageUrl1:"../images/musicplay.png",
      projectName:"Music Player",
      link:"https://1music-player.netlify.app",
      descirption:"music player with localstorage music ",
    },
    {
      id:7,
      imageUrl1:"../images/bookmark.png",
      projectName:"Bookmark Keeper",
      link:"https://bookmarckeeper.netlify.app",
      descirption:"Bookmark Keeper with local Storage",
    },
    {
      id:8,
      imageUrl1:"../images/infinite.png",
      projectName:"Infinte Loader",
      link:"https://infinityloader.netlify.app",
      descirption:"Infinite image loader with Unsplash API",
    },

  ]

  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <ProjectContainer projects = {projects}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
