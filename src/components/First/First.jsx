import "./First.scss"; 

import { Disponibilite } from "../Disponibilite/Disponibilite";

import photoWelcome from "../../assets/Pictures/astronaut-1784245_1280.jpg";
// import CV from "../../assets/Others/CV_DevWeb_RoxaneVIDONI.pdf";
import LinkedinIcon from "../../assets/linkedin-brands-solid_pink.svg";
import GitHubIcon from "../../assets/square-github-brands-solid_pink.svg";

export function First() {

    return(
        <div className="section" id="first-section">
            <h1 className="first-mobile">Hello World!</h1>
            <div className="section__img">
                <img className="photo-me" src={photoWelcome} alt="me"/>
            </div>
                
            <div className="section__text">

                <div className="text-field">
                    <h1 className="first-desktop">Hello World!</h1>
                    <h3>Je me présente : je suis Roxane.</h3>
                    <h2>Je suis <b className="neonText">Développeuse Web Front-end</b></h2>
                    <Disponibilite 
                    poste="Developpeur d'application JavaScript React"/>
                </div>

                <div className="section__container" id="btn-container">
                    <div className="first__btn">
                        <button id="downloadCV"><a href={require("../../assets/Others/CV_DevWeb_RoxaneVIDONI.pdf")} download="CV_DevWeb_Roxane"><span class="material-symbols-outlined">download</span> Télécharger CV</a></button>
                    </div>

                    <div className="first__btn">
                        <a href="#contact-section">
                            <button>
                                <span class="material-symbols-outlined">mail</span> Contactez-moi
                            </button>
                        </a>

                        <a href="https://github.com/dontBelieveIt/" target="_blank" rel="noreferrer">
                            <button>
                                <img src={GitHubIcon} alt="GitHub" /> GitHub
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/roxane-9849892b5088023454049824/" target="_blank" rel="noreferrer">
                            <button>
                                <img src={LinkedinIcon} alt="LinkendIn" /> LinkedIn
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}