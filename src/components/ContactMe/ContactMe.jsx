import "./ContactMe.scss";

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
            <div className="section">
                <h2>Contactez-moi !</h2>
            </div>

            <div className="section-dark">
                    <input type="text" value="hello.i.am.roxane@gmail.com" id="myEmail"></input>
                    <button onClick={copyEmail}>Copier</button>
            </div>

            <div className="section">  
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
                    <button type="submit">Envoyer</button>
                </div>
            </div>
        </>
    )
    
}