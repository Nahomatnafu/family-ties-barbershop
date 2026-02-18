# Hostinger Deployment Guide

## 🚀 How to Deploy Family Ties Barbershop to Hostinger

### Prerequisites
- Node.js 18+ installed on Hostinger
- SSH access to your Hostinger account
- Domain configured in Hostinger

---

## Step 1: Build the Production Version

Run this command locally to create the production build:

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

---

## Step 2: Files to Upload to Hostinger

Upload **ONLY** these folders and files to your Hostinger `public_html` directory:

### ✅ Required Files/Folders:
```
├── .next/                    # Production build (after running npm run build)
├── public/                   # Static assets (images, etc.)
├── node_modules/             # Dependencies (or run npm install on server)
├── package.json              # Dependencies list
├── package-lock.json         # Lock file
├── next.config.ts            # Next.js configuration
└── .env.local                # Environment variables (if needed)
```

### ❌ DO NOT Upload:
- `docs/` folder (documentation only)
- `.git/` folder
- `.next/cache/` (will be regenerated)
- `README.md` (optional, for reference only)
- Any `.md` files in root
- `.env.example`

---

## Step 3: Server Setup on Hostinger

### Option A: Using Node.js Hosting (Recommended)

1. **SSH into your Hostinger server**
2. **Navigate to your project directory**
3. **Install dependencies:**
   ```bash
   npm install --production
   ```
4. **Start the Next.js server:**
   ```bash
   npm run start
   ```
   Or use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start npm --name "family-ties" -- start
   pm2 save
   pm2 startup
   ```

### Option B: Static Export (If Node.js not available)

If Hostinger doesn't support Node.js, you can export as static HTML:

1. **Update `next.config.ts`:**
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build static version:**
   ```bash
   npm run build
   ```

3. **Upload only the `out/` folder contents to `public_html`**

---

## Step 4: Environment Variables (Optional)

If you're using Google Calendar integration or email notifications, create a `.env.local` file on the server:

```env
# Add your environment variables here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=your-private-key
```

---

## Step 5: Domain Configuration

1. Point your domain to Hostinger's nameservers
2. In Hostinger control panel, set up your domain
3. Configure SSL certificate (Hostinger usually provides free SSL)

---

## 🔄 Updating the Website

When you make changes:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload updated files:**
   - Upload new `.next/` folder
   - Upload any changed files in `public/`
   - Upload updated `package.json` if dependencies changed

3. **Restart the server** (if using Node.js hosting):
   ```bash
   pm2 restart family-ties
   ```

---

## 📁 Recommended Folder Structure on Hostinger

```
/home/username/
├── public_html/              # Your website root
│   ├── .next/               # Production build
│   ├── public/              # Static assets
│   ├── node_modules/        # Dependencies
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.ts
│   └── .env.local           # Environment variables
```

---

## ⚡ Performance Tips

1. **Enable caching** in Hostinger control panel
2. **Use Cloudflare** for CDN (free tier available)
3. **Compress images** before uploading
4. **Enable Gzip compression** on server

---

## 🆘 Troubleshooting

### Issue: "Module not found" errors
**Solution:** Run `npm install` on the server

### Issue: Images not loading
**Solution:** Check that `public/assets/` folder is uploaded correctly

### Issue: 404 errors on page refresh
**Solution:** Configure server to redirect all routes to `index.html` or use Node.js hosting

---

## 📞 Need Help?

Check the documentation in the `docs/` folder for more details on:
- SEO setup
- Google Calendar integration
- Email notifications
- Feature documentation

