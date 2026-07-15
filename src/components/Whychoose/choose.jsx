import {
    ClipboardCheck,
    Compass,
    Factory,
    Truck,
    Headphones,
    Gauge,
} from "lucide-react";

const features = [
    {
        icon: ClipboardCheck,
        title: "Comprehensive Project Management Services",
        description:
            "From planning to installation, every stage is managed through a seamless execution process",
    },
    {
        icon: Compass,
        title: "Strategic Kitchen Planning",
        description:
            "Optimized kitchen layouts improve workflow efficiency, operational safety, and functional space utilization.",
    },
    {
        icon: Factory,
        title: "Advanced Fabrication Facilities",
        description:
            "Modern in-house manufacturing ensures consistent quality, precision engineering, and dependable product performance.",
    },
    {
        icon: Truck,
        title: "Prompt Delivery And Setup ",
        description:
            "Efficient coordination minimizes project delays while ensuring smooth installation and operational readiness. ",
    },
    {
        icon: Headphones,
        title: "Reliable Support Services",
        description:
            "Dedicated assistance helps maintain equipment performance through timely service and technical guidance.",
    },
    {
        icon: Gauge,
        title: "Customized Value-Driven Solutions",
        description:
            "Tailored project execution maximizes efficiency, controls costs, and meets unique business requirements.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-[#eef2f7] py-16 px-4 md:px-8">
            <div
                className="max-w-[1600px] mx-auto rounded-[32px] overflow-hidden px-6 md:px-12 py-14 relative"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(90deg,#f5f5f5 0,#f5f5f5 2px,#fafafa 2px,#fafafa 6px)",
                }}
            >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-white/85"></div> */}

                {/* Content */}
                <div className="relative z-10">
                    {/* Badge */}
                    <div className="flex justify-center mb-6">
                        <span className="bg-[#dfe8f6] text-[#0E5AC7] text-xs md:text-sm font-medium px-5 py-2 rounded-full uppercase tracking-wide">
                            Why Choose Us
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-center text-[#0E5AC7] text-3xl md:text-5xl font-medium leading-tight max-w-4xl mx-auto mb-14">
                        Why Companies Trust Bright For Complete Kitchen Solutions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className={`p-8  /* RIGHT BORDER */
                                         ${index % 3 !== 2
                                            ? "md:border-r-2 md:border-[#A3C7F5]"
                                            : ""
                                        }
                                        /* ONLY CENTER HORIZONTAL BORDER */
                                         ${index < 3
                                            ? "border-b-2 border-[#A3C7F5]"
                                            : ""
                                        } `}
                                >
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl border border-[#cdd8e8] bg-white flex items-center justify-center shadow-sm mb-5">
                                        <Icon className="w-7 h-7 text-[#0E5AC7]" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[#1B1B1B] text-xl font-semibold mb-3 leading-snug">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#5E6470] text-[18px] leading-7">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;