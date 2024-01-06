import "./Stars.scss"
import starActive from "../../assets/starActive.png"
import starInactive from "../../assets/starInactive.png"


function Stars({ logement }) {
    let rating = logement.rating;
    const starFill = [];
    for (let i = 0; i < rating; i++) {
        starFill.push(<img className="star" src={starActive} alt="star active" />)
    }
    if (rating < 5) {
        for (let j = 0; j < (5 - rating); j++) {
            starFill.push(<img className="star" src={starInactive} alt="star inactive" />)
        }
    }
    return (
        <div id="stars">
            {starFill}
        </div>
    )
}

export default Stars