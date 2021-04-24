import { React } from 'react';
import './StickyBar.css';
import HeaderLogo from './HeaderLogo/HeaderLogo.js';
import Menu from './Menu/Menu.js';



function StickyBar(props) {
    return (
        <div id="sticky">
            <HeaderLogo gotclicked = {props.logoclick}></HeaderLogo>
            <Menu gotclicked = {props.menuclick}></Menu>
        </div>
    )
}

export default StickyBar