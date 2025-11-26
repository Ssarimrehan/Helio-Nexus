# Helio Nexus Backend

Backend server for Helio Nexus - Solar Panel Cleaning Products

## Installation

```bash
cd backend
npm install
```

## Environment Setup

Create a `.env` file in the backend directory:

```
MONGODB_URI=mongodb://localhost:27017/helio-nexus
JWT_SECRET=your_jwt_secret_key_change_in_production
JWT_EXPIRE=7d
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## Running the Server

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

## API Endpoints

### Authentication

- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get user profile (protected)
- PUT `/api/auth/profile` - Update user profile (protected)

### Products

- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product
- POST `/api/products` - Create product (admin only)
- PUT `/api/products/:id` - Update product (admin only)
- DELETE `/api/products/:id` - Delete product (admin only)

### Orders

- POST `/api/orders` - Create order (protected)
- GET `/api/orders` - Get user orders (protected)
- GET `/api/orders/:id` - Get single order (protected)
- GET `/api/orders/admin/all` - Get all orders (admin only)
- PUT `/api/orders/:id/status` - Update order status (admin only)
- GET `/api/orders/admin/stats` - Get order statistics (admin only)
