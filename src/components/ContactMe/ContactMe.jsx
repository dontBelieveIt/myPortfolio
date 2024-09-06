import "./ContactMe.scss";

import LinkedinIcon from "../../assets/linkedin-brands-solid_pink.svg";
import GitHubIcon from "../../assets/square-github-brands-solid_pink.svg";


export function ContactMe() {

  function copyEmail(e) {
    e.preventDefault();    // Get the text field
    const copyText = document.getElementById("myEmail");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  };
    return (
        <>
            <div className="section" id="contact-section">
                <h2>Contactez-moi !</h2>
                <div className="contact-me" id="my-email">
                    <h3>Mon e-mail </h3>
                    <input type="text" value="hello.i.am.roxane@gmail.com" id="myEmail"></input>
                    <button onClick={copyEmail}><span class="material-symbols-outlined">content_copy</span>Copier</button> 
                </div>
                
                <div className="contact-me" id="my-social">
                    <h3>Mes réseaux </h3>
                    <img src={LinkedinIcon} alt="LinkedIn"/>
                    <img src={GitHubIcon} alt="LinkedIn"/>
                </div>
            </div>

           

            <div className="section">  
                <h2>Ou écrivez-moi directement</h2>
                <div className="form">
                    <div className="identity">
                        <div className="identity__item">
                            {/* <label name="name">Email de contact</label> */}
                            <input type="text" name="email" placeholder="E-mail de contact" required></input>
                        </div>
                        <div className="identity__item">
                            {/* <label name="sujet">Sujet</label> */}
                            <input type="text" name="sujet" placeholder="Sujet" required></input>
                        </div>
                    </div>
                    <div className="message">
                        {/* <label>Message</label> */}
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <button type="submit"><span class="material-symbols-outlined">send</span> Envoyer</button>
                </div>
            </div>
        </>
    )
    
}