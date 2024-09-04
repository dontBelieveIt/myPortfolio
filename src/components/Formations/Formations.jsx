import "./Formations.scss"; 

import OpenClassrooms from "../../assets/Others/Logo_OpenClassrooms.png"; 
import { Cards } from "../Cards/Cards";

export function Formations() {
    return(
        <div className="section" id="formation-section">
            <h2>mes formations</h2>
           <div className="formation">
                <Cards 
                    src={OpenClassrooms}
                    alt={null}
                    height={"7rem"}
                    width={"10rem"}
                />

                {/* <img src={OpenClassrooms} /> */}
                <div className="text-field">
                    <h3>Openclassrooms</h3>
                    <h6>Février 2024 - Octobre 2024</h6>
                    <h4>Formation Développeur Web</h4>
                </div>

                <Cards 
                    src={OpenClassrooms}
                    alt={null}
                    height={"7rem"}
                    width={"10rem"}
                />

                {/* <img src={OpenClassrooms} /> */}
                <div className="text-field">
                    <h3>Openclassrooms</h3>
                    <h6>En recherche d'une entreprise</h6>
                    <h4>Formation Développeur d'application JavaScript React</h4>
                </div>
            </div> 
        </div>
    )
}