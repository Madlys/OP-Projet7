import './Header.scss'
import logo from '../../assets/logoKasaHeader.png'
import { Link } from 'react-router-dom'

function Header() {
    return <header id="header">
        <Link to='/'><img id='logoHeader' src={logo} alt='logo Kasa'></img></Link>
        <nav id="header-link">
            <Link to='/' id='accueilLink'>Accueil</Link>
            <Link to='/about' id='aproposLink'>A propos</Link>
        </nav>
    </header>
}

export default Header