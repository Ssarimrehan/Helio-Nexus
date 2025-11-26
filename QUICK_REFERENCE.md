# Quick Reference Guide

## 🚀 Start Development (2 commands)

```bash
# Terminal 1: Start Backend
cd backend && npm run dev

# Terminal 2: Start Frontend
cd frontend && npm start
```

**Access:**

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API: http://localhost:5000/api

---

## 🔑 Demo Credentials

**User Account:**

```
Email: user@example.com
Password: password
```

**Admin Account:**

```
Email: admin@example.com
Password: password
```

---

## 📁 Important Files Quick Access

### Backend

```
server.js              - Main server
controllers/           - Business logic
models/               - Database schemas
routes/               - API endpoints
middleware/           - Auth, upload
.env                  - Configuration
```

### Frontend

```
App.js                - Main component
pages/                - Page components
components/           - Reusable parts
context/              - State management
.env                  - Configuration
```

---

## 🔧 Common Commands

```bash
# Backend
cd backend
npm install           # Install dependencies
npm run dev           # Start development server
npm start             # Start production server
node seedDatabase.js  # Load demo data

# Frontend
cd frontend
npm install           # Install dependencies
npm start             # Start development server
npm run build         # Build for production
```

---

## 🌐 API Routes Summary

| Method | Endpoint           | Purpose            | Auth  |
| ------ | ------------------ | ------------------ | ----- |
| POST   | /auth/register     | Register user      | No    |
| POST   | /auth/login        | Login user         | No    |
| GET    | /auth/profile      | Get profile        | Yes   |
| PUT    | /auth/profile      | Update profile     | Yes   |
| GET    | /products          | List all products  | No    |
| GET    | /products/:id      | Get single product | No    |
| POST   | /products          | Create product     | Admin |
| PUT    | /products/:id      | Update product     | Admin |
| DELETE | /products/:id      | Delete product     | Admin |
| POST   | /orders            | Create order       | User  |
| GET    | /orders            | Get user orders    | User  |
| GET    | /orders/:id        | Get order details  | User  |
| GET    | /orders/admin/all  | Get all orders     | Admin |
| PUT    | /orders/:id/status | Update status      | Admin |

---

## 📱 Key Pages

**Public Pages:**

- `/` - Homepage
- `/products` - Product listing
- `/product/:id` - Product details
- `/about` - About page
- `/contact` - Contact page
- `/login` - Login page
- `/signup` - Sign up page

**User Pages (Protected):**

- `/cart` - Shopping cart
- `/checkout` - Order checkout

**Admin Pages (Protected):**

- `/admin` - Admin dashboard
- `/admin/add-product` - Add product
- `/admin/edit-product/:id` - Edit product

---

## 🔐 Authentication Flow

```
User Input
    ↓
Login/Register API Call
    ↓
Backend validates & creates JWT
    ↓
Token stored in localStorage
    ↓
Token included in all API requests
    ↓
Backend verifies token
    ↓
Access granted/denied based on role
```

---

## 🛒 Cart Flow

```
User Browsing
    ↓
Click "Add to Cart"
    ↓
CartContext adds item
    ↓
State updates (localStorage)
    ↓
Cart badge updates
    ↓
User views cart
    ↓
Updates quantities
    ↓
Checkout → Place Order
```

---

## 📦 Database Collections

### Users

```javascript
{
  firstName, lastName, email, password, role, phone, address, timestamps;
}
```

### Products

```javascript
{
  name,
    description,
    price,
    category,
    specifications,
    images,
    stock,
    availability,
    rating,
    reviews,
    timestamps;
}
```

### Orders

```javascript
{
  user, items[], totalAmount, status,
  shippingAddress, paymentStatus, timestamps
}
```

---

## 🎨 Tailwind Classes Used

**Colors:**

- `primary` - Orange (#FFA500)
- `secondary` - Gold (#FFD700)
- `dark` - Dark gray (#1F2937)
- `light` - Light gray (#F9FAFB)

**Common Classes:**

- `max-w-7xl` - Container width
- `mx-auto` - Center container
- `px-4` - Horizontal padding
- `py-12` - Vertical padding
- `bg-light` - Light background
- `text-primary` - Primary text color

---

## 🚨 Troubleshooting Quick Fixes

```bash
# Port already in use
lsof -i :5000                # Find process
kill -9 <PID>               # Kill process

# MongoDB connection failed
# Check: connection string, IP whitelist, credentials

# Frontend can't reach backend
# Check: .env has REACT_APP_API_URL
# Check: Backend is running
# Check: CORS enabled

# Clear cache
npm cache clean --force      # NPM cache
rm -rf node_modules          # Delete modules
rm package-lock.json         # Delete lock file
npm install                  # Reinstall

# Database issues
db.dropDatabase()            # Clear MongoDB
node seedDatabase.js         # Reload demo data
```

---

## 📊 File Count Summary

```
Backend Files:    15 implementation + 3 config = 18
Frontend Files:   21 implementation + 3 config = 24
Configuration:    6 files (.env, .env.example, etc)
Documentation:    6 files (README, guides, etc)
Total:           54 files
```

---

## 🔗 Navigation Flow

```
Home Page
├── Products → Product Details
│   ├── Add to Cart → View Cart
│   │   └── Checkout → Order Confirmation
│   └── Back to Products
├── About
├── Contact
├── Login → Dashboard/Admin
└── Sign Up → Welcome
```

---

## 💡 Pro Tips

1. **Use demo data first** before adding your own products
2. **Test checkout flow** thoroughly before deployment
3. **Monitor console errors** in both frontend and backend
4. **Save frequently** if editing configuration files
5. **Use Postman** to test API endpoints
6. **Check browser DevTools** for network/console errors
7. **Read error messages carefully** - they're usually helpful
8. **Backup MongoDB** before major changes

---

## 📚 Documentation by Need

| I want to...           | Read...            |
| ---------------------- | ------------------ |
| Get started quickly    | GETTING_STARTED.md |
| Understand the project | PROJECT_SUMMARY.md |
| Deploy to production   | DEPLOYMENT.md      |
| See all files          | DIRECTORY_TREE.md  |
| Follow a checklist     | CHECKLIST.md       |
| API details            | backend/README.md  |
| Frontend details       | frontend/README.md |

---

## 🎯 Next Action Items

**Today (30 minutes):**

1. Install dependencies
2. Start both servers
3. Test homepage

**This Week:**

1. Set up MongoDB
2. Seed demo data
3. Test all features
4. Customize branding

**Next Week:**

1. Deploy backend
2. Deploy frontend
3. Configure production
4. Start taking orders

---

## ✨ You Have

✅ Complete backend API
✅ Professional frontend UI
✅ User authentication
✅ Shopping system
✅ Admin dashboard
✅ Database models
✅ Production ready
✅ Full documentation

**You're ready to go live!** 🚀

---

## 🆘 Need Help?

1. Check GETTING_STARTED.md
2. Review error messages
3. Check browser console
4. Check backend logs
5. Review CHECKLIST.md
6. Read relevant README.md

---

**Happy coding! 🎉**
