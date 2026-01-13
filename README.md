# Family Ties Barbershop

A premium, modern barbershop booking website built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Features

### Customer-Facing
- **Modern, Premium Design** - Gold and black color scheme with luxury aesthetics
- **Responsive Layout** - Mobile-first design that works on all devices
- **Multi-Step Booking System** - Easy 5-step booking process
- **Barber Selection** - Choose from 4 expert barbers
- **Service Selection** - 6 premium services with pricing
- **Date & Time Picker** - Real-time availability calendar
- **Gallery** - Showcase of work and shop photos
- **Contact Page** - Form, map, and business information
- **Google Maps Integration** - Embedded map with directions

### Business Features
- **Booking Management** - Capture customer appointments
- **Email Notifications** - Automated confirmations (ready for integration)
- **Google Calendar Sync** - Prevent double-bookings (ready for integration)
- **Customer Data Collection** - Name, email, phone, and notes

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nahomatnafu/family-ties-barbershop.git
   cd family-ties-barbershop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
family-ties-barbershop/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   └── booking/          # Booking endpoint
│   ├── booking/              # Booking page
│   ├── contact/              # Contact page
│   ├── gallery/              # Gallery page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── booking/              # Booking flow components
│   ├── home/                 # Homepage sections
│   ├── Header.tsx            # Site header
│   └── Footer.tsx            # Site footer
├── lib/                      # Utilities and data
│   └── data.ts               # Business data (services, barbers, etc.)
├── assets/                   # Images and media
│   └── barbershop-images/    # Shop photos and logo
└── public/                   # Static files
```

## 🎨 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Date Handling:** date-fns
- **Deployment:** Vercel-ready

## 📋 Pages

1. **Homepage** (`/`)
   - Hero section with CTA
   - Services showcase
   - About section
   - Barber profiles
   - Location with map
   - Final CTA

2. **Booking** (`/booking`)
   - Step 1: Choose barber
   - Step 2: Select service
   - Step 3: Pick date & time
   - Step 4: Enter customer info
   - Step 5: Confirmation

3. **Gallery** (`/gallery`)
   - Grid of shop and work photos
   - Lightbox view

4. **Contact** (`/contact`)
   - Contact form
   - Business information
   - Google Maps
   - Social media links

## ⚙️ Configuration

### Update Business Information

Edit `lib/data.ts` to customize:
- Services and pricing
- Barber information and bios
- Business hours
- Contact details
- Social media links

### Customize Design

Edit `tailwind.config.ts` to change:
- Color scheme
- Typography
- Spacing and layout

## 🔌 Integrations (Setup Required)

The website is ready for the following integrations:

### Google Calendar
- Sync bookings to barber calendars
- Prevent double-bookings
- See `SETUP.md` for configuration

### Email Notifications
- Customer confirmations
- Barber notifications
- Supports SendGrid, Resend, or Nodemailer
- See `SETUP.md` for configuration

### Database (Optional)
- Store booking history
- Recommended: Supabase
- See `SETUP.md` for configuration

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

The site is optimized for Vercel but works on any Node.js hosting platform.

## 📱 Business Information

**Family Ties Barbershop**
- **Address:** 407 Range St, North Mankato, Minnesota
- **Phone:** 507-720-0522
- **Instagram:** [@wild1000spaper](https://www.instagram.com/wild1000spaper/)
- **Facebook:** [Family Ties Barbershop](https://www.facebook.com/p/Family-Ties-Barbershop-61576844947842/)

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For setup assistance or questions, refer to `SETUP.md` or contact the development team.

