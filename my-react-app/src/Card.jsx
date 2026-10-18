
function Card(reasonLate){
//"https://via.placeholder.com/150", use this for placeholder images, final #=pixels (sqr)
    return(

        <div className = "card">
            <img className = "card-image" src={reasonLate.imgLink} alt="what"></img>
            <h3>{reasonLate.reason}</h3>
            <p>{reasonLate.comment}</p>
        </div>
    )
}

export default Card;