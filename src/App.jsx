import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products"
import Profile from "./pages/Profile";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Consultant from "./pages/Consultant";

import WhatsAppButton from "./components/Whatsapp/whatsapp";
import ScrollToTop from "./components/Scroll/scrolltotop";
import Arabian from "./pages/Arabian";
import Preparation from "./pages/Preparation";
import Bar from "./pages/Bar";
import Cooking from "./pages/Cooking";
import Display from "./pages/Display";
import Exhaust from "./pages/Exhaust";
import ServiceEquip from "./pages/ServiceEquip";
import Steam from "./pages/Steam";
import Washing from "./pages/Washing";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultant" element={<Consultant />} />

        {/* Product */}
        <Route path="/arabian" element={<Arabian />} />
        <Route path="/preparation" element={<Preparation />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/display" element={<Display />} />
        <Route path="/exhaust" element={<Exhaust />} />
        <Route path="/serviceEquip" element={<ServiceEquip/>}/>
        <Route path="/steam" element={<Steam/>}/>
        <Route path="/washing" element={<Washing/>}/>
      </Routes>

      <WhatsAppButton />
    </>

  );
}

export default App;