import { motion } from "framer-motion";

import step1 from "../../assets/step/step1.png";
import step2 from "../../assets/step/step2.png";
import step3 from "../../assets/step/step3.png";
import step4 from "../../assets/step/step4.png";
import step5 from "../../assets/step/step5.png";
import step6 from "../../assets/step/step6.png";

const steps = [
  {
    number: "01",
    title: "Site Assessment",
    description:
      "Our experts conduct detailed site evaluations to analyze space, infrastructure, and operational requirements, identifying opportunities and challenges that support effective commercial kitchen planning and project execution.",
    image: step1,
  },
  {
    number: "02",
    title: "Requirement Analysis",
    description:
      "We work closely with clients to understand operational goals, workflow requirements, and design preferences, ensuring every kitchen solution is strategically planned to support efficiency, functionality, and success.",
    image: step2,
  },
  {
    number: "03",
    title: "2D Layout Planning",
    description:
      "Our detailed 2D layouts define workflow, equipment positioning, utility connections, ventilation requirements, and space utilization, creating efficient kitchen environments that enhance productivity, safety, and operational performance.",
    image: step3,
  },
  {
    number: "04",
    title: "Commercial Planning",
    description:
      "We provide detailed project planning, budgeting, and execution strategies that help businesses make informed decisions, optimize investments, and ensure successful commercial kitchen development and implementation.",
    image: step4,
  },
  {
    number: "05",
    title: "3D Visualization",
    description:
      "Our advanced 3D visualizations help you clearly understand space planning, design structure, and equipment placement before construction begins, ensuring accuracy, confidence, and better decision-making for your commercial kitchen project.",
    image: step5,
  },
  {
    number: "06",
    title: "Technical Development",
    description:
      "Development of detailed technical drawings, utility planning, specification design, and on-site execution assistance.",
    image: step6,
  },
];

export default function KitchenPlanningSection() {
  return (
    <section className="bg-[#F7F9FC] py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-flex px-5 py-2 rounded-full bg-blue-100 text-[#0057C9] font-semibold text-sm">
            OUR PROCESS
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900">
            Precision Planning For Every Kitchen
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            From initial concepts to final execution, we design layouts that enhance efficiency, safety, and long-term operational success.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-[#0057C9]/10 rounded-[40px] blur-xl"></div>

                <motion.img
                  src={step.image}
                  alt={step.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative w-full h-[420px] object-cover rounded-[32px] shadow-2xl"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-7xl font-bold text-[#0057C9]/20"
                >
                  {step.number}
                </motion.span>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 -mt-4">
                  {step.title}
                </h3>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#0057C9] rounded-full mt-6"
                ></motion.div>

                <p className="mt-6 text-lg text-slate-600 leading-relaxed text-justify">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}