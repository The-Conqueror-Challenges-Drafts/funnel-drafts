# Blank Landing Page

A Next.js project with a comprehensive component library for building landing pages.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure your project:**
   - Edit `next.config.ts` to change the redirect URL
   - Update metadata in `src/app/layout.tsx`

3. **Run development server:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
├── components-library/    # UI component library
├── src/app/               # Next.js app directory
├── src/components/        # Your custom components
└── src/assets/            # Static assets
```

## 🎨 Features

- **Component Library**: Pre-built UI components and page blocks
- **Tailwind CSS v4**: Utility-first styling with dark/light mode
- **TypeScript**: Type safety and better development experience
- **Next.js 15**: Latest features with Turbopack
- **Google Tag Manager**: Built-in analytics and tracking setup

## 📊 Google Tag Manager Setup

This project includes a pre-configured Google Tag Manager setup for easy analytics integration.

### Quick Setup

1. **Get your GTM ID** from [Google Tag Manager](https://tagmanager.google.com/)
2. **Update the GTM ID** in `src/app/layout.tsx`:
   ```typescript
   const GTM_ID = "YOUR-GTM-ID-HERE";
   ```
3. **That's it!** GTM is automatically configured with proper head and body placement

### Features

- **Universal Component**: Works with any GTM container ID
- **Proper Placement**: Script in `<head>`, noscript fallback in `<body>`
- **Single Configuration**: Change GTM ID in one place only
- **Built-in Utilities**: Track events, page views, conversions, and ecommerce

### Usage Examples

```typescript
import { gtm } from "@/components/analytics/google-tag-manager";

// Track page views
gtm.pageview('/about');

// Track custom events
gtm.event('button_click', { button_name: 'cta' });

// Track conversions
gtm.conversion('newsletter_signup', { source: 'homepage' });

// Track purchases
gtm.purchase('TXN123', 99.99, 'USD', [
  { item_id: 'PROD1', item_name: 'Product', price: 99.99 }
]);
```

## 🎨 Customization

### Theme Configuration

Use [TweakCN](https://tweakcn.com/) to easily customize your theme:

1. **Visit TweakCN** and select your design preferences
2. **Copy the generated CSS variables** to `src/app/globals.css`
3. **Update the `@theme inline` section** with your new variables
4. **Preview changes** in real-time during development

### Font Configuration

This project uses **Sora** as the default font. To change it:

1. **Update font import** in `src/app/layout.tsx`:
   ```typescript
   import { YourFont } from "next/font/google";
   const yourFont = YourFont({ variable: "--font-your-font", subsets: ["latin"] });
   ```

2. **Update CSS variable** in `src/app/globals.css`:
   ```css
   --font-sans: var(--font-your-font);
   ```

3. **Update body className** in `src/app/layout.tsx`:
   ```typescript
   <body className={`${yourFont.variable} antialiased`}>
   ```

### Adding Components

Create new components in `src/components/` following the established patterns.

## 🚀 Deployment

Deploy to Vercel:
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs) - Framework documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs) - Type safety and development
- [TweakCN](https://tweakcn.com/) - Advanced theming and design system
- [ShadCN Blocks](https://shadcnblocks.com/) - Pre-built component blocks
- [v0](https://v0.dev/) - AI-powered UI generation
- [Vercel](https://vercel.com/) - Deployment platform