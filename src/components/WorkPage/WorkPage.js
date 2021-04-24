import React, { useRef, useEffect } from 'react';
import './WorkPage.css';

// import Logo from '../Logo/Logo.js';
import WorkCard from './WorkCard/WorkCard.js'
import { gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function WorkPage() {
    let workchunk = useRef(null)
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(workchunk,
            {
                opacity: 0,
                x: '-150%',
            }, {
                opacity: 1,
                x: '0%',
                duration: 1,
                delay: .5,
                scrollTrigger: {
                trigger : workchunk,
                start: "top 75%",
                end: "middle 75%",
                scrub: 1,
            }
            })
    }, [])

    return (
        <div id="workContainer">
            {/* <div className="centralLogoA"><Logo></Logo></div> */}
            <div ref={el => {workchunk=el}} className="workHeader">
                <h2>PROJECTS</h2>
                <WorkCard
                    title={"My Portfolio Website"}
                    caption={"A fully responsive single page React application that harnesses GSAP and React Hooks for event and scroll triggered animations. Includes custom animated SVG."}
                    link={<a href="https://github.com/tristantongue/portfolio/tree/master/src">VIEW REPOSITORY</a>}>
                    
                </WorkCard>
                <WorkCard
                    title={"Kickstart Coding"}
                    caption={"An intensive full-stack web development bootcamp covering HTML/CSS fundamentals, Django, PostgreSQL, and React. Developed and deployed multiple web apps as unit projects. "}
                    link={"CASE STUDY"}
                ></WorkCard>
            </div>
        </div>
    )
}

export default WorkPage