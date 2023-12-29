import './Header.scss'
import logo from '../../assets/logoKasaHeader.png'

function Header() {
    return <div id="header">
        <img id='logoHeader' src={logo} alt='logo Kasa'></img>
        <div id="header-link">
            <a href='' id='accueilLink'>Accueil</a>
            <a href='' id='aproposLink'>A propos</a>
        </div>
    </div>
}

export default Header