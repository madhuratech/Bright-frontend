
import ContactCTA from '../components/Banner/banner'
import ClientsSection from '../components/Brand/clients'
import Footer from '../components/Footer/footer'
import Founder from '../components/Founder/founder'
import Growth from '../components/Growth/growth'
import Navbar from '../components/Navbar/navbar'
import OverviewSection from '../components/Overview/overview'
import ProductHero from '../components/Profilehero/profilehero'
import Timeline from '../components/Timeline/Timeline'

function Profile() {
  return (
    <div>
        <Navbar/>
        <ProductHero/>
        <OverviewSection/>
        <Founder/>
        <Growth/>
        <Timeline/>
        <ClientsSection/>
        <ContactCTA/>
        <Footer/>
    </div>
  )
}

export default Profile