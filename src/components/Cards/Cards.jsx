import "./Cards.scss"; 

export function Cards({src, alt, title, description, link}) {
    return(
        <>
        <a href={link} alt={alt} target="_blank" rel="noreferrer">
            <div className="card">
                
                    <div className="card__image">
                        <img src={src} alt={alt} />
                    </div>
                    <div className="card__back">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
            </div>
        </a>
        </>
    )
}