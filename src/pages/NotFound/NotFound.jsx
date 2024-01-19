import "./NotFound.scss";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import errorLogo from "../../assets/404.png";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function NotFound() {
    useEffect(() => {
        document.title = "Erreur 404 - Page introuvable";
    })
    return (
        <div>
            <Header />
            <main>
                <img src={errorLogo} alt="erreur 404 not found" />
                <h1>Oups! La page que vous demandez n'existe pas.</h1>
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </main>
            <Footer/>
        </div>
    )
}

export default NotFound