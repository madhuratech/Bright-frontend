import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products"
import Profile from "./pages/Profile";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Consultant from "./pages/Consultant";

import WhatsAppButton from "./components/Whatsapp/whatsapp";
import ScrollToTop from "./components/Scroll/scrolltotop";

function App() {
  return (
    <>
      <ScrollToTop />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/services" element={<Service/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/consultant" element={<Consultant />} />
    </Routes>
    
    <WhatsAppButton/>
    </>
   
  );
}

export default App;