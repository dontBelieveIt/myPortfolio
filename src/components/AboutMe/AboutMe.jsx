import "./AboutMe.scss";

import DataAboutMe from "../../data/AboutMe.json";

import { Cards } from "../Cards/Cards";
 
import photoMe from "../../assets/Pictures/photoMe.png";
// import Illustration1 from "../../assets/Pictures/astronaut-1784245_1280.jpg";

import SteamIcon from "../../assets/Hobbies/square-steam-brands-solid.svg"; 
import SportIcon from "../../assets/Hobbies/person-running-solid.svg"; 
import DrawIcon from "../../assets/Hobbies/pencil-solid.svg"; 
import BookIcon from "../../assets/Hobbies/book-solid.svg";

export function AboutMe() {
    return (
        <div className="section" id="aboutMe">
           
            <div className="section__img">
                <img src={photoMe} alt="Me" oncontextmenu="return false" />
            </div>

            <div className="section__text">
                
                <div className="section__container">
                    <h2>A propos de moi</h2>
                    <div className="text-field">
                        {DataAboutMe.map((item) => (
                        <p key={item.id}>
                            {item.FR}
                        </p>   
                        ))}
                    </div>
                </div>

                <div className="section__container">
                    <h3>Mes Passions</h3>
                    <div id="cards-container">
                        <Cards 
                            src={SteamIcon}
                            alt={null}
                            title={"Jeux vidéos"}   
                            description={"Enigme, Aventure..."}
                        />

                        <Cards 
                            src={SportIcon}
                            alt={null}
                            title={"Faire du sport"}   
                            description={"Jogging, exercice quotidien."}
                        />

                        <Cards 
                            src={DrawIcon}
                            alt={null}
                            title={"Dessiner"}   
                            description={"Je fais un peu de dessin digital."}
                        />

                        <Cards 
                            src={BookIcon}
                            alt={null}
                            title={"Lire"}   
                            description={"Thriller, Fantaisie, Classique..."}
                        />
                    </div>
                </div>
            </div>
        
        </div>   
    )
    
}