import React from 'react';
import './MenuPage.css';
import MenuBars from "./MenuBars/MenuBars.js";

function MenuPage(props) {

    return (
        <div className="menuPageContainer">
           <MenuBars gotclicked={props.homeclick} aboutclicked={props.aboutclick} workclicked={props.workclick} contactclicked={props.contactclick}></MenuBars>
             <div className="firstColor"></div>
            <div className="secondColor"></div>
            <div className="thirdColor"></div>
        </div>
    )
}

export default MenuPage