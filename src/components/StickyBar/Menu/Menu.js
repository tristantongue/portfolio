import React, {useEffect} from 'react';
import './Menu.css';
import { gsap} from 'gsap';

function Menu(props) {
    useEffect(() => {
        gsap.fromTo("#burger span",
            {
                backgroundColor: '#3CBBB1',
            }, {
                backgroundColor: '#EE4266',
                scrollTrigger: {
                trigger : ".workMarker",
                //scroller: ".mother",
                start: "top center",
                end: "top top",
                scrub: 3,
                duration: 2,
                delay: 2,
            }
            })
    }, []);
    return (
        <button onClick={props.gotclicked} id="burger">
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
        </button>
    )
}

export default Menu 