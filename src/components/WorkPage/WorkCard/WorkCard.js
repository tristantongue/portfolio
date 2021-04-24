import React from 'react';
import './WorkCard.css';

function WorkCard(props) {
    return (
        <div className="card">
            <div className="cardHead">
                <p>{props.title}</p>
            </div>
            <div className="cardBody">
                <p>{props.caption}
                </p>
            </div>
            <div className="cardLink">
                <p>{props.link}</p>
            </div>
        </div>
    )
}

export default WorkCard