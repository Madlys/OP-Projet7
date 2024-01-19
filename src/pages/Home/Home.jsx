import { useEffect } from 'react'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import homeImage from '../../assets/homeImageBanner.png'
import Cards from '../../components/Cards/Cards'

function Home() {
  useEffect(() => {
      document.title = "Bienvenue sur Kasa";
  })
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