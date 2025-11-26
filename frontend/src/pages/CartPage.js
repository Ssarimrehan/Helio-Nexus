import React from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FiTrash2, FiArrowLeft } from "react-icons/fi";

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-xl text-gray-600 mb-4">
          Please login to view your cart
        </p>
        <Link
          to="/login"
          className="text-primary font-semibold hover:underline"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/products"
          className="flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <FiArrowLeft /> Continue Shopping
        </Link>
        <div className="text-center py-12">
          <p className="text-2xl font-bold mb-4">Your cart is empty</p>
          <p className="text-gray-600 mb-8">
            Add some products to get started!
          </p>
          <Link
            to="/products"
            className="inline-block bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
          >
            Browse Products
          </Link>
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
        <FiArrowLeft /> Continue Shopping
      </Link>

      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item._id}
                className="bg-white p-6 rounded-lg shadow-lg flex gap-6"
              >
                {/* Image */}
                <div className="w-24 h-24 bg-light rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.images && item.images.length > 0 ? (
                    <img
                      src={item.images[0].url}
                      alt={item.name}
                      className="max-h-24 max-w-24 object-contain"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">No image</span>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-primary font-semibold text-lg mb-4">
                    ${item.price.toFixed(2)} each
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity - 1)
                        }
                        className="px-3 py-1 hover:bg-light"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                        className="px-3 py-1 hover:bg-light"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-600 hover:text-red-800 transition flex items-center gap-2"
                    >
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-2">Subtotal</p>
                  <p className="text-2xl font-bold text-primary">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-light p-8 rounded-lg h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Items ({items.length})</span>
              <span className="font-semibold">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold text-primary">FREE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-semibold">Calculated at checkout</span>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="flex justify-between mb-8">
            <span className="text-xl font-bold">Total</span>
            <span className="text-3xl font-bold text-primary">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>

          <Link
            to="/checkout"
            className="w-full bg-primary text-dark py-3 rounded-lg font-semibold hover:bg-secondary transition text-center block mb-4"
          >
            Proceed to Checkout
          </Link>

          <button
            onClick={clearCart}
            className="w-full border-2 border-primary text-primary py-2 rounded-lg font-semibold hover:bg-primary hover:text-dark transition"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
