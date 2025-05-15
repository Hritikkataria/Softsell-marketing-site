import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const hardcodedResponses = {
    hello: "Hi there! How can I help you with your software licenses today?",
    "how does it work":
      "Our platform makes it easy to sell your software licenses. Simply upload your license details, get an instant valuation, and receive payment quickly and securely.",
    "what licenses":
      "We accept a wide range of software licenses including Microsoft, Adobe, Autodesk, and many more. Contact us to check if your specific license is eligible.",
    pricing:
      "Our pricing is competitive and transparent. We offer the best market rates for your licenses, with no hidden fees.",
    contact:
      "You can reach us at support@softsell.com or call us at +1 (555) 123-4567. Our team is available 24/7 to assist you.",
    default:
      "I'm not sure I understand. Could you please rephrase your question? You can also contact our support team for more specific assistance.",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { type: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Get AI response
    const response = getResponse(input.toLowerCase());
    const aiMessage = { type: "ai", content: response };

    // Add AI response with a slight delay
    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 500);

    setInput("");
  };

  const getResponse = (query) => {
    for (const [key, value] of Object.entries(hardcodedResponses)) {
      if (query.includes(key)) {
        return value;
      }
    }
    return hardcodedResponses.default;
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-500 text-white p-4 rounded-full shadow-lg hover:bg-primary-600 transition-colors duration-200 z-50"
      >
        <ChatBubbleLeftIcon className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl z-50 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-primary-500 text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">Chat with SoftSell AI</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-200 transition-colors duration-200"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === "user"
                          ? "bg-primary-500 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chat;
