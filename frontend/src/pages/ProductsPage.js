import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiFilter } from "react-icons/fi";
import api from "../utils/api";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const [cartNotifications, setCartNotifications] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, search, category, priceRange]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/products");
      setProducts(response.data.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load products");
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !category || product.category === category;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      alert("Please login to add items to cart");
      return;
    }
    addToCart(product, 1);
    setCartNotifications({ ...cartNotifications, [product._id]: true });
    setTimeout(() => {
      setCartNotifications({ ...cartNotifications, [product._id]: false });
    }, 2000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="lg:col-span-1">
          <div className="bg-light p-6 rounded-lg sticky top-24">
            <div className="flex items-center gap-2 mb-6">
              <FiFilter size={20} />
              <h2 className="text-xl font-bold">Filters</h2>
            </div>

            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Search</label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              >
                <option value="">All Categories</option>
                <option value="cleaning-solution">Cleaning Solution</option>
                <option value="equipment">Equipment</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Price Range
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full"
                />
                <div className="text-sm text-gray-600">
                  ${priceRange[0]} - ${priceRange[1]}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSearch("");
                setCategory("");
                setPriceRange([0, 1000]);
              }}
              className="w-full bg-primary text-dark py-2 rounded-lg font-semibold hover:bg-secondary transition"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {error && <div className="text-red-600 mb-8">{error}</div>}

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No products found. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
                >
                  {/* Image */}
                  <Link to={`/product/${product._id}`}>
                    <div className="bg-light h-48 flex items-center justify-center overflow-hidden">
                      {product.images && product.images.length > 0 ? (
                        <img
                          src={product.images[0].url}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-110 transition"
                        />
                      ) : (
                        <span className="text-gray-400">No image</span>
                      )}
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="p-4">
                    <Link
                      to={`/product/${product._id}`}
                      className="hover:text-primary transition"
                    >
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          product.availability && product.stock > 0
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.availability && product.stock > 0
                          ? "In Stock"
                          : "Out"}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        to={`/product/${product._id}`}
                        className="flex-1 bg-dark text-white py-2 rounded-lg text-center hover:bg-gray-900 transition font-semibold"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={
                          !product.availability ||
                          product.stock === 0 ||
                          cartNotifications[product._id]
                        }
                        className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg font-semibold transition ${
                          cartNotifications[product._id]
                            ? "bg-green-500 text-white"
                            : product.availability && product.stock > 0
                            ? "bg-primary text-dark hover:bg-secondary"
                            : "bg-gray-300 text-gray-600 cursor-not-allowed"
                        }`}
                      >
                        <FiShoppingCart size={16} />{" "}
                        {cartNotifications[product._id] ? "Added" : "Add"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
