import "./Timeline.scss"

export function Timeline() {
    return(
        <>
            <div className="container">
                {/* <button id="btn_translate"><span class="material-symbols-outlined">translate</span><span class="material-symbols-outlined">language_gb_english</span><span class="material-symbols-outlined">language_french</span></button>
                <div className="separator"></div> */}

                <div className="separator"></div>
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

