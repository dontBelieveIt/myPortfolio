import "./Cards.scss"; 

export function Cards({src, alt, height, width}) {
    return(
        <>
        <div className="card"  style={{height:`${height}`, width:`${width}`}}>
            
            <div className="card__image">
                <img src={src} alt={alt} />
            </div>
            
            {/* <div className="overlay"></div> */}
        </div>
        </>
    )
}