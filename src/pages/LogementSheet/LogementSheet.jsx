import "./LogementSheet.scss"
import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import logements from "../../logements.json";
import Header from "../../components/Header/Header";
import Slideshow from "../../components/Slideshow/Slideshow";
import Host from "../../components/Host/Host";
import Tags from "../../components/Tags/Tags";
import Stars from "../../components/Stars/Stars";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";

function Logement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id == id)

    useEffect(() => {
        if (logement) {
            document.title = logement.title;
        }
    })

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
                    <Host logement={logement} />
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