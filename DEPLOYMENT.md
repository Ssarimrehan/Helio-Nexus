# Deployment Guide

This guide helps you deploy the Helio Nexus application to production.

## Prerequisites

- Node.js installed
- Git account (GitHub, GitLab, etc.)
- MongoDB Atlas account (free tier available)
- Hosting platforms:
  - Backend: Heroku, Railway, Render, or DigitalOcean
  - Frontend: Vercel, Netlify, or GitHub Pages

## Backend Deployment

### Option 1: Deploy on Railway (Recommended)

1. **Sign up** at railway.app
2. **Connect your GitHub repository**
3. **Configure environment variables**:

   - `MONGODB_URI`: MongoDB Atlas connection string
   - `JWT_SECRET`: Strong random secret key
   - `JWT_EXPIRE`: Token expiration time
   - `NODE_ENV`: production
   - `PORT`: 5000
   - `FRONTEND_URL`: Your frontend deployment URL

4. **Deploy**: Railway will automatically deploy on push

### Option 2: Deploy on Heroku

1. **Install Heroku CLI**
2. **Login**: `heroku login`
3. **Create app**: `heroku create your-app-name`
4. **Set environment variables**:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_url
   heroku config:set JWT_SECRET=your_secret
   heroku config:set FRONTEND_URL=your_frontend_url
   ```
5. **Deploy**: `git push heroku main`

### MongoDB Atlas Setup

1. Go to mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Whitelist IP (0.0.0.0/0 for testing, restrict in production)
5. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/helio-nexus`

## Frontend Deployment

### Option 1: Deploy on Vercel (Recommended)

1. **Sign up** at vercel.com with GitHub
2. **Import project** from Git
3. **Configure environment variables**:
   - `REACT_APP_API_URL`: Your backend deployment URL
4. **Deploy**: Automatic on push to main branch

### Option 2: Deploy on Netlify

1. **Sign up** at netlify.com
2. **Connect Git repository**
3. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
4. **Environment variables**:
   - `REACT_APP_API_URL`: Your backend URL
5. **Deploy**: Automatic deployment

### Environment Variables for Frontend

```
REACT_APP_API_URL=https://your-backend-url.com/api
```

## Production Checklist

### Backend

- [ ] Update `JWT_SECRET` to a strong random key
- [ ] Set `NODE_ENV=production`
- [ ] Enable CORS only for your frontend URL
- [ ] Use environment-specific database
- [ ] Enable MongoDB IP whitelist
- [ ] Set up error logging (Sentry, etc.)
- [ ] Enable HTTPS only
- [ ] Set up automated backups

### Frontend

- [ ] Build for production: `npm run build`
- [ ] Test build locally: `npm run serve`
- [ ] Update API URL to production backend
- [ ] Verify environment variables
- [ ] Test all user flows
- [ ] Check mobile responsiveness
- [ ] Enable HTTPS
- [ ] Set up analytics (optional)

## Security Best Practices

1. **Never commit .env files**
2. **Use strong JWT secrets** (min 32 characters)
3. **Enable HTTPS** on all connections
4. **Use CORS whitelist** (specific domains only)
5. **Validate all inputs** on backend
6. **Hash passwords** (already implemented with bcryptjs)
7. **Use environment variables** for sensitive data
8. **Enable rate limiting** on API endpoints
9. **Regular security updates** for dependencies
10. **Monitor logs** for suspicious activity

## Scaling Considerations

### When to Optimize

- User base grows beyond 10,000
- Database queries become slow
- API response times exceed 500ms

### Optimization Steps

1. **Database indexing** on frequently queried fields
2. **Caching** (Redis for sessions)
3. **CDN** for static assets
4. **Load balancing** for multiple backend instances
5. **Image optimization** for product photos
6. **Database replication** for redundancy

## Troubleshooting

### Backend Not Connecting to MongoDB

- Check connection string
- Verify IP whitelisting
- Test connection locally first
- Check database user permissions

### Frontend Can't Reach Backend

- Verify API URL in .env
- Check CORS settings in Express
- Test API endpoint directly
- Check network tab in browser DevTools

### Images Not Loading

- Verify upload middleware works
- Check file permissions
- Ensure uploads directory exists
- Use absolute URLs for images

### Authentication Issues

- Clear browser cache/cookies
- Check token expiration
- Verify JWT secret matches
- Check localStorage for token

## Monitoring

### Recommended Tools

- **Error Tracking**: Sentry
- **Logging**: LogRocket
- **Analytics**: Google Analytics
- **Uptime Monitoring**: UptimeRobot
- **Performance**: New Relic

## Backup & Recovery

### Database Backups

1. Enable automated backups in MongoDB Atlas
2. Test restore procedure monthly
3. Keep backups for at least 30 days

### Code Backups

- Use Git with regular commits
- Maintain backup branch
- Tag releases

## Support

For deployment issues, refer to:

- Backend README: `/backend/README.md`
- Frontend README: `/frontend/README.md`
- Main README: `/README.md`
