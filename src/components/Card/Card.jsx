import './Card.scss'
import logements from '../../logements.json'

function Card() {
    return <div id="cards">
        {logements.map((logement) =>
            <a href='' className='card'>
                <img className='cardImg' src={logement.cover} alt="photo du logement"></img>
                <div className='cardGradient'></div>
                <div id={logement.id} className='cardTitle'>{logement.title}</div>
            </a>
        )}
    </div>
}

export default Card