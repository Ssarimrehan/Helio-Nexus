import React from "react";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Helio Nexus</h1>
          <p className="text-xl opacity-90">
            Powering the Future with Clean Energy Solutions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-light p-8 rounded-lg">
              <p className="text-gray-700 text-lg mb-4">
                Helio Nexus was founded with a simple mission: to help
                businesses and homeowners maximize their solar energy
                investments through professional cleaning solutions.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                We recognized that dirty solar panels lose 15-25% of their
                efficiency, directly impacting energy generation and ROI. This
                inspired us to develop advanced, eco-friendly cleaning products
                specifically designed for solar installations.
              </p>
              <p className="text-gray-700 text-lg">
                Today, we're proud to serve thousands of satisfied customers
                worldwide, helping them generate more clean energy and achieve
                their sustainability goals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-12 rounded-lg">
              <h3 className="text-2xl font-bold text-dark mb-6">
                Key Achievements
              </h3>
              <ul className="space-y-4 text-dark">
                <li className="flex items-start gap-3">
                  <span className="bg-dark text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  <span>Over 50,000+ satisfied customers globally</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-dark text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  <span>5+ years of industry expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-dark text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  <span>Eco-friendly and biodegradable products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-dark text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  <span>Industry-leading customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower the global transition to clean energy by providing
                innovative, accessible, and professional solar panel cleaning
                solutions that maximize energy efficiency and environmental
                impact.
              </p>
            </div>
            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where every solar installation operates at peak
                efficiency, where renewable energy is the primary power source
                for businesses and homes, and where environmental stewardship is
                a shared responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Why Solar Cleaning Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Why Solar Panel Cleaning Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-l-4 border-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Energy Loss Prevention</h3>
              <p className="text-gray-600">
                Dirt, dust, and bird droppings reduce panel efficiency by
                15-25%. Regular cleaning ensures your system generates maximum
                power.
              </p>
            </div>
            <div className="bg-white border-l-4 border-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Extended Lifespan</h3>
              <p className="text-gray-600">
                Professional cleaning protects panel coatings and extends system
                lifespan by preventing corrosion and material degradation.
              </p>
            </div>
            <div className="bg-white border-l-4 border-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Better ROI</h3>
              <p className="text-gray-600">
                Maintaining peak efficiency means faster payback periods and
                greater long-term returns on your solar investment.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-dark text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-xl font-bold mb-3 text-primary">
                Innovation
              </h4>
              <p>
                Continuously developing cutting-edge solutions for solar
                maintenance.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-primary">
                Sustainability
              </h4>
              <p>
                Committed to eco-friendly products that protect our environment.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-primary">Quality</h4>
              <p>
                Delivering professional-grade products that exceed industry
                standards.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-primary">
                Customer Focus
              </h4>
              <p>
                Your satisfaction and success is at the heart of everything we
                do.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
