import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import homeImage from '../../assets/homeImageBanner.png'
import Cards from '../../components/Cards/Cards'

function Home() {
  return (
    <div>
      <Header />
      <Banner id={"bannerWithText"} banner={homeImage} title={"Chez vous, partout et ailleurs"} />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home