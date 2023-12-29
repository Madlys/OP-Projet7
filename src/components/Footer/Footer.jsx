import './Footer.scss'
import logo from '../../assets/logoKasaFooter.png'

function Footer() {
    return <div id="footer">
        <img id='logoFooter' src={logo} alt="logo Kaza" />
        <p id='footerText'>© 2020 Kasa. All rights reserved</p>
    </div>
}

export default Footer