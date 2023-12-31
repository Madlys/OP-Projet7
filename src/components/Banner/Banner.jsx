import './Banner.scss'

function Banner(prop) {
    return <div id="banner">
        <img className='bannerImg' src={prop.banner} alt="banner image"></img>
        {/* if home -> text */}
        {prop.title ? <div className='bannerTextBackground'></div> : null}
        {prop.title ? <div className='bannerText'>{prop.title}</div> : null}
    </div>
}

export default Banner