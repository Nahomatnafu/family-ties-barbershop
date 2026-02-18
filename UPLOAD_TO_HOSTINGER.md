# 📤 What to Upload to Hostinger - Quick Guide

## ✅ UPLOAD THESE FOLDERS/FILES:

Since you already have `public_html` folder on Hostinger, here's what you need to upload:

### 1. **Build Output** (Required)
```
.next/          ← The entire .next folder (production build)
```

### 2. **Static Assets** (Required)
```
public/         ← All your images and static files
```

### 3. **Configuration Files** (Required)
```
package.json
package-lock.json
next.config.ts
```

### 4. **Dependencies** (Required - Option A or B)

**Option A:** Upload the folder (slower upload, faster on server)
```
node_modules/   ← All dependencies (large folder ~300MB)
```

**Option B:** Install on server (faster upload, requires SSH)
```
SSH into Hostinger and run: npm install --production
```

---

## ❌ DO NOT UPLOAD:

```
docs/                    ← Documentation only
.git/                    ← Git repository
.next/cache/             ← Will be regenerated
README.md                ← Optional
.env.example             ← Example file only
.gitignore               ← Git config
eslint.config.mjs        ← Development only
tsconfig.json            ← Development only
postcss.config.mjs       ← Development only
tailwind.config.ts       ← Development only
```

---

## 📁 Your Hostinger Folder Structure Should Look Like:

```
public_html/
├── .next/                    ← Production build
│   ├── static/
│   ├── server/
│   └── ...
├── public/                   ← Your images and assets
│   └── assets/
│       └── barbershop-images/
├── node_modules/             ← Dependencies (if uploaded)
├── package.json
├── package-lock.json
└── next.config.ts
```

---

## 🚀 Steps to Deploy:

### Step 1: Build Locally (Already Done ✅)
```bash
npm run build
```

### Step 2: Upload to Hostinger

**Using File Manager:**
1. Log into Hostinger control panel
2. Go to File Manager
3. Navigate to `public_html`
4. Upload the folders/files listed above

**Using FTP (Faster for large files):**
1. Use FileZilla or similar FTP client
2. Connect to your Hostinger FTP
3. Upload to `public_html` directory

### Step 3: Start the Server

**If Hostinger supports Node.js:**
```bash
# SSH into your server
cd public_html
npm install --production  # If you didn't upload node_modules
npm run start
```

**If using PM2 (recommended):**
```bash
npm install -g pm2
pm2 start npm --name "family-ties" -- start
pm2 save
pm2 startup
```

---

## 🔧 Important: Update Your Domain URL

After uploading, update these files with your actual domain:

**File: `app/sitemap.ts`** (line 4)
```typescript
const baseUrl = 'https://your-actual-domain.com';  // Change this
```

**File: `app/robots.ts`** (line 10)
```typescript
sitemap: 'https://your-actual-domain.com/sitemap.xml',  // Change this
```

Then rebuild and re-upload the `.next` folder.

---

## ✅ Checklist Before Going Live:

- [ ] All files uploaded to `public_html`
- [ ] Dependencies installed (`node_modules` uploaded or `npm install` run)
- [ ] Server started (Node.js running)
- [ ] Domain pointing to Hostinger
- [ ] SSL certificate active (HTTPS)
- [ ] Test all pages load correctly
- [ ] Test Calendly booking widgets work
- [ ] Test mobile responsiveness
- [ ] Check images load properly

---

## 🆘 Troubleshooting:

**Problem:** "Module not found" errors
**Solution:** Run `npm install` on the server

**Problem:** Images not loading
**Solution:** Make sure `public/assets/` folder is uploaded correctly

**Problem:** 404 errors
**Solution:** Make sure Node.js server is running with `npm start`

**Problem:** Site not loading at all
**Solution:** Check if Node.js is installed and running on Hostinger

---

## 📞 Need Help?

Check `HOSTINGER_DEPLOYMENT.md` for detailed deployment instructions.

