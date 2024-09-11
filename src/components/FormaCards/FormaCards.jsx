import "./FormaCards.scss"; 

export function FormaCards({img, alt, orga, date, formation}) {

    // const [image, imageTrue]=  useState(true); 
    // if (image==true ) { 
        
    // }

    return(
        <>
        <div className="forma-container">
            <div className="forma-container__img">
                <img src={img} alt={alt} />
            </div>
            <div className="forma-container__description">
                <h3>{orga}</h3>
                <h5>{date}</h5>
                <h4>{formation}</h4>
            </div>
        </div>
        </>
    )
}