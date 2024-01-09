import './Card.scss'
import logements from '../../logements.json'
import { Link } from 'react-router-dom'

function Card() {
    return <nav id="cards">
        {logements.map((logement) =>
            <Link to={`/logement/${logement.id}`} className='card'>
                <img className='cardImg' src={logement.cover} alt="photo du logement"></img>
                <div className='cardGradient'></div>
                <div id={logement.id} className='cardTitle'>{logement.title}</div>
            </Link>
        )}
    </nav>
}

export default Card