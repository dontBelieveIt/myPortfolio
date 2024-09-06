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
                        title={"HTML 5"}
                        description={null}
                        /> 

                        <Cards 
                        src={css_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"CSS3"}
                        description={null}
                        />
                        
                        <Cards 
                        src={js_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"JavaScript"}
                        description={null}
                        />
                        
                        <Cards 
                        src={react_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"ReactJS"}
                        description={null}
                        />

                        <Cards 
                        src={sass_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"Sass"}
                        description={null}
                        />

                        <Cards 
                        src={node_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"NodeJS"}
                        description={null}
                        />

                        <Cards 
                        src={express_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"Express"}
                        description={null}
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
                        title={"Git"}
                        description={null}
                        />

                        <Cards 
                        src={github_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"GitHub"}
                        description={null}
                        />
                        
                        <Cards 
                        src={vs_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"Visual Code Studio"}
                        description={null}
                        />

                        <Cards 
                        src={figma_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"Figma"}
                        description={null}
                        />

                       

                        <Cards 
                        src={swagger_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"Swagger"}
                        description={null}
                        />

                        <Cards 
                        src={postman_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"Postman"}
                        description={null}
                        />

                        <Cards 
                        src={mongobd_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"MongoDB"}
                        description={null}
                        />

                        <Cards 
                        src={mongoose_logo}
                        alt={null}
                        height={"10rem"}
                        width={"16rem"}
                        title={"Mongoose"}
                        description={null}
                        />
                        
                    </div>
                </div>
            </div>

        </div>
    )
}