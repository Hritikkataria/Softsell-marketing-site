import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Secure Transactions",
    description:
      "Bank-grade security ensures your data and transactions are always protected.",
    color: "from-emerald-500 to-emerald-600",
    benefits: [
      "256-bit encryption",
      "Two-factor authentication",
      "Regular security audits",
    ],
  },
  {
    icon: CurrencyDollarIcon,
    title: "Best Market Rates",
    description: "Get the highest possible value for your software licenses.",
    color: "from-amber-500 to-amber-600",
    benefits: [
      "Real-time market analysis",
      "Competitive pricing",
      "Price matching guarantee",
    ],
  },
  {
    icon: ClockIcon,
    title: "Quick Process",
    description: "Complete the entire process in minutes, not days.",
    color: "from-rose-500 to-rose-600",
    benefits: [
      "Instant valuation",
      "Fast payment processing",
      "24/7 availability",
    ],
  },
  {
    icon: UserGroupIcon,
    title: "24/7 Support",
    description: "Our dedicated team is always ready to assist you.",
    color: "from-indigo-500 to-indigo-600",
    benefits: ["Live chat support", "Phone support", "Email support"],
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section
      id="features"
      className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden perspective-1000 py-16 md:py-24"
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.h2
            className="heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="subheading text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the best in software license trading
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg relative overflow-hidden h-full"
                whileHover={{
                  y: -5,
                  rotateX: 5,
                  rotateY: 5,
                  z: 50,
                }}
                transition={{ duration: 0.2 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                {/* Icon with 3D rotation */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{
                    rotateX: 360,
                    rotateY: 360,
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {feature.description}
                </motion.p>

                {/* Benefits list with 3D effects */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + i * 0.1,
                      }}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotateX: [0, 180, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover effect line with 3D transform */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{
                    scaleX: 1,
                    rotateX: 180,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 3D Decorative elements */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-primary-100 dark:bg-primary-900 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotateX: [0, 15, 0],
            rotateY: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 bg-primary-100 dark:bg-primary-900 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
            rotateX: [0, -15, 0],
            rotateY: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
      </motion.div>
    </section>
  );
};

export default Features;
