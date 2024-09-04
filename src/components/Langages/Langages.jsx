import "./Langages.scss"; 

import { Cards } from "../Cards/Cards";

// Langagues Icons
import html_logo from "../../assets/Languages/HTML5.svg"; 
import css_logo from "../../assets/Languages/CSS3.svg"; 
import js_logo from "../../assets/Languages/JavaScript.svg"; 
import react_logo from "../../assets/Languages/React.svg"; 
import sass_logo from "../../assets/Languages/Sass.svg"; 
import node_logo from "../../assets/Languages/Node.js.svg"; 
import express_logo from "../../assets/Languages/Express.svg"; 

// Technology icons
import git_logo from "../../assets/Technologies/Git.svg"; 
import github_logo from "../../assets/Technologies/GitHub.svg"; 
import vs_logo from "../../assets/Technologies/Visual_Studio_Code.svg"; 
import figma_logo from "../../assets/Technologies/Figma.svg"; 
import swagger_logo from "../../assets/Technologies/Swagger.svg"; 
import postman_logo from "../../assets/Technologies/Postman.svg"; 
import mongobd_logo from "../../assets/Technologies/MongoDB.svg"; 
import mongoose_logo from "../../assets/Technologies/Mongoose.js.svg"; 


export function Langages(params) {
    return(
        <div className="section" id="language-section">
            
            <h2>Langues & Technologies</h2>

            <div id="languages-technology">
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
                        src={git_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />

                        <Cards 
                        src={github_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />
                        
                        <Cards 
                        src={vs_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />

                        <Cards 
                        src={figma_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />

                       

                        <Cards 
                        src={swagger_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />

                        <Cards 
                        src={postman_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />

                        <Cards 
                        src={mongobd_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        />

                        <Cards 
                        src={mongoose_logo}
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