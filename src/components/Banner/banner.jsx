import { useNavigate } from "react-router-dom";

const ContactCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F0F4FA] py-10 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto bg-[#0057C9] rounded-[30px] px-6 md:px-12 py-10 md:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

        {/* Left Content */}
        <div className="max-w-3xl">
          <button className="bg-white text-[#0057C9] text-sm font-medium px-5 py-2 rounded-full mb-6">
            GET IN TOUCH
          </button>

          <h2 className="text-white text-3xl md:text-5xl font-medium leading-tight mb-5">
            Start Your Commercial
            <br />
            Kitchen Setup Today
          </h2>

          <p className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed">
            Our experienced team is ready to help you create a durable,
            efficient, and customized commercial kitchen environment that
            supports your business growth.
          </p>
        </div>

        {/* Right Button */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-end">
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#0057C9] font-semibold text-lg px-8 py-4 rounded-full shadow-md hover:scale-105 transition duration-300"
          >
            Send Enquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;