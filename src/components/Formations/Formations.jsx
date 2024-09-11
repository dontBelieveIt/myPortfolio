import "./Formations.scss"; 

import OpenClassrooms from "../../assets/Others/Logo_OpenClassrooms.png"; 
import { Cards } from "../Cards/Cards";
import { FormaCards } from "../FormaCards/FormaCards";

export function Formations() {
    return(
        <div className="section" id="formation-section">

            <div className="section__container" id="formation-container">
                
                <h2>mes formations</h2>

                <div className="section__container-row">
                        <FormaCards
                            img={null}
                            alt={null}
                            orga={"Lycée Sarda Garriga"}
                            date={"2016"}
                            formation={"Baccalauréat Littéraire"}
                        />
                        
                        <FormaCards 
                            img={OpenClassrooms}
                            alt={"Openclassrooms"}
                            orga={"OpenClassrooms"}
                            date={"06 Février 2024 - 05 Octobre 2024"}
                            formation={"Développeuse Web"}
                        />

                        <FormaCards 
                            img={OpenClassrooms}
                            alt={"OpenClassrooms"}
                            orga={"OpenClassrooms"}
                            date={"05 Octobre - En cours"}
                            formation={"Développeuse Web Application JavaScript React"}
                        />
                </div>
            </div> 
        </div>
    )
}