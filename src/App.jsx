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
      imageUrl1:"../images/quote-gen.png",
      projectName:"Quote Genrator",
      link:"https://quotegenerator22.netlify.app",
      descirption:"Quote genrator using API with Twitter post Share functionality",
    },

    {
      id:2,
      imageUrl1:"../images/infinite.png",
      projectName:"Infinte Loader",
      link:"https://infinteloader22.netlify.app",
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
