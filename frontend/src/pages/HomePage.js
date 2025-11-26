import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiSun, FiTrendingUp, FiShield } from "react-icons/fi";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maximize Your Solar Panel Efficiency
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Professional solar panel cleaning solutions designed for optimal
                energy generation and long-term panel health.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/products"
                  className="bg-dark text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition flex items-center gap-2"
                >
                  Shop Now <FiArrowRight />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-dark text-dark px-8 py-3 rounded-lg font-semibold hover:bg-dark hover:text-primary transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-96 bg-dark bg-opacity-20 rounded-lg flex items-center justify-center">
                <FiSun size={200} className="text-dark opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Helio Nexus?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <FiSun size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Maximum Efficiency</h3>
              <p className="text-gray-600">
                Our advanced cleaning solutions ensure your solar panels
                maintain peak performance, increasing energy output by up to
                25%.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <FiShield size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Durable & Safe</h3>
              <p className="text-gray-600">
                Specially formulated to protect panel coatings and extend
                lifespan while being eco-friendly and safe for all surfaces.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <FiTrendingUp size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Cost Effective</h3>
              <p className="text-gray-600">
                Reduce maintenance costs and maximize ROI with our
                professional-grade cleaning products and equipment solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Helio Nexus Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Helio Nexus</h2>
              <p className="text-gray-600 text-lg mb-4">
                Helio Nexus is a leading innovator in solar panel cleaning
                solutions, dedicated to helping businesses and homeowners
                maximize their renewable energy investments.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our mission is to ensure that every solar installation operates
                at peak efficiency through professional-grade cleaning products
                and equipment. We believe clean solar panels are the foundation
                of a sustainable future.
              </p>
              <p className="text-gray-600 text-lg">
                With years of expertise in renewable energy maintenance, we've
                developed proprietary formulations that protect your investment
                while delivering superior cleaning results. Our commitment to
                innovation and customer satisfaction drives everything we do.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-lg">
              <h3 className="text-2xl font-bold text-dark mb-6">Our Mission</h3>
              <p className="text-dark text-lg leading-relaxed">
                To empower the global transition to clean energy by providing
                innovative, accessible, and professional solar panel cleaning
                solutions that maximize energy efficiency and environmental
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Optimize Your Solar Performance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Browse our complete range of professional solar cleaning products
            today.
          </p>
          <Link
            to="/products"
            className="bg-primary text-dark px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition inline-flex items-center gap-2"
          >
            Explore Products <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
