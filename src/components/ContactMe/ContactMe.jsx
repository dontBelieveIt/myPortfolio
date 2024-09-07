import "./ContactMe.scss";

import { useState } from "react";

import LinkedinIcon from "../../assets/linkedin-brands-solid_pink.svg";
import GitHubIcon from "../../assets/square-github-brands-solid_pink.svg";


export function ContactMe() {

    // Function to copy email address to clipboard
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

    // Function to submit mail on emial address
        const [result, setResult] = useState("");
        const onSubmit = async (event) => {
            event.preventDefault();
            setResult("Sending....");
            const formData = new FormData(event.target);

            formData.append("access_key", "b64cbb3a-6e63-4fc0-b0a7-232ee04bc39f");

            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            } else {
            console.log("Error", data);
            setResult(data.message);
            }
        };
    return (
        <>
            <div className="section" id="contact-section">

                {/* Copy mail section */}
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
           
            {/* Write to me sedction */}
            <div className="section">  
                <h2>Ou écrivez-moi directement</h2>

                <form onSubmit={onSubmit}> 
                    
                    <input type="hidden" name="access_key" value="b64cbb3a-6e63-4fc0-b0a7-232ee04bc39f"></input>
                    <input type="hidden" name="from_name" value="Portfolio"></input>
                    <input type="checkbox" name="botcheck" class="hidden" style={{"display":"none"}}></input>

                    <div className="identity"> 
                        <div className="identity__item">
                           <input type="text" name="email" placeholder="E-mail de contact" required></input>
                        </div>

                        <div className="identity__item">
                            {/* <label name="sujet">Sujet</label> */}
                            <input type="text" name="subject" placeholder="Sujet" required></input>
                        </div>
                    </div>
                    <div className="message">
                        <textarea  name="message" placeholder="Message" required></textarea>
                    </div>
                    <button type="submit"><span class="material-symbols-outlined">send</span> Envoyer</button>
                    <span>{result}</span>
                </form>
            </div>
        </>
    )
    
}