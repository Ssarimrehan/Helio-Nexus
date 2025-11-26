import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiShoppingCart, FiStar } from "react-icons/fi";
import api from "../utils/api";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load product");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert("Please login to add items to cart");
      return;
    }
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/products"
          className="flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <FiArrowLeft /> Back to Products
        </Link>
        <div className="text-center text-xl text-red-600">
          {error || "Product not found"}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/products"
        className="flex items-center gap-2 text-primary hover:underline mb-8"
      >
        <FiArrowLeft /> Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          {product.images && product.images.length > 0 ? (
            <div className="space-y-4">
              <div className="bg-light rounded-lg flex items-center justify-center h-96">
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="max-h-96 max-w-full object-contain"
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-light rounded-lg p-2 cursor-pointer hover:shadow-lg transition"
                    >
                      <img
                        src={img.url}
                        alt={`${product.name} ${idx}`}
                        className="w-full h-20 object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-light rounded-lg flex items-center justify-center h-96">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {product.rating > 0 && (
                <>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={16}
                        className={
                          i < Math.round(product.rating)
                            ? "fill-primary text-primary"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">({product.rating})</span>
                </>
              )}
            </div>
          </div>

          <div className="text-3xl font-bold text-primary mb-6">
            ${product.price.toFixed(2)}
          </div>

          <div className="mb-6">
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
          </div>

          {/* Availability */}
          <div className="mb-6">
            <span
              className={`px-4 py-2 rounded-lg font-semibold ${
                product.availability && product.stock > 0
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.availability && product.stock > 0
                ? "In Stock"
                : "Out of Stock"}
            </span>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className="mb-8 bg-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {product.specifications.volume && (
                  <div>
                    <p className="text-gray-600">Volume</p>
                    <p className="font-semibold">
                      {product.specifications.volume}
                    </p>
                  </div>
                )}
                {product.specifications.concentration && (
                  <div>
                    <p className="text-gray-600">Concentration</p>
                    <p className="font-semibold">
                      {product.specifications.concentration}
                    </p>
                  </div>
                )}
                {product.specifications.material && (
                  <div>
                    <p className="text-gray-600">Material</p>
                    <p className="font-semibold">
                      {product.specifications.material}
                    </p>
                  </div>
                )}
                {product.specifications.weight && (
                  <div>
                    <p className="text-gray-600">Weight</p>
                    <p className="font-semibold">
                      {product.specifications.weight}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4 items-center mb-8">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-light"
              >
                −
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-16 text-center border-l border-r border-gray-300 py-2"
                min="1"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-light"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={
                !product.availability || product.stock === 0 || addedToCart
              }
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition ${
                addedToCart
                  ? "bg-green-500 text-white"
                  : product.availability && product.stock > 0
                  ? "bg-primary text-dark hover:bg-secondary"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              <FiShoppingCart />{" "}
              {addedToCart ? "Added to Cart!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
