import "./Timeline.scss"

import { useState } from "react"

export function Timeline() {

    const [toggle, setToggle] = useState(false);

    return(
        <>
            <button id="toggleButton" onClick={(event) => {event.preventDefault()
            setToggle(!toggle)}}>
                <span class="material-symbols-outlined">menu</span>
            </button>
            <div className="container">
                <button><span class="material-symbols-outlined">translate</span><span class="material-symbols-outlined">language_gb_english</span><span class="material-symbols-outlined">language_french</span></button>
                <a href="#first-section"><h4>Qui suis-je ?</h4></a>
                <div className="separator"></div>
                <a href="#language-section"><h4>Langues et Technologies</h4></a>
                <div className="separator"></div>
                <a href="#competence-section"><h4>Compétences</h4></a>
                <div className="separator"></div>
                <a href="#formation-section"><h4>Formations</h4></a>
                <div className="separator"></div>
                <a href="#project-section"><h4>Mes projets</h4></a>
                <div className="separator"></div>
                <a href="#contact-section"><h4>Contactez-moi</h4></a>
                <div className="separator"></div>
            </div>
        </>
    )
}

