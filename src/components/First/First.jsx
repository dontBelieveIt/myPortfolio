import "./First.scss"; 

import { Disponibilite } from "../Disponibilite/Disponibilite";

import photo from "../../assets/Pictures/astronaut-4106766_1280.jpg"; 
import LinkedinIcon from "../../assets/linkedin-brands-solid_pink.svg";
import GitHubIcon from "../../assets/square-github-brands-solid_pink.svg";

export function First() {

    return(
        <div className="section" id="first-section">
            <div className="first" id="firstItem">
                <h1 className="first-mobile">Hello World!</h1>
                <img className="section__img" src={photo} alt="me"/>
                
                <div className="first__container">
                    <div className="text-field">
                        <h1 className="first-desktop">Hello World!</h1>
                        <h3>Je me présente : je suis Roxane Maria VIDONI.</h3>
                        <h2>Je suis <b>Développeuse Web Front-end</b></h2>
                        <Disponibilite 
                        poste="Developpeur d'application JavaScript React"/>
                    </div>
                

                    <div className="first__btn-container">
                        <button id="downloadCV"><a href={require("../../assets/Pictures/astronaut-1784245_1280.jpg")} download="myFile"><span class="material-symbols-outlined">download</span> Télécharger CV</a></button>

                        <div className="first__btn-container__items">
                            <a href="#contact-section">
                                <button>
                                    <span class="material-symbols-outlined">mail</span> Contactez-moi
                                </button>
                            </a>

                            <a href="https://github.com/dontBelieveIt/" target="_blank">
                                <button>
                                    <img src={GitHubIcon} alt="GitHub" /> GitHub
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/in/roxane-9849892b5088023454049824/" target="_blank">
                                <button>
                                    <img src={LinkedinIcon} alt="LinkendIn" /> LinkedIn
                                </button>
                            </a>
                            
                        </div>

                    </div>
                </div>

            </div>
    </div>
    )
}