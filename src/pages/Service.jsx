
import ContactCTA from '../components/Banner/banner'
import ExcellenceSection from '../components/Excellence/features'
import Footer from '../components/Footer/footer'
import Navbar from '../components/Navbar/navbar'
import ServiceHero from '../components/Servicehero/servicehero'
import ServicesSection from '../components/Servicelayout/layout'



function Profile() {
  return (
    <div>
        <Navbar/>
        <ServiceHero/>
        <ServicesSection/>
        <ExcellenceSection/>
        <ContactCTA/>
        <Footer/>
    </div>
  )
}

export default Profile