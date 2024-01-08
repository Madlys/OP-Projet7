import "./LogementSheet.scss"
import { useParams } from "react-router-dom";
import logements from "../../logements.json";
import Header from "../../components/Header/Header";
import Carrousel from "../../components/Carrousel/Carrousel";
import Host from "../../components/Host/Host";
import Tags from "../../components/Tags/Tags";
import Stars from "../../components/Stars/Stars";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer"

function Logement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id == id);
    return (
        <div>
            <Header/>
            <Carrousel logement={logement}></Carrousel>
            <div id="logementInfos">
                <div id="titleAndHost">
                    <div id="logementText">
                        <h1 id="logementTitle">{logement.title}</h1>
                        <p id="logementLocation">{logement.location}</p>
                    </div>
                    <Host logement={logement}></Host>
                </div>
                <div id="tagAndStars">
                    <Tags logement={logement} />
                    <Stars logement={logement} />
                </div>
                <div id="dropdownContainer">
                    <Dropdown title="Description" content={logement.description} />
                    <Dropdown title="Equipements" content={logement.equipments} />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Logement