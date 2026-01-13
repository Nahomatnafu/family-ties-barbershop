# Family Ties Barbershop - Setup Guide

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Google Calendar Integration

To enable real-time calendar integration and prevent double-bookings:

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project: "Family Ties Barbershop"
3. Enable the **Google Calendar API**

### 2. Create Service Account

1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **Service Account**
3. Name it "Barbershop Booking System"
4. Download the JSON key file
5. Save it as `google-credentials.json` in the project root (DO NOT commit to Git)

### 3. Share Calendars with Service Account

1. Create a Google Calendar for each barber:
   - alex@familytiesbarbershop.com
   - ty@familytiesbarbershop.com
   - donnie@familytiesbarbershop.com
   - mike@familytiesbarbershop.com

2. Share each calendar with the service account email (found in the JSON file)
3. Give "Make changes to events" permission

### 4. Add Calendar IDs to Environment Variables

Create a `.env.local` file:

```env
# Google Calendar
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=your-private-key-here

# Barber Calendar IDs
CALENDAR_ID_ALEX=alex@familytiesbarbershop.com
CALENDAR_ID_TY=ty@familytiesbarbershop.com
CALENDAR_ID_DONNIE=donnie@familytiesbarbershop.com
CALENDAR_ID_MIKE=mike@familytiesbarbershop.com

# Email Configuration (using SendGrid, Resend, or similar)
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=your-api-key
EMAIL_FROM=bookings@familytiesbarbershop.com
```

## Email Notifications

### Option 1: SendGrid (Recommended)

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Verify your sender email
4. Add to `.env.local`:
   ```env
   EMAIL_SERVICE=sendgrid
   SENDGRID_API_KEY=your-api-key
   EMAIL_FROM=bookings@familytiesbarbershop.com
   ```

### Option 2: Resend

1. Sign up at [Resend](https://resend.com/)
2. Create an API key
3. Add to `.env.local`:
   ```env
   EMAIL_SERVICE=resend
   RESEND_API_KEY=your-api-key
   EMAIL_FROM=bookings@familytiesbarbershop.com
   ```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The site can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting

## Database (Optional but Recommended)

For production, store bookings in a database:

### Supabase (Recommended)

1. Create account at [Supabase](https://supabase.com)
2. Create a new project
3. Create a `bookings` table:
   ```sql
   CREATE TABLE bookings (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     barber_id TEXT NOT NULL,
     service_id TEXT NOT NULL,
     booking_date DATE NOT NULL,
     booking_time TEXT NOT NULL,
     customer_name TEXT NOT NULL,
     customer_email TEXT NOT NULL,
     customer_phone TEXT NOT NULL,
     notes TEXT,
     status TEXT DEFAULT 'confirmed',
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```
4. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

## Customization

### Update Business Info

Edit `lib/data.ts` to update:
- Services and prices
- Barber information
- Business hours
- Contact information

### Update Images

Replace images in `assets/barbershop-images/` with your own photos.

### Update Colors

Edit `tailwind.config.ts` to change the gold color scheme.

## Support

For questions or issues, contact the development team.

