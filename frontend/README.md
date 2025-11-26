# Helio Nexus Frontend

Modern React-based e-commerce frontend for Helio Nexus solar panel cleaning products.

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

Runs on http://localhost:3000

## Production Build

```bash
npm run build
```

## Environment Variables

Create a `.env` file:

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Product browsing with search and filters
- ✅ Shopping cart system
- ✅ User authentication
- ✅ Admin dashboard for product management
- ✅ Order checkout and history
- ✅ Image upload for products

## Technologies

- React 18
- React Router v6
- Tailwind CSS
- Axios
- React Icons
- Context API

## Directory Structure

```
src/
├── components/     # Reusable components
├── pages/          # Page components
├── context/        # React Context (Auth, Cart)
├── utils/          # Utility functions (API client)
├── styles/         # Global styles
├── App.js          # Main app component
└── index.js        # Entry point
```

## Demo Credentials

- **User:** user@example.com / password
- **Admin:** admin@example.com / password

## Deployment

1. Build: `npm run build`
2. Deploy `build` folder to Vercel/Netlify
3. Set environment variables on hosting platform
4. Update REACT_APP_API_URL to production backend

## Testing

- Demo accounts pre-configured
- Test product addition as admin
- Test cart functionality
- Test checkout process
