import Header from "../../components/Header/Header";
import Carrousel from "../../components/Carrousel/Carrousel";
import logements from "../../logements.json";
import { useParams } from "react-router-dom";

function Logement(prop) {
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id == id);
    return (
        <div>
            <Header></Header>
            <Carrousel logement={logement}></Carrousel>
        </div>
    )
}

export default Logement