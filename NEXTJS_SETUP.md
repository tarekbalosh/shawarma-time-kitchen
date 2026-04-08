# Shawarma Time Kitchen - Next.js Migration Complete! 🎉

Your restaurant website has been successfully migrated from static HTML to Next.js!

## 🚀 Quick Start (3 Steps)

### Step 1: Install Node.js (if not already installed)
If you don't have Node.js installed:
1. Download from https://nodejs.org/ (LTS version recommended)
2. Run the installer and follow the prompts
3. Restart your computer or terminal

### Step 2: Install Dependencies
Open PowerShell in this folder and run:
```bash
npm install
```

This will install all required packages (React, Next.js, Tailwind CSS, etc.)

### Step 3: Run the Development Server
```bash
npm run dev
```

Then open http://localhost:3000 in your browser!

## 📁 What's New

✅ Modern Next.js 14 with React 18
✅ TypeScript for better code safety
✅ Tailwind CSS for beautiful styling
✅ Responsive design (mobile, tablet, desktop)
✅ WhatsApp integration for orders
✅ Google Maps embedded
✅ Optimized performance
✅ Better SEO support

## 🌐 Pages Created

- **Home** (/) - Hero section with featured dishes
- **Menu** (/menu) - Full menu with category filters
- **About** (/about) - Restaurant story and values
- **Book** (/book) - Order form via WhatsApp

## 📂 Project Structure

```
├── app/                    # All pages and layouts
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Main layout with header/footer
│   ├── globals.css        # Global styles
│   ├── menu/page.tsx      # Menu page
│   ├── about/page.tsx     # About page
│   └── book/page.tsx      # Booking page
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── MenuFilter.tsx
├── public/
│   └── images/           # All restaurant images (already copied!)
├── package.json          # Dependencies
├── next.config.js        # Next.js config
├── tailwind.config.js    # Tailwind config
└── tsconfig.json         # TypeScript config
```

## 💾 Available Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Run production server
npm run lint      # Check code quality
```

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` and update the color values

### Update Contact Info
Search for phone numbers in:
- `components/Footer.tsx`
- `app/book/page.tsx`
- `app/about/page.tsx`

### Add More Menu Items
Edit `app/menu/page.tsx` and add to the `menuItems` array

### Update Restaurant Info
Edit the content in:
- `app/page.tsx` (home)
- `app/about/page.tsx` (about)

## ⚡ Performance Features

- Next.js Image Optimization (Image component)
- CSS-in-JS with Tailwind (no bundle bloat)
- Server-side rendering support
- Build-time optimization
- Automatic code splitting

## 🚀 Deployment (When Ready)

### Option 1: Vercel (Recommended - Free!)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify/AWS/Other Hosting
1. Run `npm run build`
2. Deploy the `.next` folder to your hosting

## ✨ All Your Assets

All your images have been copied to `public/images/`:
- Logo ✓
- Background images ✓
- Food photos ✓
- Social media images ✓
- All 27 image files ✓

## 📞 Need Help?

Common issues:

**"npm: command not found"**
→ Node.js not installed. Visit nodejs.org

**"Port 3000 already in use"**
→ Run: `npm run dev -- -p 3001` (uses port 3001 instead)

**"Module not found"**
→ Run: `npm install`

## 🎯 Next Steps

1. ✅ Verify Node.js is installed
2. ✅ Open PowerShell in the project folder
3. ✅ Run `npm install`
4. ✅ Run `npm run dev`
5. ✅ Visit http://localhost:3000
6. ✅ Test all pages and functionality

---

**Your Next.js migration is complete!**

Start developing now! 🚀
