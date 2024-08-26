import "./AboutMe.scss";

import photo from "../../assets/astronaut-4106766_1280.jpg"; 

export function AboutMe() {
    return (
        <div className="section">
            <img src={photo} />
            <h2>Hello World !</h2>
        </div>
    )
    
}