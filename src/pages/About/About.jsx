import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import aboutImage from '../../assets/aboutImageBanner.png'

function About() {
    return (
        <div>
            <Header />
            <Banner id={"bannerWithoutText"} banner={aboutImage} />
            <Footer />
        </div>
    )
}

export default About