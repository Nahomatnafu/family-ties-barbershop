# Quick Start Guide for Family Ties Barbershop

## 🎉 Welcome!

Your premium barbershop website is ready! This guide will help you get it live in minutes.

## ✅ What's Included

Your website has:
- ✨ **Homepage** with hero, services, about, barbers, location, and CTA
- 📅 **Booking System** with 5-step appointment flow
- 🖼️ **Gallery** showcasing your work
- 📞 **Contact Page** with form and map
- 📱 **Mobile-Responsive** design
- 🎨 **Premium Gold & Black** design

## 🚀 Getting Started (3 Steps)

### Step 1: View Your Site Locally

The site is already running! Open your browser to:
```
http://localhost:3000
```

Click through all the pages:
- Home
- Book Now
- Gallery
- Contact

### Step 2: Customize Your Content

Open `lib/data.ts` to update:

**Services & Pricing:**
```typescript
{
  name: 'Haircut',
  price: 35,  // Change this
  duration: 45,  // Change this
}
```

**Barber Information:**
```typescript
{
  name: 'Alex',
  bio: 'Your bio here',  // Change this
  specialties: ['Fades', 'Modern Styles'],  // Change this
}
```

**Business Hours:**
```typescript
hours: {
  monday: '9:00 AM - 7:00 PM',  // Change this
}
```

### Step 3: Deploy to the Internet

**Option A: Deploy to Vercel (Recommended - FREE)**

1. Create account at [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Connect your GitHub account
4. Select this repository
5. Click "Deploy"
6. Done! Your site is live in ~2 minutes

**Option B: Deploy to Netlify (Alternative - FREE)**

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Done!

## 📝 Common Updates

### Update Phone Number
Edit `lib/data.ts`:
```typescript
phone: '507-720-0522',  // Change this
```

### Update Address
Edit `lib/data.ts`:
```typescript
address: '407 Range St, North Mankato, Minnesota',  // Change this
```

### Update Social Media
Edit `lib/data.ts`:
```typescript
social: {
  instagram: 'your-instagram-url',
  facebook: 'your-facebook-url',
}
```

### Add/Remove Services
Edit `lib/data.ts` - add or remove items from the `services` array.

### Change Barber Photos
Replace images in:
```
assets/barbershop-images/barbershop-image-001.jpg
assets/barbershop-images/barbershop-image-002.jpg
etc.
```

Then update the image paths in `lib/data.ts`.

## 🎨 Design Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#d97706',  // Change gold color
  secondary: '#000000',  // Change black
}
```

### Change Fonts
Edit `app/layout.tsx` to use different Google Fonts.

## 📧 Enable Email Notifications (Optional)

To receive booking confirmations:

1. Sign up for [SendGrid](https://sendgrid.com) (free tier available)
2. Get your API key
3. Add to Vercel environment variables:
   ```
   SENDGRID_API_KEY=your-key-here
   EMAIL_FROM=bookings@yourdomain.com
   ```

See `SETUP.md` for detailed instructions.

## 📅 Enable Google Calendar (Optional)

To sync bookings to your calendar:

1. Create Google Cloud project
2. Enable Calendar API
3. Create service account
4. Share calendars with service account

See `SETUP.md` for detailed instructions.

## 🆘 Need Help?

### Common Issues

**Site won't start:**
```bash
npm install
npm run dev
```

**Changes not showing:**
- Refresh browser (Ctrl+R or Cmd+R)
- Clear cache (Ctrl+Shift+R or Cmd+Shift+R)

**Build errors:**
```bash
npm run build
```
Check the error messages and fix any issues.

### Documentation

- `README.md` - Full project overview
- `SETUP.md` - Detailed setup instructions
- `FEATURES.md` - Complete feature list
- `DEPLOYMENT.md` - Deployment checklist

## 📱 Share Your Site

Once deployed, share your new website:

1. **Update Google My Business** with your URL
2. **Add to Instagram bio**
3. **Add to Facebook page**
4. **Print on business cards**
5. **Share on social media**

## 🎯 Next Steps

1. ✅ Test the booking system
2. ✅ Update all content with your information
3. ✅ Add your actual photos to the gallery
4. ✅ Deploy to Vercel
5. ✅ Set up custom domain (optional)
6. ✅ Enable email notifications (optional)
7. ✅ Connect Google Calendar (optional)
8. ✅ Share with customers!

## 💡 Pro Tips

- **Update gallery regularly** with fresh cuts
- **Respond to contact forms** within 24 hours
- **Monitor bookings** daily
- **Keep prices current**
- **Update hours** for holidays

---

**Your website is ready to bring in customers! 🎉**

Questions? Check the other documentation files or contact your developer.

