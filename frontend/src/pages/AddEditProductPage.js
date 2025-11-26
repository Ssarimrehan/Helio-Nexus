import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiUploadCloud, FiX } from "react-icons/fi";
import api from "../utils/api";

const AddEditProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "cleaning-solution",
    stock: "",
    availability: true,
    specifications: {
      volume: "",
      concentration: "",
      material: "",
      weight: "",
    },
  });

  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing) {
      fetchProduct();
    }
  }, [isEditing, id]);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      const product = response.data.data;
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        stock: product.stock,
        availability: product.availability,
        specifications: product.specifications || {},
      });
      setExistingImages(product.images || []);
    } catch (err) {
      setError("Failed to load product");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSpecificationChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      specifications: {
        ...formData.specifications,
        [name]: value,
      },
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const removeNewImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const removeExistingImage = async (filename) => {
    try {
      await api.delete(`/products/${id}/image`, {
        data: { imageFilename: filename },
      });
      setExistingImages(
        existingImages.filter((img) => img.filename !== filename)
      );
    } catch (err) {
      alert("Failed to delete image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("stock", formData.stock);
      formDataToSend.append("availability", formData.availability);
      formDataToSend.append(
        "specifications",
        JSON.stringify(formData.specifications)
      );

      images.forEach((image) => {
        formDataToSend.append("images", image);
      });

      if (isEditing) {
        await api.put(`/products/${id}`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product updated successfully");
      } else {
        await api.post("/products", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product created successfully");
      }

      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 text-primary hover:underline mb-8"
      >
        <FiArrowLeft /> Back to Admin
      </button>

      <h1 className="text-4xl font-bold mb-8">
        {isEditing ? "Edit Product" : "Add New Product"}
      </h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        {/* Basic Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Product Name *
              </label>
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
                Price *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              required
            ></textarea>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              >
                <option value="cleaning-solution">Cleaning Solution</option>
                <option value="equipment">Equipment</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Stock *
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Availability
              </label>
              <input
                type="checkbox"
                name="availability"
                checked={formData.availability}
                onChange={handleChange}
                className="w-4 h-4 text-primary"
              />
              <span className="ml-2 text-sm">
                {formData.availability ? "Available" : "Not Available"}
              </span>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Volume</label>
              <input
                type="text"
                name="volume"
                value={formData.specifications.volume}
                onChange={handleSpecificationChange}
                placeholder="e.g., 500ml"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Concentration
              </label>
              <input
                type="text"
                name="concentration"
                value={formData.specifications.concentration}
                onChange={handleSpecificationChange}
                placeholder="e.g., 10%"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Material
              </label>
              <input
                type="text"
                name="material"
                value={formData.specifications.material}
                onChange={handleSpecificationChange}
                placeholder="e.g., Biodegradable"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Weight</label>
              <input
                type="text"
                name="weight"
                value={formData.specifications.weight}
                onChange={handleSpecificationChange}
                placeholder="e.g., 2kg"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Images */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Images</h2>

          {/* Existing Images */}
          {existingImages.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Current Images</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {existingImages.map((image) => (
                  <div key={image.filename} className="relative">
                    <img
                      src={image.url}
                      alt="Product"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeExistingImage(image.filename)}
                      className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload New Images */}
          <div className="border-2 border-dashed border-primary rounded-lg p-8 text-center">
            <FiUploadCloud size={40} className="mx-auto text-primary mb-4" />
            <p className="text-gray-600 mb-4">
              Drag and drop images or click to select
            </p>
            <input
              type="file"
              onChange={handleImageChange}
              multiple
              accept="image/*"
              className="hidden"
              id="image-input"
            />
            <label
              htmlFor="image-input"
              className="bg-primary text-dark px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition cursor-pointer inline-block"
            >
              Choose Images
            </label>
          </div>

          {/* New Images Preview */}
          {images.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold mb-3">
                Images to Upload ({images.length})
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeNewImage(index)}
                      className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-primary text-dark py-3 rounded-lg font-semibold hover:bg-secondary transition disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : isEditing
              ? "Update Product"
              : "Add Product"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="flex-1 border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditProductPage;
