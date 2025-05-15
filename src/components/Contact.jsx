import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: "Email",
    content: "support@softsell.com",
    color: "bg-blue-500",
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    content: "+1 (555) 123-4567",
    color: "bg-green-500",
  },
  {
    icon: MapPinIcon,
    title: "Location",
    content: "123 Tech Street, Silicon Valley, CA",
    color: "bg-purple-500",
  },
  {
    icon: EnvelopeIcon,
    title: "Sales",
    content: "sales@softsell.com",
    color: "bg-pink-500",
  },
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-10 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're here to help you with your software license needs
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 max-w-5xl mx-auto items-stretch min-h-[600px]">
          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col justify-center h-full w-full md:w-1/2"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6 h-full w-full md:w-1/2 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl justify-center"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="flex items-center bg-white dark:bg-gray-900 rounded-2xl shadow p-5 gap-4 min-h-[72px]"
              >
                <div
                  className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {info.content}
                  </p>
                </div>
              </motion.div>
            ))}
            {/* Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.15 * contactInfo.length }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5 min-h-[72px] flex flex-col justify-center"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Business Hours
              </h3>
              <div className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                {businessHours.map((item) => (
                  <p key={item.day}>
                    <span className="font-medium">{item.day}:</span>{" "}
                    {item.hours}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
