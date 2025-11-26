const Product = require("../models/Product");
const fs = require("fs");
const path = require("path");

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, search } = req.query;

    let filter = {};

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create product (Admin only)
exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      specifications,
      availability,
      stock,
    } = req.body;

    // Process uploaded images
    const images = [];
    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        images.push({
          filename: file.filename,
          url: `/uploads/${file.filename}`,
        });
      });
    }

    const product = new Product({
      name,
      description,
      price,
      category,
      specifications: JSON.parse(specifications || "{}"),
      images,
      availability,
      stock,
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    // Clean up uploaded files if there's an error
    if (req.files) {
      req.files.forEach((file) => {
        fs.unlink(path.join("uploads", file.filename), (err) => {
          if (err) console.log(err);
        });
      });
    }
    res.status(500).json({ message: error.message });
  }
};

// Update product (Admin only)
exports.updateProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      specifications,
      availability,
      stock,
    } = req.body;

    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update basic fields
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (category) product.category = category;
    if (specifications) product.specifications = JSON.parse(specifications);
    if (availability !== undefined) product.availability = availability;
    if (stock !== undefined) product.stock = stock;

    // Handle new images
    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        product.images.push({
          filename: file.filename,
          url: `/uploads/${file.filename}`,
        });
      });
    }

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    if (req.files) {
      req.files.forEach((file) => {
        fs.unlink(path.join("uploads", file.filename), (err) => {
          if (err) console.log(err);
        });
      });
    }
    res.status(500).json({ message: error.message });
  }
};

// Delete product (Admin only)
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete associated images
    if (product.images && product.images.length > 0) {
      product.images.forEach((image) => {
        fs.unlink(path.join("uploads", image.filename), (err) => {
          if (err) console.log(err);
        });
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete image from product
exports.deleteProductImage = async (req, res) => {
  try {
    const { imageFilename } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $pull: { images: { filename: imageFilename } } },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete file from disk
    fs.unlink(path.join("uploads", imageFilename), (err) => {
      if (err) console.log(err);
    });

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
