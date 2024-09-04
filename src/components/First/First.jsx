import "./First.scss"; 

import photo from "../../assets/Pictures/astronaut-4106766_1280.jpg"; 

export function First() {
    return(
        <div className="section" id="first-section">
        <div className="first" id="firstItem">
            <img className="section__img" src={photo} alt="me"/>
            <div className="text-field">
                <h1>Hello World!</h1>
                <h3>Je me présente : je suis Roxane Maria VIDONI.</h3>
                <h2>Je suis <b>Développeuse Web Front-end</b></h2>
                <p style={{textTransform :"uppercase"}}>En recherche de poste actuellement ? <span style={{color:"green", }}>Oui, Alternance <span style={{color: "#657d83"}}>[Développeur d'Application JavaScript React]</span></span></p>
            </div>
            </div>

        <div className="firs-btn__container">
            <p><button><a href={require("../../assets/Pictures/astronaut-1784245_1280.jpg")} download="myFile"><span class="material-symbols-outlined">download</span> Télécharger CV</a></button></p>
            <button>Contactez-moi</button> <a href="https://github.com/dontBelieveIt/" target="_blank"><button>GitHub</button></a> <a href="https://www.linkedin.com/in/roxane-9849892b5088023454049824/" target="_blank"><button>LinkedIn</button></a>
        </div>
    </div>
    )
}