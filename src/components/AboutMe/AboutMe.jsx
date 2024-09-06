import "./AboutMe.scss";

import DataAboutMe from "../../data/AboutMe.json";

import Illustration1 from "../../assets/Pictures/astronaut-1784245_1280.jpg";

import SteamIcon from "../../assets/Hobbies/square-steam-brands-solid.svg"; 
import SportIcon from "../../assets/Hobbies/person-running-solid.svg"; 
import DrawIcon from "../../assets/Hobbies/pencil-solid.svg"; 
import BookIcon from "../../assets/Hobbies/book-solid.svg";

export function AboutMe() {
    return (
        <div className="section" id="aboutMe">

            <div className="about-me">
            <h2>A propos de moi</h2>
            <div className="text-field">
            {DataAboutMe.map((item) => (
            <p key={item.id}>
                {item.text}
            </p>   
            ))}
            </div>

            <h3>Mes Passions</h3>
            <div>
                <img className="passion-block" src={SteamIcon} alt="Play on Steam"/>
                <img className="passion-block" src={SportIcon} alt="Doing Sport" />
                <img className="passion-block" src={DrawIcon} alt="Drawing" />
                <img className="passion-block" src={BookIcon} atl="Read" />
            </div>
            </div>
            <img src={Illustration1} className="section__img" alt="Illustration" />
        </div>
    )
    
}