import "./Projets.scss";

import { Cards } from "../Cards/Cards";

// Project icons
import project1 from "../../assets/Projects/Booki@3x.png";
import projet2 from "../../assets/Projects/sophie-bluel.png"; 
import project3 from "../../assets/Projects/camera.webp";
import projet4 from "../../assets/Projects/Kasa_LOGO.svg"; 
import project5 from "../../assets/Projects/MonVieuxGrimoire_Logo.svg";

export function Projets(params) {
    return(
        <div className="section" id="project-section">

            <div className="section__container">
                <h2>Projets</h2>

                <div className="projet__cards-container">

                    <Cards 
                        src={project1}
                        alt={null}
                        title={"HTML5/CSS3"}
                        description={"Front-end of a Booking website"}
                        link={"https://github.com/dontBelieveIt/OC-P2-BookieWebSite"}
                    />

                    <Cards 
                        src={projet2}
                        alt={null}
                        title={"JavaScript, API"}
                        description={"Front-end and API developpement"}
                        link={"https://github.com/dontBelieveIt/OC-P3-Sophie_Bluel"}
                    />

                    <Cards 
                        src={project3}
                        alt={null}
                        title={"Nina Carducci"}
                        description={"Optimization and debug"}
                        link={"https://github.com/dontBelieveIt/OC-P4-Opt-Debug_Nina-Carducci"}
                    />
                    
                    <Cards 
                        src={projet4}
                        alt={null}
                        title={"React"}
                        description={"Front-end React developpement of a Booking website"}
                        link={"https://github.com/dontBelieveIt/OC-P5-Kasa-App-React"}
                    />

                    <Cards 
                        src={project5}
                        alt={null}
                        title={"Back-end"}
                        description={"Back-end, NodeJS"}
                        link={"https://github.com/dontBelieveIt/OC-P6-Mon-Vieux-Grimoire"}
                    />
                    
                    <a href="https://github.com/dontBelieveIt/" target="_blank" rel="noreferrer"><button>+ GitHub</button></a>
                
                </div>
            </div>           
        </div>
    )
}