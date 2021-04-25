import React, {useRef, useEffect} from 'react';
import './HeaderLogo.css'
import { gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function HeaderLogo(props) {
    let firsticon = useRef(null);
    let secondicon = useRef(null);
    useEffect(() => {
        ScrollTrigger.refresh()
        gsap.fromTo(firsticon,
            {
                stroke: '#3CBBB1',
            }, {
                stroke: '#EE4266',
                scrollTrigger: {
                trigger : ".workMarker",
                toggleActions: "restart none reverse pause",
                start: "top center",
                end: "top top",
                scrub: 2,
                duration: 2,
            }
            })
    }, [props.workmarker]);
    useEffect(() => {
        gsap.fromTo(secondicon,
            {
                stroke: '#3CBBB1',
            }, {
                stroke: '#EE4266',
                scrollTrigger: {
                trigger : ".workMarker",
                toggleActions: "restart none reverse pause",
                start: "top center",
                end: "top top",
                scrub: 2,
                duration: 2,
            }
            })
    }, [props.workmarker]);


    return (
        <button className="stickya" onClick={() => { props.gotclicked()}}>
        <svg id="headerLogo" width="194" height="198" viewBox="-5 0 204 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={fi => {firsticon=fi}} d="M47.144 61.776V154.8C47.144 162.48 48.776 167.952 52.04 171.216C55.304 174.288 60.968 175.824 69.032 175.824H88.328V198H64.712C50.12 198 39.176 194.64 31.88 187.92C24.584 181.2 20.936 170.16 20.936 154.8V61.776H0.488007V40.176H20.936V0.431976H47.144V40.176H88.328V61.776H47.144Z" stroke="#3CBBB1" strokeWidth="5"/>
                <path ref={se => {secondicon=se}} d="M152.05 61.776V154.8C152.05 162.48 153.682 167.952 156.946 171.216C160.21 174.288 165.874 175.824 173.938 175.824H193.234V198H169.618C155.026 198 144.082 194.64 136.786 187.92C129.49 181.2 125.842 170.16 125.842 154.8V61.776H105.394V40.176H125.842V0.431976H152.05V40.176H193.234V61.776H152.05Z" stroke="#3CBBB1" strokeWidth="5"/>
        </svg>
        </button>
    )
}


export default HeaderLogo