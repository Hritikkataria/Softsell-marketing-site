import { motion } from "framer-motion";
import {
  CloudArrowUpIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: CloudArrowUpIcon,
    title: "Upload License",
    description:
      "Simply upload your software license details through our secure platform.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Get Valuation",
    description:
      "Our AI-powered system provides an accurate valuation of your license.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: BanknotesIcon,
    title: "Get Paid",
    description:
      "Receive payment quickly and securely through our trusted payment system.",
    color: "from-purple-500 to-purple-600",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading">How It Works</h2>
          <p className="subheading">
            Three simple steps to transform your software licenses into value
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
              <motion.div
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg relative z-10"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>

                {/* Step number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-300">
                  {index + 1}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Connecting line */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transform -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
