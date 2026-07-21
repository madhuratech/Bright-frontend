import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "http://api.brightkitchenind.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#EEF2F7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 text-sm font-medium text-[#1557C0] bg-[#DCE7F8] rounded-full mb-6">
              Contact Us
            </span>

            <h2 className="text-5xl font-semibold text-[#1557C0] leading-tight mb-6">
              Get in touch <br /> with us
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
              We're here to support your commercial kitchen requirements with
              reliable installation, maintenance, servicing, and technical
              assistance.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Email:</p>
                <p className="font-semibold text-lg text-gray-800">
                 bright_ind@hotmail.com
                </p>
                <p className="font-semibold text-lg text-gray-800">
                 brightcommercialkitchen@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone:</p>
                <p className="font-semibold text-lg text-gray-800">
                  +91 9894788786
                </p>
                <p className="font-semibold text-lg text-gray-800">
                  +91 9944746786
                </p>
                <p className="font-semibold text-lg text-gray-800">
                  +91 9944749786

                </p>
              </div>

              <p className="text-gray-600">
                Available Monday to Saturday, 9 AM – 7 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[32px] p-8 lg:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name..."
                    required
                    className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-[#1557C0]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name..."
                    required
                    className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-[#1557C0]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address..."
                  required
                  className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-[#1557C0]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  How can we help you?
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message..."
                  required
                  className="w-full border border-gray-200 rounded-2xl px-5 py-4 resize-none outline-none focus:border-[#1557C0]"
                />
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-4 hover:bg-gray-900 transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}

                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight
                      size={16}
                      className="text-black"
                    />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;