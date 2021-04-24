import React from 'react';
import "./LandingGraphic.css";
import graphic from './singlegraphic.svg';


function LandingGraphic() {
    return (
        <div className="graphicContainer">
            <img className="graphicImage" src={graphic}></img>
        </div>
    )
}

export default LandingGraphic