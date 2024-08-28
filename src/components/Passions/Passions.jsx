import "./Passions.scss"; 

import SteamIcon from "../../assets/square-steam-brands-solid.svg"; 
import SportIcon from "../../assets/person-running-solid.svg"; 
import DrawIcon from "../../assets/pencil-solid.svg"; 
import BookIcon from "../../assets/book-solid.svg";

export function Passions() {
    return(
        <div className="section-black">
            <h2>Mes Passions</h2>
            <div className="passion-block">
                <img src={SteamIcon} alt="Play on Steam" />
                <img src={SportIcon} alt="Doing Sport" />
                <img src={DrawIcon} alt="Drawing" />
                <img src={BookIcon} atl="Read" />
            </div>
        </div>
    )
    
}