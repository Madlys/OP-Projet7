import './Footer.scss'
import logo from '../../assets/logoKasaFooter.png'
import { Link } from 'react-router-dom'

function Footer() {
    return <div id="footer">
        <Link to='/'><img id='logoFooter' src={logo} alt="logo Kaza" /></Link>
        <p id='footerText'>© 2020 Kasa. All rights reserved</p>
    </div>
}

export default Footer