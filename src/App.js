import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import SkillsPage from './components/Skill';
import MyPortfolio from './components/MyPortofolio.js';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
    <div className="container mx-auto">
    <Navbar/>
    <Hero/>
    </div>
    <About/>
    <SkillsPage/>
    <Experience/>
    <MyPortfolio/>
    <Contact/>
    <Footer/>
    
    </>
      
  );
}

export default App;
