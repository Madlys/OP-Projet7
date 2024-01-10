import "./NotFound.scss";
import Header from "../../components/Header/Header";
import errorLogo from "../../assets/404.png";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <Header />
            <main>
                <img src={errorLogo} alt="erreur 404 not found" />
                <h1>Oups! La page que vous demandez n'existe pas.</h1>
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </main>
        </div>
    )
}

export default NotFound