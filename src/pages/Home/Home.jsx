import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import homeImage from '../../assets/homeImageBanner.png'

function Home() {
  return (
    <div>
      <Header />
      <Banner banner={homeImage} title={"Chez vous, partout et ailleurs"} />
      <Footer />
    </div>
  )
}

export default Home