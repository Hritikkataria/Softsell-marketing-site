import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Safety Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "Instagram", href: "#", icon: "instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-6">SoftSell</h3>
            <p className="text-gray-400 mb-6">
              The trusted platform for buying and selling software licenses. Get
              the best value for your unused licenses.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-primary-500" />
                <span className="text-gray-400">support@softsell.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-5 h-5 text-primary-500" />
                <span className="text-gray-400">
                  123 Tech Street, Silicon Valley, CA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6 capitalize">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-gray-400"
            >
              © {currentYear} SoftSell. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex space-x-6"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="sr-only">{link.name}</span>
                  <i className={`fab fa-${link.icon} text-xl`}></i>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          {/* Visa */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 flex items-center justify-center w-16 h-10">
            <svg
              width="40"
              height="16"
              viewBox="0 0 40 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="16" rx="3" fill="none" />
              <text
                x="7"
                y="12"
                fontFamily="Arial, Helvetica, sans-serif"
                fontWeight="bold"
                fontSize="10"
                fill="#1A237E"
              >
                VISA
              </text>
            </svg>
          </div>
          {/* MasterCard */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 flex items-center justify-center w-16 h-10">
            <svg
              width="40"
              height="16"
              viewBox="0 0 40 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="16" rx="3" fill="none" />
              <circle cx="16" cy="8" r="6" fill="#FF5F00" />
              <circle cx="24" cy="8" r="6" fill="#EB001B" />
              <circle cx="20" cy="8" r="6" fill="#F79E1B" fillOpacity="0.7" />
            </svg>
          </div>
          {/* PayPal */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 flex items-center justify-center w-16 h-10">
            <svg
              width="40"
              height="16"
              viewBox="0 0 40 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="16" rx="3" fill="none" />
              <text
                x="4"
                y="12"
                fontFamily="Arial, Helvetica, sans-serif"
                fontWeight="bold"
                fontSize="10"
                fill="#003087"
              >
                PayPal
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-900 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-900 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
    </footer>
  );
};

export default Footer;
