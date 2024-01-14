import './Banner.scss'

function Banner({id, banner, title}) {
    return <header id={id}>
        <img className='bannerImg' src={banner} alt="banner image"></img>
        <div className='bannerBackground'></div>
        {/* if home -> text */}
        {title ? <div className='bannerText'>{title}</div> : null}
    </header>
}

export default Banner