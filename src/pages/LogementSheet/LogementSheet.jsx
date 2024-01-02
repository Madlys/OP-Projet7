import "./LogementSheet.scss"
import { useParams } from "react-router-dom";
import logements from "../../logements.json";
import Header from "../../components/Header/Header";
import Carrousel from "../../components/Carrousel/Carrousel";
import Host from "../../components/Host/Host";

function Logement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id == id);
    return (
        <div>
            <Header></Header>
            <Carrousel logement={logement}></Carrousel>
            <div id="logementInfos">
                <div id="logementText">
                    <h1 id="logementTitle">{logement.title}</h1>
                    <p id="logementLocation">{logement.location}</p>
                </div>
                <Host logement={logement}></Host>
            </div>
        </div>
    )
}

export default Logement