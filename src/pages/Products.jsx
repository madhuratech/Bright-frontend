import Footer from "../components/Footer/footer"
import Navbar from "../components/Navbar/navbar"
import ProductSection from "../components/Productdisplay/productdisplay"
import ProductHero from "../components/Producthero/Producthero"
// import ProductIntro from "../components/ProductIntro/intro"


function products() {
  return (
    <div>
      <Navbar />
      <ProductHero />
      {/* <ProductIntro/> */}
      <ProductSection />
      <Footer />
    </div>
  )
}

export default products