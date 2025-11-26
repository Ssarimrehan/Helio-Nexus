import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Helio Nexus</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pioneering solar panel cleaning solutions for a cleaner, more
              efficient future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-primary transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <FiMail className="text-primary" />
                <a
                  href="mailto:support@helionexus.com"
                  className="text-gray-300 hover:text-primary transition"
                >
                  support@helionexus.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone className="text-primary" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-primary transition"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <FiMapPin className="text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  123 Solar Avenue, Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition text-xl"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition text-xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; 2025 Helio Nexus. All rights reserved. | Powering the future
            with clean energy solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
