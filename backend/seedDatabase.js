/**
 * Seed database with demo products and users
 * Run: node backend/seedDatabase.js
 */

require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");
const User = require("./models/User");
const connectDB = require("./config/db");

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});

    console.log("Database cleared");

    // Create demo users
    const users = await User.create([
      {
        firstName: "John",
        lastName: "Doe",
        email: "user@example.com",
        password: "password",
        role: "user",
        phone: "+1234567890",
        address: {
          street: "123 Main St",
          city: "New York",
          state: "NY",
          zipCode: "10001",
          country: "USA",
        },
      },
      {
        firstName: "Admin",
        lastName: "User",
        email: "admin@example.com",
        password: "password",
        role: "admin",
        phone: "+1987654321",
      },
    ]);

    console.log("Users created:", users.length);

    // Create demo products
    const products = await Product.create([
      {
        name: "Professional Solar Cleaning Solution",
        description:
          "High-efficiency biodegradable cleaning solution specifically formulated for solar panels. Safe for all panel types and coatings.",
        price: 49.99,
        category: "cleaning-solution",
        specifications: {
          volume: "1 Liter",
          concentration: "10%",
          material: "Biodegradable",
          weight: "1.2 kg",
        },
        availability: true,
        stock: 100,
        images: [
          {
            filename: "sample-1.jpg",
            url: "/uploads/sample-1.jpg",
          },
        ],
      },
      {
        name: "Solar Panel Cleaning Kit",
        description:
          "Complete cleaning kit including brush, squeegee, cleaning solution, and safety equipment. Professional grade.",
        price: 129.99,
        category: "equipment",
        specifications: {
          volume: "Complete Set",
          concentration: "N/A",
          material: "Stainless Steel & Microfiber",
          weight: "3.5 kg",
        },
        availability: true,
        stock: 50,
        images: [
          {
            filename: "sample-2.jpg",
            url: "/uploads/sample-2.jpg",
          },
        ],
      },
      {
        name: "Microfiber Cleaning Cloth",
        description:
          "Premium microfiber cloths designed for streak-free cleaning. Pack of 10 cloths.",
        price: 19.99,
        category: "accessories",
        specifications: {
          volume: "Pack of 10",
          concentration: "N/A",
          material: "Microfiber",
          weight: "0.5 kg",
        },
        availability: true,
        stock: 200,
        images: [
          {
            filename: "sample-3.jpg",
            url: "/uploads/sample-3.jpg",
          },
        ],
      },
      {
        name: "Eco-Friendly Cleaning Tablets",
        description:
          "Concentrated cleaning tablets that dissolve in water. Each tablet cleans 500 sq ft of solar panels.",
        price: 34.99,
        category: "cleaning-solution",
        specifications: {
          volume: "Box of 20 tablets",
          concentration: "15%",
          material: "Eco-friendly compounds",
          weight: "0.8 kg",
        },
        availability: true,
        stock: 75,
        images: [
          {
            filename: "sample-4.jpg",
            url: "/uploads/sample-4.jpg",
          },
        ],
      },
      {
        name: "Telescopic Solar Panel Brush",
        description:
          "Adjustable length brush (6-12 feet) with soft bristles. Perfect for reaching high panels safely.",
        price: 59.99,
        category: "equipment",
        specifications: {
          volume: "Telescopic 6-12ft",
          concentration: "N/A",
          material: "Aluminum & Nylon",
          weight: "1.5 kg",
        },
        availability: true,
        stock: 40,
        images: [
          {
            filename: "sample-5.jpg",
            url: "/uploads/sample-5.jpg",
          },
        ],
      },
      {
        name: "Water-Fed Cleaning Pole System",
        description:
          "Complete water-fed system including pump, hose, and nozzles. Professional quality for large installations.",
        price: 249.99,
        category: "equipment",
        specifications: {
          volume: "Complete System",
          concentration: "N/A",
          material: "Stainless Steel",
          weight: "8 kg",
        },
        availability: true,
        stock: 20,
        images: [
          {
            filename: "sample-6.jpg",
            url: "/uploads/sample-6.jpg",
          },
        ],
      },
      {
        name: "Protective Panel Coating",
        description:
          "Hydrophobic coating that prevents dust and dirt adhesion. Extends cleaning intervals by 50%.",
        price: 79.99,
        category: "accessories",
        specifications: {
          volume: "500ml",
          concentration: "5%",
          material: "Hydrophobic polymer",
          weight: "0.6 kg",
        },
        availability: true,
        stock: 60,
        images: [
          {
            filename: "sample-7.jpg",
            url: "/uploads/sample-7.jpg",
          },
        ],
      },
      {
        name: "Cleaning Squeegee (Professional)",
        description:
          "Heavy-duty squeegee with replaceable rubber blade. Ideal for final water removal.",
        price: 24.99,
        category: "accessories",
        specifications: {
          volume: "24 inch",
          concentration: "N/A",
          material: "Stainless Steel & Rubber",
          weight: "0.8 kg",
        },
        availability: true,
        stock: 150,
        images: [
          {
            filename: "sample-8.jpg",
            url: "/uploads/sample-8.jpg",
          },
        ],
      },
    ]);

    console.log("Products created:", products.length);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
