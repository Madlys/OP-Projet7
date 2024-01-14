import "./Tags.scss"

function Tag({ logement }) {
    const Tags = logement.tags;
    return (
        <div id="tags">
            {Tags.map((tag) =>
                <p key={`${logement.id}-tag-${tag}`} className="tag">{tag}</p>
            )}
        </div>
    )
}

export default Tag