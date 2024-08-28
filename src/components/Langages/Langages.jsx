import "./Langages.scss"; 

import { Cards } from "../Cards/Cards";

export function Langages(params) {
    return(
        <div className="section">
            <h3>Mettre ici les <u>cards</u> des langages informatiques que je connais. </h3>
        <div className="cards-container">
            <Cards />
            <Cards />
            <Cards /> 
            <Cards /> 
            <Cards />
            <Cards />
        </div>
        </div>
    )
}