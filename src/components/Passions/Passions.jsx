import "./Passions.scss"; 

import { useState } from "react";

import SteamIcon from "../../assets/square-steam-brands-solid.svg"; 
import SportIcon from "../../assets/person-running-solid.svg"; 
import DrawIcon from "../../assets/pencil-solid.svg"; 
import BookIcon from "../../assets/book-solid.svg";

export function Passions() {

        const [hover, setHover] = useState(false);
        
        const onHover = () => {
          setHover(true);
        };
      
        const onLeave = () => {
          setHover(false);
        };

    return(
        <div className="section-black">
            <h2>Mes Passions</h2>
            <div className="passion-block">
                <img src={SteamIcon} alt="Play on Steam"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                { ...hover ?  null : "J'aime jouer à des jeux steam sur mon PC."}
                 />
                <img src={SportIcon} alt="Doing Sport" />
                <img src={DrawIcon} alt="Drawing" />
                <img src={BookIcon} atl="Read" />
            </div>
        </div>
    )
    
}