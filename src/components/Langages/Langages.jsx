import "./Langages.scss"; 

import { Cards } from "../Cards/Cards";

// Langagues Icons
import html_logo from "../../assets/HTML5.svg"; 
import css_logo from "../../assets/CSS3.svg"; 
import js_logo from "../../assets/JavaScript.svg"; 
import react_logo from "../../assets/React.svg"; 
import node_logo from "../../assets/Node.js.svg"; 
import express_logo from "../../assets/Express.svg"; 
import sass_logo from "../../assets/Sass.svg"; 

export function Langages(params) {
    return(
        <div className="section" >
            
            <h2>Langues & Technologies</h2>

            <div id="languages">
                <div>
                    <h3>Langues</h3>
                    <div className="cards-container">
                        <Cards 
                        src={html_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        /> 

                        <Cards 
                        src={css_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />
                        
                        <Cards 
                        src={js_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />
                        
                        <Cards 
                        src={react_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />

                        <Cards 
                        src={sass_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />

                        <Cards 
                        src={node_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />

                        <Cards 
                        src={express_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />
                        
                        
                    </div>
                </div>

                <div>
                    <h3>Technologies et Outils</h3>
                    <div className="cards-container">
                        <Cards 
                        src={null}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />
                        <Cards 
                        src={null}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />
                        <Cards 
                        src={null}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />
                        <Cards 
                        src={null}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />
                        
                    </div>
                </div>
            </div>

        </div>
    )
}