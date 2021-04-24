import React, {useRef, useEffect} from 'react';
import './LandingPage.css';
import Logo from '../Logo/Logo.js';
import IntroText from './IntroText/IntroText.js';
import graphic from './singlegraphic.svg';
import { gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function LandingPage() {
    let landingicon = useRef(null)
    gsap.registerPlugin(ScrollTrigger);
    

    useEffect(() => {
        gsap.fromTo(
            landingicon,
            {
                scale: 0,
            },
            {
                scale: 1,
                duration: 1,
                ease: "ease",
                delay: 2.7,
            }
        )
        gsap.to(landingicon, {
            scrollTrigger: {
            trigger: landingicon,
            start: "center center",
            end: "top 100px",
            scrub: 2,
            // pin: true,
            // markers: true,
            },
            opacity: 0
        })
    }, [])

    return (
        <div id="landingContainer">      
            <div className="centralLogo"><Logo></Logo></div>
            <IntroText></IntroText>
            <div className="graphicContainer">
            <img ref={el => {landingicon=el}} className="graphicImage" src={graphic} alt="cube"></img>
            </div>
        </div>
    )
}

export default LandingPage