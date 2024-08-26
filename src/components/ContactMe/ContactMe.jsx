import "./ContactMe.scss";

export function ContactMe() {
    return (
        <div className="section">
            <div className="form">
                <div className="identity">
                    <label>Name</label>
                    <input type="text"></input>
                    <label>Capacity</label>
                    <input type="text"></input>
                </div>
                <div className="text-field">
                <label>What you want to say</label>
                <textarea></textarea>
                </div>
            </div>
        </div>
    )
    
}