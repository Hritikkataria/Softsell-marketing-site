import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Spring animation for smoother movement
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springY = useSpring(y, springConfig);

  // Sheen animation state
  const [quoteSheen, setQuoteSheen] = useState(false);
  const [learnSheen, setLearnSheen] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden perspective-1000 py-16 md:py-24"
    >
      {/* 3D Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-primary-200 dark:bg-primary-800 rounded-full opacity-50 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
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
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary-300 dark:bg-primary-700 rounded-full opacity-50 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
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
        {/* 3D Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary-400 dark:bg-primary-600 rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360],
            z: [0, 50, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-primary-500 dark:bg-primary-500 rounded-full opacity-30"
          animate={{
            y: [0, 20, 0],
            rotateX: [360, 180, 0],
            rotateY: [360, 180, 0],
            z: [0, -50, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>

      <motion.div
        style={{ opacity, scale, y: springY }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <motion.h1
            className="heading mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your
            </motion.span>
            <motion.span
              className="text-primary-600 block mt-2"
              animate={{
                backgroundPosition: ["0% center", "100% center"],
                rotateX: [0, 5, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
                backgroundImage:
                  "linear-gradient(45deg, #0ea5e9, #3b82f6, #0ea5e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transformStyle: "preserve-3d",
              }}
            >
              Software Licenses
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Into Value
            </motion.span>
          </motion.h1>

          <motion.p
            className="subheading max-w-2xl mx-auto mb-8 text-lg md:text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            SoftSell helps you maximize the value of your software licenses
            through our innovative valuation and management platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            {/* Get a Quote Button with Sheen */}
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 8, rotateY: 12 }}
              whileTap={{ scale: 0.97, rotateX: 0, rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                transformStyle: "preserve-3d",
                position: "relative",
                display: "inline-block",
              }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn btn-primary inline-block relative overflow-hidden"
                onMouseEnter={() => setQuoteSheen(true)}
                onMouseLeave={() => setQuoteSheen(false)}
              >
                {/* Sheen effect */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-full pointer-events-none"
                  animate={{
                    x: quoteSheen ? ["-100%", "100%"] : "-100%",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)",
                    filter: "blur(2px)",
                    zIndex: 2,
                  }}
                />
                <span className="relative z-10">Get a Quote</span>
              </Link>
            </motion.div>
            {/* Learn More Button with Sheen */}
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 8, rotateY: -12 }}
              whileTap={{ scale: 0.97, rotateX: 0, rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                transformStyle: "preserve-3d",
                position: "relative",
                display: "inline-block",
              }}
            >
              <motion.a
                href="#features"
                className="btn btn-secondary group relative overflow-hidden"
                onMouseEnter={() => setLearnSheen(true)}
                onMouseLeave={() => setLearnSheen(false)}
              >
                {/* Sheen effect */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-full pointer-events-none"
                  animate={{
                    x: learnSheen ? ["-100%", "100%"] : "-100%",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)",
                    filter: "blur(2px)",
                    zIndex: 2,
                  }}
                />
                <span className="relative z-10">Learn More</span>
                <ArrowDownIcon className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform relative z-10" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stats section with 3D effects */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              {
                number: "500+",
                label: "Licenses Sold",
                color: "from-blue-500 to-blue-600",
                value: "523",
              },
              {
                number: "$2M+",
                label: "Total Value",
                color: "from-green-500 to-green-600",
                value: "$2,340,000",
              },
              {
                number: "98%",
                label: "Success Rate",
                color: "from-purple-500 to-purple-600",
                value: "98.7%",
              },
              {
                number: "24h",
                label: "Average Time",
                color: "from-orange-500 to-orange-600",
                value: "18h 32m",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  z: 50,
                }}
                transition={{ duration: 0.2 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Animated number */}
                  <motion.h3
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${
                        stat.color.split(" ")[1]
                      }, ${stat.color.split(" ")[3]})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                  {/* Dummy value */}
                  <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mt-2">
                    {stat.value}
                  </p>
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 3D Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          rotateX: [0, 15, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <ArrowDownIcon className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
