import React, {useRef, useEffect} from 'react';
import './AboutPage.css';

import graphic from './singlegraphic.svg';
import { gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



function AboutPage() {
    let abouticon = useRef(null)
    let aboutblurb = useRef(null)
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: abouticon,
                start: "bottom bottom",
                end: "bottom 100px",
                scrub: 1,
                // markers: true,
                },
        });
        tl.fromTo(abouticon, {
                opacity: 0,
            }, {
                opacity: 1,
            })
        tl.to(abouticon, {
            opacity: 0,
            })
    }, [])

    useEffect(() => {
        gsap.fromTo(aboutblurb,
            {
                opacity: 0,
                y: 20,
            }, {
                opacity: 1,
                y: 0,
                duration: 2,
                delay: 2,
                scrollTrigger: {
                trigger : aboutblurb,
                start: "top bottom",
                end: "middle 100px",
                scrub: 1,
                // markers: true,
            }
            })
    }, [])

    return (
        <div id="aboutContainer">
            <div ref={el => {aboutblurb=el}} className="blurbContainer">
            <h2>- ABOUT -</h2>
            <p>Hi, I'm Tristan. I build websites using tools like React, HTML/CSS, and GSAP.
                <br></br>I believe in using modern, minamalist designs
            to create a smooth, engaging, and accessible user experience.
                <br></br>My web development journey started in 2019 when I first used WordPress at a non-profit I was working at.
                <br></br>Since then, I've worked with languages such as Python, SQL, and JavaScript. 
                <br></br>I'm always trying to become a better developer through discovering ways to optimize my code and improve my eye for design.
                <br></br></p>
    
            </div>
            <img ref={el => {abouticon=el}} className="graphicImage-about" src={graphic} alt="cube"></img>
        </div>
    )
}

export default AboutPage