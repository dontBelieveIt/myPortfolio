import "./Formations.scss"; 

import OpenClassrooms from "../../assets/Logo_OpenClassrooms.png"

export function Formations() {
    return(
        <div className="section">
            <h2>mes formations</h2>
           <div className="formation">
                <img src={OpenClassrooms} />
                <div className="text-field">
                    <h3>Openclassrooms</h3>
                    <h6>Février 2024 - Octobre 2024</h6>
                    <h4>Formation Développeur Web</h4>
                </div>
            </div> 
        </div>
    )
}