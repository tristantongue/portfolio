import React from 'react';
import './MenuBars.css';

function MenuBars(props) {
    return (
        <div className="menuBars">
            <ul className="menuList">
                <li><button className="sliderb" onClick={() => { props.gotclicked()}} ><h1>HOME</h1></button></li>
                <li><button className="sliderb" onClick={() => { props.aboutclicked()}} ><h1>ABOUT</h1></button></li>
                <li><button className="sliderb" onClick={() => { props.workclicked()}}><h1>PROJECTS</h1></button></li>
                <li><button className="sliderb" onClick={() => { props.contactclicked()}}><h1>CONTACT</h1></button></li>
            </ul>
        </div>
    )
}

export default MenuBars
