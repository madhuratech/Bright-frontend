
import Navbar from '../components/Navbar/navbar'
// import ContactCTA from '../components/Banner/banner'
import KitchenPlanningSection from '../components/Kitchenplan/planning'
import ConsultantHero from '../components/Consultanthero/consultanthero'
import Footer from '../components/Footer/footer'
import BrochureSection from '../components/Brochure/doc'


export default function Consultant() {
  return (
    <div>
        <Navbar/>
        <ConsultantHero/>
        <KitchenPlanningSection/>
        <BrochureSection/>
        {/* <ContactCTA/> */}
        <Footer/>
    </div>
  )
}
