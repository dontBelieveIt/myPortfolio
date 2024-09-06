import "./Cards.scss"; 

export function Cards({src, alt, height, width, title, description}) {
    return(
        <>
        <div className="card"  style={{height:`${height}`, width:`${width}`}}>
            
            <div className="card__image">
                <img src={src} alt={alt} />
            </div>
            <div className="card__back">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            
            {/* <div className="overlay"></div> */}
        </div>
        </>
    )
}