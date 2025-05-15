import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.company.trim())
      newErrors.company = "Company Name is required";
    if (!formData.licenseType)
      newErrors.licenseType = "License Type is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setLastSubmitted(formData);
        setFormData({
          fullName: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        });
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 font-sans text-gray-900 dark:text-white"
    >
      <div>
        <label htmlFor="fullName" className="block text-base font-medium mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className={`w-full px-4 py-2 rounded-lg border text-base font-normal placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition ${
            errors.fullName
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-800`}
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-base font-medium mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className={`w-full px-4 py-2 rounded-lg border text-base font-normal placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition ${
            errors.email
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-800`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-base font-medium mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Acme Inc."
          className={`w-full px-4 py-2 rounded-lg border text-base font-normal placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition ${
            errors.company
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-800`}
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-500">{errors.company}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="licenseType"
          className="block text-base font-medium mb-2"
        >
          License Type
        </label>
        <select
          id="licenseType"
          name="licenseType"
          value={formData.licenseType}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border text-base font-normal placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition ${
            errors.licenseType
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-800`}
        >
          <option value="">Select License Type</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Adobe">Adobe</option>
          <option value="Autodesk">Autodesk</option>
          <option value="Oracle">Oracle</option>
          <option value="SAP">SAP</option>
          <option value="Other">Other</option>
        </select>
        {errors.licenseType && (
          <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-base font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          placeholder="Please provide details about your license(s)..."
          className={`w-full px-4 py-2 rounded-lg border text-base font-normal placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition ${
            errors.message
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-800`}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitSuccess && (
        <>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center"
          >
            Thank you for your message! We'll get back to you soon.
          </motion.p>
          {lastSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-green-50 dark:bg-green-900/30 p-4 rounded-lg shadow"
            >
              <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">
                Your Submitted Details:
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                <li>
                  <span className="font-medium">Name:</span>{" "}
                  {lastSubmitted.fullName}
                </li>
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  {lastSubmitted.email}
                </li>
                <li>
                  <span className="font-medium">Company:</span>{" "}
                  {lastSubmitted.company}
                </li>
                <li>
                  <span className="font-medium">License Type:</span>{" "}
                  {lastSubmitted.licenseType}
                </li>
                <li>
                  <span className="font-medium">Message:</span>{" "}
                  {lastSubmitted.message}
                </li>
              </ul>
            </motion.div>
          )}
        </>
      )}
    </form>
  );
};

export default ContactForm;
