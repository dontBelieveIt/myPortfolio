import "./SocialLink.scss"; 

import LinkedInIcon from "../../assets/linkedin-brands-solid_copper.svg"; 
import GitHubIcon from "../../assets/square-github-brands-solid_copper.svg"; 

export function SocialLink() {
    return(
        <>
        <h3>Social link</h3>
        <div className="social-link">
        <img src={LinkedInIcon} alt="LinkedIn" />
        <img src={GitHubIcon} alt="GitHub" />
        </div>
        </>
    )
}