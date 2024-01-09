import './Banner.scss'

function Banner({id, banner, title}) {
    return <div id={id}>
        <img className='bannerImg' src={banner} alt="banner image"></img>
        {/* if home -> text */}
        {title ? <div className='bannerTextBackground'></div> : null}
        {title ? <div className='bannerText'>{title}</div> : null}
    </div>
}

export default Banner