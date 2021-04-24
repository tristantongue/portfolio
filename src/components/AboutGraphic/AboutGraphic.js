import React from 'react';
import "./AboutGraphic.css";
import graphic from './singlegraphic.svg';

function AboutGraphic() {
    return (
        <div className="graphicContainerA">
            <img className="graphicImageA" src={graphic}></img>
        </div>
    )
}

export default AboutGraphic