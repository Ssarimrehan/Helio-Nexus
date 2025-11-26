import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { getTotalItems } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="bg-dark text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold">
              HN
            </div>
            <span className="font-bold text-xl hidden sm:inline">
              Helio Nexus
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-primary transition">
              Products
            </Link>
            <Link to="/about" className="hover:text-primary transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="relative hover:text-primary transition">
              <FiShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Auth Menu */}
            {isAuthenticated && user ? (
              <div className="hidden md:flex items-center space-x-4">
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="bg-primary text-dark px-3 py-1 rounded hover:bg-secondary transition"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-primary transition"
                >
                  <FiLogOut size={20} />
                  <span className="hidden lg:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link to="/login" className="hover:text-primary transition">
                  Login
                </Link>
                <span className="text-gray-500">/</span>
                <Link
                  to="/signup"
                  className="bg-primary text-dark px-3 py-1 rounded hover:bg-secondary transition"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <hr className="border-gray-700" />
            {isAuthenticated && user ? (
              <>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="block bg-primary text-dark px-3 py-2 rounded hover:bg-secondary transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left hover:text-primary transition py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block hover:text-primary transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block bg-primary text-dark px-3 py-2 rounded hover:bg-secondary transition"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
