# Wine Shipping Gift Card Designer

A modern, customer-facing gift card design tool for Wine Shipping, built with Next.js and ready to integrate with Customer's Canvas API.

## Features

- **Template Selection** - Choose from 6 wine-themed templates or start from scratch
- **Drag & Drop Editor** - Customer's Canvas integration (demo mode in this prototype)
- **Gift Card Options** - Flexible amounts, email/physical delivery, scheduling
- **Wine Shipping Branding** - Colors and design matching wineshipping.com

## Brand Colors

Based on wineshipping.com:
- Primary Dark: `#2c1810` (Deep brown)
- Accent Brown: `#8b4513` (Saddle brown)
- Gold Accent: `#d4a574` (Tan/gold)
- Background: `#f8f5f0` (Warm off-white)
- Wine Red: `#722f37` (Burgundy)

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Customer's Canvas API** (integration ready)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Vercel)

```bash
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Production Integration

To connect with actual Customer's Canvas:

1. Sign up at [customerscanvas.com](https://customerscanvas.com)
2. Get API credentials
3. Update `DesignEditor.tsx` with actual iframe integration
4. Configure wine-themed templates in Customer's Canvas backend
5. Implement save/export functionality to generate print-ready PDFs

## Next Steps

- [ ] Integrate Customer's Canvas IframeApi.js
- [ ] Set up templates in Customer's Canvas admin
- [ ] Connect to Wine Shipping checkout/payment system
- [ ] Add gift card code generation
- [ ] Email delivery service integration (SendGrid/Resend)
- [ ] Physical card printing integration

## Customer's Canvas Setup

See [Customer's Canvas Documentation](https://customerscanvas.com/dev/) for:
- IFrame API setup
- Template configuration
- Print file generation
- Backend integration

## Support

Built by Portifoy for Wine Shipping.
