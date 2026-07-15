import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9944746786"; // Replace with your WhatsApp number
  const message = "Hi, I would like to enquire about your products.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="WhatsApp Enquiry"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;