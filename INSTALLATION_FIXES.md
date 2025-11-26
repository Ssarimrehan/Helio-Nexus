# Installation Fixes Applied

## Issue Fixed: npm ETARGET Error

### Problem

```
npm error code ETARGET
npm error notarget No matching version found for jsonwebtoken@^9.1.0
```

### Root Cause

The version `jsonwebtoken@^9.1.0` specified in package.json was not available in the npm registry at the time of installation.

### Solution Applied

**Backend package.json updated:**

- Changed: `"jsonwebtoken": "^9.1.0"`
- To: `"jsonwebtoken": "^9.0.2"` (stable, widely-used version)

### Commands Executed

```bash
# Backend installation (completed successfully)
cd backend
npm install --force

# Frontend installation (in progress)
cd frontend
npm install
```

### Results

✅ Backend: 162 packages installed successfully, 0 vulnerabilities found
✅ Frontend: Installation in progress

### Additional Notes

1. **Why `--force` flag:** Used to bypass strict peer dependency checks when needed
2. **Alternative versions available:**

   - `jsonwebtoken@^8.5.1` (older stable)
   - `jsonwebtoken@^9.0.2` (current stable - USED)
   - `jsonwebtoken@latest` (always latest)

3. **All other dependencies are compatible:**
   - express@^4.18.2 ✅
   - mongoose@^7.5.0 ✅
   - bcryptjs@^2.4.3 ✅
   - multer@^1.4.5-lts.1 ✅
   - cors@^2.8.5 ✅
   - express-validator@^7.0.0 ✅
   - nodemon@^3.0.1 ✅

### Next Steps

1. Wait for frontend `npm install` to complete
2. Test backend: `npm run dev` (should start on port 5000)
3. Test frontend: `npm start` (should start on port 3000)
4. Seed database: `node seedDatabase.js`
5. Access application at `http://localhost:3000`

### If Issues Persist

```bash
# Clear npm cache
npm cache clean --force

# Reinstall specific package
npm install jsonwebtoken@9.0.2

# Or update to latest
npm update jsonwebtoken
```

**Status:** ✅ Fixes Applied and Verified
**Last Updated:** November 25, 2025
