# Deployment Checklist

## Pre-Deployment

### 1. Content Review
- [ ] Verify all barber photos are correct
- [ ] Confirm service prices are accurate
- [ ] Check business hours are up-to-date
- [ ] Verify phone number and address
- [ ] Test all social media links

### 2. Image Optimization
- [ ] Ensure all images are optimized (use WebP format if possible)
- [ ] Verify logo displays correctly
- [ ] Check gallery images load properly

### 3. Testing
- [ ] Test booking flow on desktop
- [ ] Test booking flow on mobile
- [ ] Verify form validations work
- [ ] Test all navigation links
- [ ] Check responsive design on multiple screen sizes
- [ ] Test on different browsers (Chrome, Safari, Firefox, Edge)

### 4. SEO & Performance
- [ ] Update meta descriptions in `app/layout.tsx`
- [ ] Add Google Analytics (optional)
- [ ] Set up Google Search Console
- [ ] Test page load speed

## Deployment to Vercel

### Step 1: Prepare Repository
```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next

### Step 3: Add Environment Variables (Optional)
If you've set up integrations, add these in Vercel dashboard:
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `CALENDAR_ID_ALEX`
- `CALENDAR_ID_TY`
- `CALENDAR_ID_DONNIE`
- `CALENDAR_ID_MIKE`
- `EMAIL_API_KEY`
- `EMAIL_FROM`

### Step 4: Deploy
Click "Deploy" and wait for build to complete.

## Post-Deployment

### 1. Domain Setup
- [ ] Add custom domain in Vercel
- [ ] Update DNS records
- [ ] Enable HTTPS (automatic with Vercel)

### 2. Testing Production Site
- [ ] Test all pages load correctly
- [ ] Verify booking system works
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify Google Maps loads

### 3. Analytics & Monitoring
- [ ] Set up Google Analytics
- [ ] Configure Vercel Analytics
- [ ] Set up error monitoring (Sentry, optional)

### 4. Marketing
- [ ] Update Google My Business with website URL
- [ ] Add website to Instagram bio
- [ ] Add website to Facebook page
- [ ] Share on social media

## Ongoing Maintenance

### Weekly
- [ ] Check for new bookings
- [ ] Respond to contact form submissions
- [ ] Monitor website performance

### Monthly
- [ ] Review and update gallery images
- [ ] Check for broken links
- [ ] Update service prices if needed
- [ ] Review analytics

### As Needed
- [ ] Update barber information
- [ ] Add new services
- [ ] Update business hours for holidays
- [ ] Refresh promotional content

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build`
- Verify all dependencies are installed
- Check environment variables are set

### Images Not Loading
- Verify image paths are correct
- Check images exist in `assets/barbershop-images/`
- Ensure Next.js image optimization is working

### Booking System Issues
- Check API route is working: `/api/booking`
- Verify form validation
- Check browser console for errors

## Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/support
- **Tailwind CSS:** https://tailwindcss.com/docs

## Emergency Contacts

If the site goes down:
1. Check Vercel dashboard for errors
2. Review recent deployments
3. Rollback to previous version if needed
4. Contact development team

---

**Last Updated:** January 2026

