import "./Cards.scss"; 

export function Cards({src, alt}) {
    return(
        <>
        <div className="card">
            <div className="card__image">
                <img src={src} alt={alt}/>
            </div>
        </div>
        </>
    )
}