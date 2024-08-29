import "./First.scss"; 

import photo from "../../assets/astronaut-4106766_1280.jpg"; 

import LinkedInIcon from "../../assets/linkedin-brands-solid_copper.svg"; 
import GitHubIcon from "../../assets/square-github-brands-solid_copper.svg"; 

export function First() {
    return(
        <div className="section">
        <div className="first" id="firstItem">
            <img className="section__img" src={photo} alt="me"/>
            <div className="text-field">
                <h1>Hello World!</h1>
                <h3>Je me présente : je suis Roxane Maria VIDONI.</h3>
                <h2>Je suis <b>Développeuse Web Front-end</b></h2>
                <p style={{textTransform :"uppercase"}}>En recherche de poste actuellement ? <span style={{color:"green", }}>Oui, Alternance</span></p>
                <p><button>Télécharger CV</button></p>
                <button>Contactez-moi</button> <button>GitHub</button> <button>LinkedIn</button>
            </div>
        </div>
    </div>
    )
}