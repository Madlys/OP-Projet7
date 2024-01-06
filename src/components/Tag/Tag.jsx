import "./Tag.scss"

function Tag({ logement }) {
    const Tags = logement.tags;
    return (
        <div id="tags">
            {Tags.map((tag) =>
                <p className="tag">{tag}</p>
            )}
        </div>
    )
}

export default Tag