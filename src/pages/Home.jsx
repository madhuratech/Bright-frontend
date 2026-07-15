import AboutSection from '../components/About/about'
import ClientsSection from '../components/Brand/clients'
import HeroSection from '../components/Hero/hero'
import IndustriesSection from '../components/Industry/industries'
import Navbar from '../components/Navbar/navbar'
import ProductSection from '../components/ProductSection/product'
import StatsSection from '../components/Stats/stats'
import WhyChooseUs from '../components/Whychoose/choose'
import ContactCTA from '../components/Banner/banner'
import Footer from '../components/Footer/footer'

function home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <StatsSection/>
        <AboutSection/>
        <WhyChooseUs/>
        <IndustriesSection/>
        <ProductSection/>
        <ClientsSection/>
        <ContactCTA/>
        <Footer/>
    </div>
  )
}

export default home