import Navbar from '../components/Navbar/navbar'
import ContactSection from '../components/Contact/contactsection'
import Footer from '../components/Footer/footer'
import ContactHero from '../components/Contacthero/contacthero'

function Contact() {
  return (
    <div>
        <Navbar/>
        <ContactHero/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Contact