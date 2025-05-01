import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import React from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSending, setISSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "NAME IS REQUIRED";
        if (!formData.email) {
            errors.email = "EMAIL IS REQUIRED";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "EMAIL IS INVALID";
        }
        if (!formData.message) errors.message = "MESSAGE IS REQUIRED";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        } else {
            setErrors({});
            setISSending(true);

            emailjs
                .send(
                    "service_vggcc0d",
                    "template_qdfjq3u",
                    formData,
                    "cVTBWBlUxZeVSzSc3"
                )
                .then(() => {
                    toast.success("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                })
                .catch((error) => {
                    console.error("Error sending message:", error);
                    toast.error("Error sending message. Please try again later.");
                })
                .finally(() => {
                    setISSending(false);
                });
        }
    };

    return (
        <section className="pt-20 pb-24" id="contact">
        <div className="max-w-[1200px] mx-auto px-4">
          <Toaster />
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-4xl font-semibold tracking-tighter mb-10 text-white drop-shadow-lg"
          >
            LET'S CONNECT
          </motion.h2>
      
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-xl border border-stone-50/30 bg-black/60 backdrop-blur-sm p-6 text-white drop-shadow-sm"
          >
            <div className="mb-4 flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
              <div className="lg:w-1/2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  aria-label="Name"
                  aria-invalid={!!errors.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stone-50/30 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-sm text-rose-400 mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>
      
              <div className="lg:w-1/2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  aria-label="Email"
                  aria-invalid={!!errors.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stone-50/30 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-sm text-rose-400 mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </div>
      
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                aria-label="Message"
                aria-invalid={!!errors.message}
                onChange={handleChange}
                rows="6"
                className="w-full rounded-lg border border-stone-50/30 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-sm text-rose-400 mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>
      
            <button
              type="submit"
              className={`w-full rounded border border-stone-50/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition ${
                isSending ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSending}
            >
              <div className="flex items-center justify-center gap-2">
                {isSending ? "Sending..." : "Send"}
                <FiSend />
              </div>
            </button>
          </motion.form>
        </div>
      </section>
      
    );
};

export default ContactForm;
