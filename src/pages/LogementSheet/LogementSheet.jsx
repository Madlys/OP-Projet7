import "./LogementSheet.scss"
import Header from "../../components/Header/Header";
import Carrousel from "../../components/Carrousel/Carrousel";
import logements from "../../logements.json";
import { useParams } from "react-router-dom";

function Logement() {
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id == id);
    return (
        <div>
            <Header></Header>
            <Carrousel logement={logement}></Carrousel>
            <div id="logementText">
                <h1 id="logementTitle">{logement.title}</h1>
                <p id="logementLocation">{logement.location}</p>
            </div>
        </div>
    )
}

export default Logement