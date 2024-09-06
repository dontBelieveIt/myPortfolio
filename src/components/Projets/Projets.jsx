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
            <h2>Projets</h2>

            <div className="projet__cards-container">

                <Cards 
                    src={project1}
                    alt={null}
                    height={"14rem"}
                    width={"20rem"}
                />

                <Cards 
                    src={projet2}
                    alt={null}
                    height={"14rem"}
                    width={"20rem"}
                />

                <Cards 
                    src={project3}
                    alt={null}
                    height={"14rem"}
                    width={"20rem"}
                />
                
                <Cards 
                    src={projet4}
                    alt={null}
                    height={"14rem"}
                    width={"20rem"}
                />

                <Cards 
                    src={project5}
                    alt={null}
                    height={"14rem"}
                    width={"20rem"}
                />
                
                <a href="https://github.com/dontBelieveIt/" target="_blank"><button>+ GitHub</button></a>
            
            </div>
                        
        </div>
    )
}