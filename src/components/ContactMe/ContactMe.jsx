import "./ContactMe.scss";

export function ContactMe() {
    return (
        <div className="section">
            <h2>Contactez-moi !</h2>
            <p>hello.i.am.roxane@gmail.com</p>

            <div className="form">
                <div className="identity">
                    <div className="identity__item">
                        <label name="name">Email de contact</label>
                        <input type="text" name="email"></input>
                    </div>
                    <div className="identity__item">
                        <label name="sujet">Sujet</label>
                        <input type="text" name="sujet"></input>
                    </div>
                </div>
                <div className="message">
                    <label>Message</label>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    )
    
}