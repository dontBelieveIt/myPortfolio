import "./ToggleMenu.scss"; 

import { useState } from "react";
import { Timeline } from "../Timeline/Timeline";

import openMenu from "../../assets/Others/bars-solid.svg"; 
import closeMenu from "../../assets/Others/xmark-solid.svg";

export function ToggleMenu() {

    const [toggle, setToggle] = useState(false);

    return(
        <>
            <div className="toggle-btn `${toggle ? 'none' : 'active'}`" onClick={(event) => {event.preventDefault()
                setToggle(!toggle)}}>
                    {toggle ? <img src={closeMenu} alt="Close the menu"/> : <img src={openMenu} alt="Open the menu"/>}
            </div>
            {toggle ? <Timeline /> : null}
        </>
    )
}