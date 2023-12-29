import './Banner.scss'

function Banner(prop) {
    const title = (prop.title) ? prop.title : null
    return <div id="banner">
        <img className='bannerImg' src={prop.banner} alt="banner image"></img>
        <div className='bannerText'>{title}</div>
    </div>
}

export default Banner