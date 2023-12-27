import './Banner.scss'
import homeImage from '../../assets/homeImageBanner.png'
import aproposImage from '../../assets/aproposImageBanner.png'

function Banner({homeImage,aproposImage}) {
    return <div id="banner">
        const image = () ? homeImage : aproposImage
        <img className='bannerImg' src={image} alt="banner image"></img>
        <h1>Bannière ici</h1>
    </div>
}

export default Banner