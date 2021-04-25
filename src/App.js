import { React, useState, useRef, useEffect } from 'react';
import './App.css';

import StickyBar from './components/StickyBar/StickyBar.js';
import LandingPage from "./components/LandingPage/LandingPage.js";
import AboutPage from "./components/AboutPage/AboutPage.js";
import MenuPage from "./components/MenuPage/MenuPage.js";
import WorkPage from "./components/WorkPage/WorkPage.js";
import ContactPage from "./components/ContactPage/ContactPage.js";



function App() {
  const [menu, setMenu] = useState(false)
  const [home, setHome] = useState(false)
  const [about, setAbout] = useState(false)
  const [work, setWork] = useState(false)
  const [contact, setContact] = useState(false)
  
  let landingref = useRef(null)
  let aboutref = useRef(null)
  let workref = useRef(null)
  let contactref = useRef(null)

  useEffect(() => {
    if (home) {
      landingref.scrollIntoView({ behavior: 'auto' });
      setHome(false)
    }
  }, [home]);

  useEffect(() => {
    if (about) {
      aboutref.scrollIntoView({ behavior: 'auto' });
      setAbout(false)
    }
  }, [about]);

  useEffect(() => {
    if (work) {
      workref.scrollIntoView({ behavior: 'auto' });
      setWork(false)
    }
  }, [work]);

  useEffect(() => {
    if (contact) {
      contactref.scrollIntoView({ behavior: 'auto' });
      setContact(false)
    }
  }, [contact]);

  function goingHome() {
    setMenu(false);
    setHome(true);
  }

  function goingAbout() {
    setMenu(false);
    setAbout(true);
  }

  function goingWork() {
    setMenu(false);
    setWork(true);
  }

  function goingContact() {
    setMenu(false);
    setContact(true);
  }

  function changeMenu() {
    setMenu(menu => !menu);
  }

  function turnOffMenu() {
    setMenu(false);
  }


  return (
    <div className="mother">
      <StickyBar menuclick={changeMenu} logoclick={turnOffMenu} workmarker={workref}></StickyBar>
      {menu && 
       <MenuPage homeclick={goingHome} aboutclick={goingAbout} workclick={goingWork} contactclick={goingContact}></MenuPage> }
      {!menu && 
      <div className="mother"> 
      <div ref={el => {landingref=el}}><LandingPage></LandingPage></div>
      <div ref={ab => {aboutref=ab}}><AboutPage></AboutPage></div>
      <div className="workMarker" ref={wo => {workref=wo}}><WorkPage></WorkPage></div>
      <div className="contactMarker" ref={co => {contactref = co}}><ContactPage
            serviceid={process.env.REACT_APP_SERVICE_ID}
            templateid={process.env.REACT_APP_TEMPLATE_ID}
            userid={process.env.REACT_APP_USER_ID}>
          </ContactPage></div>
      </div>}
    </div>
  );
}

export default App;
