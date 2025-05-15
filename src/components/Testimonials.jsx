import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content:
      "SoftSell made selling my unused licenses incredibly easy. The process was smooth and I got a great value for my licenses.",
    rating: 5,
    company: "TechCorp Inc.",
    date: "2 months ago",
  },
  {
    name: "Michael Chen",
    role: "IT Manager",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content:
      "The platform is intuitive and the support team is always helpful. I've recommended SoftSell to all my colleagues.",
    rating: 5,
    company: "Global Solutions Ltd.",
    date: "1 month ago",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content:
      "I was skeptical at first, but SoftSell exceeded my expectations. The valuation was fair and the payment was quick.",
    rating: 5,
    company: "Innovate Systems",
    date: "3 weeks ago",
  },
];

const Testimonials = () => {
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
      id="testimonials"
      className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden perspective-1000 py-16 md:py-24"
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
            What Our Users Say
          </motion.h2>
          <motion.p
            className="subheading text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of satisfied customers who trust SoftSell
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg relative h-full"
                whileHover={{
                  y: -5,
                  rotateX: 5,
                  rotateY: 5,
                  z: 50,
                }}
                transition={{ duration: 0.2 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Quote icon with 3D rotation */}
                <motion.div
                  className="absolute top-4 right-4 text-primary-500 opacity-10 transform group-hover:scale-110 transition-transform duration-300"
                  animate={{
                    rotateX: [0, 180, 360],
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </motion.div>

                {/* Rating stars with 3D spring animation */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotateX: -90 }}
                      animate={
                        isInView
                          ? { scale: 1, rotateX: 0 }
                          : { scale: 0, rotateX: -90 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: index * 0.2 + i * 0.1,
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <StarIcon className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                >
                  "{testimonial.content}"
                </motion.p>

                <div className="flex items-center">
                  <motion.div
                    className="relative"
                    whileHover={{
                      scale: 1.1,
                      rotateY: 180,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    <img
                      className="w-12 h-12 rounded-full object-cover relative z-10"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </motion.div>
                  <motion.div
                    className="ml-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                  >
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {testimonial.date}
                    </p>
                  </motion.div>
                </div>

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
          className="absolute top-1/2 left-0 w-32 h-32 bg-primary-100 dark:bg-primary-900 rounded-full filter blur-2xl opacity-20 -translate-x-1/2 -translate-y-1/2"
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
          className="absolute top-1/2 right-0 w-32 h-32 bg-primary-100 dark:bg-primary-900 rounded-full filter blur-2xl opacity-20 translate-x-1/2 -translate-y-1/2"
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

export default Testimonials;
