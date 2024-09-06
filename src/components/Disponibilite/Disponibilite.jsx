import { useState } from "react";
import "./Disponibilite.scss";

// import { useState } from "react";

export function Disponibilite({poste, disponible}) {

    // const [dispo, dispoState] = useState(true); 
    // const switchBox = document.getElementsByClassName('.switch'); 
    // if (disponible == true) {
    //     switchBox.setAttribute("checked"); 
    // } else {
    //     switchBox.setAttribute("unchecked"); 
    // }

    return(
        <>
            <p className="dispo">En recherche de poste actuellement ?
                <label class="switch">
                    <input type="checkbox" checked />
                        <span class="slider round"></span>
                </label>
            </p>
            <p className="dispo">Poste rechercher: 
                <span className="dispo__poste"> [{poste}]</span>
            </p>
        </>
    )
}   