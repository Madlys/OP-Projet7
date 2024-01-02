import "./Host.scss"

function Host({ logement }) {
    const host = logement.host;
    return (
        <div id="host">
            <p id="hostName">{host.name}</p>
            <img id="hostImg" src={host.picture} alt="photo de votre hôte"></img>
        </div>
    )
}

export default Host