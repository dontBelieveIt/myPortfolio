import "./Footer.scss"; 

import ReactLogo from "../../assets/react-js-compressed.png"; 
import netlifyLogo from "../../assets/Netlify-Logo-compressed.wine.png"; 

export function Footer() {
    return(
        <div className="footer">
        <p>Copyright © 2024 par Roxane VIDONI | Tous droits réservés.</p>
        <p>Développer avec <u>React</u> et hébergé sur <u>Netlify</u>.</p>
        </div>
    )
}