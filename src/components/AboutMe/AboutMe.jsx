import "./AboutMe.scss";

import photo from "../../assets/astronaut-4106766_1280.jpg"; 

export function AboutMe() {
    return (
        <div className="section">
            <div className="about-me" id="about-me">
                <img src={photo} />
                <div className="text-field">
                    <h1>Hello World!</h1>
                    <h3>Je me présente : je suis Roxane Maria VIDONI.</h3>
                    <h2>Je suis <b>Développeuse Web Front-end</b></h2>
                    <p>Après avoir enchaîné quelques métiers dans le service client, et mes 25 ans passés, je me posé la question quant à mon avenir professionnel. Me rappelant que, lorsque j'étais petite, je voulais me tourner vers les métiers du numériques, j'ai voulu me redonné une chance et me <u>réorienter</u> vers cette branche et... BINGO ! J'ai développé un goût pour le codage et le développement d'application web. </p>
                    <p>C'est au cours de ma <u>formation en Développement Web à OpenclassRooms</u> que j'ai trouvé ma voie, et je compte poursuivre mon apprentissage en <u>alternance</u>, en me spécialisant dans <u>React</u> et <u>NodeJS</u>, plus spécifiquement.</p>
                </div>
            </div>
        </div>
    )
    
}