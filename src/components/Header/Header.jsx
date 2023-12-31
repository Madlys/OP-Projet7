import './Header.scss'
import logo from '../../assets/logoKasaHeader.png'
import { Link } from 'react-router-dom'

function Header() {
    return <div id="header">
        <img id='logoHeader' src={logo} alt='logo Kasa'></img>
        <div id="header-link">
            <Link to='/' id='accueilLink'>Accueil</Link>
            <Link to='/about' id='aproposLink'>A propos</Link>
        </div>
    </div>
}

export default Header