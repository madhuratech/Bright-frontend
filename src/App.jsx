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
        <Route path="/arabianFoodmachinery" element={<Arabian />} />
        <Route path="/preparationEquipment" element={<Preparation />} />
        <Route path="/barCounter" element={<Bar />} />
        <Route path="/cookingEquipment" element={<Cooking />} />
        <Route path="/displayEquipment" element={<Display />} />
        <Route path="/exhaustEquipment" element={<Exhaust />} />
        <Route path="/serviceEquipment" element={<ServiceEquip/>}/>
        <Route path="/steamEquipment" element={<Steam/>}/>
        <Route path="/washingEquipment" element={<Washing/>}/>
      </Routes>

      <WhatsAppButton />
    </>

  );
}

export default App;