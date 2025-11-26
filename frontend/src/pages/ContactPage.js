import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend endpoint
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-light p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <FiMail size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">
              <a
                href="mailto:support@helionexus.com"
                className="hover:text-primary transition"
              >
                support@helionexus.com
              </a>
            </p>
          </div>

          <div className="bg-light p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <FiPhone size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">
              <a
                href="tel:+1234567890"
                className="hover:text-primary transition"
              >
                +1 (234) 567-890
              </a>
            </p>
          </div>

          <div className="bg-light p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <FiMapPin size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-600">
              123 Solar Avenue, Tech City, TC 12345
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-dark py-3 rounded-lg font-semibold hover:bg-secondary transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-3xl font-bold mb-6">FAQs</h2>
            <div className="space-y-4">
              <div className="bg-light p-4 rounded-lg">
                <h3 className="font-bold mb-2">What products do you offer?</h3>
                <p className="text-sm text-gray-600">
                  We offer professional-grade solar panel cleaning solutions
                  including cleaning agents, equipment, and accessories.
                </p>
              </div>

              <div className="bg-light p-4 rounded-lg">
                <h3 className="font-bold mb-2">Do you ship internationally?</h3>
                <p className="text-sm text-gray-600">
                  Yes, we ship to most countries. Shipping costs will be
                  calculated at checkout.
                </p>
              </div>

              <div className="bg-light p-4 rounded-lg">
                <h3 className="font-bold mb-2">What is your return policy?</h3>
                <p className="text-sm text-gray-600">
                  We offer a 30-day money-back guarantee on all products if
                  you're not satisfied.
                </p>
              </div>

              <div className="bg-light p-4 rounded-lg">
                <h3 className="font-bold mb-2">How long does delivery take?</h3>
                <p className="text-sm text-gray-600">
                  Standard delivery takes 5-7 business days. Express options are
                  available at checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
