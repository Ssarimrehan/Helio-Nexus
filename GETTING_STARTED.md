# Getting Started Guide

## Quick Start (5 minutes)

### 1. Install Dependencies

**Backend:**

```bash
cd backend
npm install
```

**Frontend:**

```bash
cd frontend
npm install
```

### 2. Setup MongoDB

Option A: Local MongoDB

```bash
# Start MongoDB service on your machine
mongod
```

Option B: MongoDB Atlas (Cloud)

- Go to mongodb.com/cloud/atlas
- Create free cluster
- Get connection string

### 3. Configure Environment Variables

**Backend** (.env):

```
MONGODB_URI=mongodb://localhost:27017/helio-nexus
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
```

**Frontend** (.env):

```
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Seed Database (Optional)

```bash
cd backend
node seedDatabase.js
```

This creates demo users and products.

### 5. Start Development Servers

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

Backend runs on http://localhost:5000

**Terminal 2 - Frontend:**

```bash
cd frontend
npm start
```

Frontend runs on http://localhost:3000

### 6. Login with Demo Accounts

**User Account:**

- Email: `user@example.com`
- Password: `password`

**Admin Account:**

- Email: `admin@example.com`
- Password: `password`

## Testing Checklist

- [ ] Browse products on home page
- [ ] Search and filter products
- [ ] View product details
- [ ] Add products to cart
- [ ] Update cart quantities
- [ ] Proceed to checkout
- [ ] Complete purchase
- [ ] View order history (as user)
- [ ] Login as admin
- [ ] Add new product
- [ ] Edit product
- [ ] Delete product
- [ ] Upload product images

## Troubleshooting

### Port Already in Use

Change ports in .env:

```
PORT=5001  # Backend
# Frontend: npm start -- --port 3001
```

### MongoDB Connection Error

Check:

1. MongoDB service is running
2. Connection string is correct
3. Database user has correct permissions
4. IP is whitelisted (for Atlas)

### CORS Errors

Ensure `FRONTEND_URL` in backend matches frontend URL:

```
FRONTEND_URL=http://localhost:3000
```

### Image Upload Not Working

1. Check `uploads` folder exists
2. Verify file permissions
3. Check multer middleware in backend

## Project Structure Overview

```
Helio-Nexus/
├── backend/               # Express API server
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── controllers/       # Business logic
│   ├── middleware/        # Auth, upload
│   └── server.js         # Entry point
│
├── frontend/             # React app
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable components
│   │   ├── context/      # React Context
│   │   └── App.js        # Main component
│   └── public/
│
└── README.md             # This file
```

## Next Steps

1. **Customize Content**

   - Update company info in Footer
   - Modify homepage copy
   - Add real product images

2. **Add Features**

   - Payment gateway (Stripe)
   - Email notifications
   - Customer reviews
   - Wishlist

3. **Deploy**

   - See DEPLOYMENT.md for production setup
   - Test thoroughly before deploying

4. **Optimize**
   - Add analytics
   - Optimize images
   - Set up CDN
   - Enable caching

## Key Features Explained

### Shopping Cart

- Local storage persistence
- Real-time updates
- Add/remove/update quantities

### Authentication

- JWT token-based
- User and Admin roles
- Protected routes

### Admin Panel

- Product management (CRUD)
- Image upload
- Inventory tracking
- Order management

### Responsive Design

- Mobile-first approach
- Works on all devices
- Touch-friendly interface

## Support & Help

- Check README.md for detailed documentation
- Review DEPLOYMENT.md for production setup
- Backend API docs in backend/README.md
- Frontend docs in frontend/README.md

## Customization Tips

### Change Brand Colors

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
}
```

### Update Company Info

- Footer: `frontend/src/components/Footer.js`
- Contact: `frontend/src/pages/ContactPage.js`
- About: `frontend/src/pages/AboutPage.js`

### Add Product Categories

Update `frontend/src/pages/ProductsPage.js`:

```javascript
<option value="new-category">New Category</option>
```

## Performance Tips

1. **Image Optimization**

   - Compress images before upload
   - Use WebP format
   - Implement lazy loading

2. **Database**

   - Add indexes on frequently queried fields
   - Use pagination for large datasets

3. **Frontend**

   - Code splitting
   - Lazy load pages
   - Minimize bundle size

4. **Backend**
   - Enable gzip compression
   - Cache frequently accessed data
   - Use CDN for static files

---

Happy coding! 🚀
