import "./LogementSheet.scss"
import { useParams } from "react-router-dom";
import logements from "../../logements.json";
import Header from "../../components/Header/Header";
import Slideshow from "../../components/Slideshow/Slideshow";
import Host from "../../components/Host/Host";
import Tags from "../../components/Tags/Tags";
import Stars from "../../components/Stars/Stars";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import { Navigate } from "react-router-dom";

function Logement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id == id)
    if (!logement) {
        return (
            <Navigate to="*" />
        )
    }
    return (
        <div>
            <Header />
            <Slideshow logement={logement}></Slideshow>
            <div id="logementInfosHeader">
                <div id="titleAndTags">
                    <div id="logementText">
                        <h1 id="logementTitle">{logement.title}</h1>
                        <p id="logementLocation">{logement.location}</p>
                        <Tags logement={logement} />
                    </div>
                </div>
                <div id="hostAndStars">
                    <Host logement={logement}></Host>
                    <Stars logement={logement} />
                </div>
            </div>
            <div id="logementInfosCollapse">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipements" content={logement.equipments} />
            </div>
            <Footer />
        </div>
    )
}

export default Logement