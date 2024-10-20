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

            <div className="section__container">
                <h2>Langues & Technologies</h2>

                <div id="languages-technology">
                    <div className="language-item">
                        <h3>Langues & Framework</h3>
                        <div className="cards-container">
                            <Cards 
                            src={html_logo}
                            alt={null}
                            title={"HTML 5"}
                            description={null}
                            link={null}
                            /> 

                            <Cards 
                            src={css_logo}
                            alt={null}
                            title={"CSS3"}
                            description={null}
                            link={null}
                            />
                            
                            <Cards 
                            src={js_logo}
                            alt={null}
                            title={"JavaScript"}
                            description={null}
                            link={null}
                            />
                            
                            <Cards 
                            src={react_logo}
                            alt={null}
                            title={"ReactJS"}
                            description={null}
                            link={null}
                            />

                            <Cards 
                            src={sass_logo}
                            alt={null}
                            title={"Sass"}
                            description={null}
                            link={null}
                            />

                            <Cards 
                            src={node_logo}
                            alt={null}
                            title={"NodeJS"}
                            description={null}
                            link={null}
                            />

                            <Cards 
                            src={express_logo}
                            alt={null}
                            title={"Express"}
                            description={null}
                            link={null}
                            />
                        </div>
                    </div>

                    <div className="language-item">
                        <h3>Technologies & Outils</h3>
                        <div className="cards-container">
                            <Cards 
                            src={git_logo}
                            alt={null}
                            title={"Git"}
                            description={null}
                            />

                            <Cards 
                            src={github_logo}
                            alt={null}
                            title={"GitHub"}
                            description={null}
                            />
                            
                            <Cards 
                            src={vs_logo}
                            alt={null}
                            title={"Visual Code Studio"}
                            description={null}
                            />

                            <Cards 
                            src={figma_logo}
                            alt={null}
                            title={"Figma"}
                            description={null}
                            />

                        

                            <Cards 
                            src={swagger_logo}
                            alt={null}
                            title={"Swagger"}
                            description={null}
                            />

                            <Cards 
                            src={postman_logo}
                            alt={null}
                            title={"Postman"}
                            description={null}
                            />

                            <Cards 
                            src={mongobd_logo}
                            alt={null}
                            title={"MongoDB"}
                            description={null}
                            />

                            <Cards 
                            src={mongoose_logo}
                            alt={null}
                            title={"Mongoose"}
                            description={null}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}