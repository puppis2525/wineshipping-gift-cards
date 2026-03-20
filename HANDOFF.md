# 🚀 Wine Shipping Gift Card Designer - Handoff Document

**Built:** March 20, 2026  
**By:** Portifoy (AI Agent)  
**For:** Mitch @ Wine Shipping  
**Status:** Ready for deployment & Customer's Canvas integration

---

## 📦 What You're Getting

A **production-ready prototype** of a customer-facing gift card designer that integrates with Customer's Canvas API. Fully branded for Wine Shipping with a 3-step user flow.

### Project Location
```
/root/.clawdbot/workspace/projects/wineshipping-gift-cards
```

---

## ⚡ Quick Start

### Test Locally (5 minutes)
```bash
cd /root/.clawdbot/workspace/projects/wineshipping-gift-cards
npm install
npm run dev
# Open http://localhost:3000
```

### Deploy to Vercel (10 minutes)
```bash
# Push to GitHub first
git remote add origin <your-github-repo-url>
git push -u origin master

# Then connect to Vercel:
# 1. Go to vercel.com
# 2. Import GitHub repo
# 3. Click Deploy
# Done! Live in ~2 minutes
```

**Full deployment guide:** See `DEPLOY.md`

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `README.md` | Technical documentation, setup instructions |
| `DEPLOY.md` | Step-by-step deployment to Vercel |
| `PROJECT-SUMMARY.md` | Feature list, tech stack, next steps |
| `PREVIEW.md` | Visual guide, color palette, responsive design |
| `HANDOFF.md` | This file - your starting point |
| `app/page.tsx` | Main flow & progress steps |
| `components/TemplateSelector.tsx` | Template gallery (6 templates) |
| `components/DesignEditor.tsx` | Design editor (Customer's Canvas ready) |
| `components/GiftCardOptions.tsx` | Gift card form & checkout |

---

## 🎯 What's Working

- ✅ **Complete 3-step flow** (Template → Design → Options)
- ✅ **6 wine-themed templates** (+ blank canvas option)
- ✅ **Full gift card options form** (amount, recipient, delivery)
- ✅ **Wine Shipping brand styling** (colors from wineshipping.com)
- ✅ **Responsive design** (mobile, tablet, desktop)
- ✅ **Production build** (optimized, ready for Vercel)
- ✅ **Git repository** (all code committed)

---

## 🔌 What Needs Integration

### 1. Customer's Canvas (Priority 1)
**Time Estimate:** 4-8 hours

**Steps:**
1. Sign up at [customerscanvas.com](https://customerscanvas.com)
2. Get API credentials (tenant ID, API key)
3. Create wine-themed templates in Canvas backend
4. Update `components/DesignEditor.tsx` with IframeApi.js integration
5. Test drag-and-drop functionality

**Resources:**
- [Customer's Canvas Docs](https://customerscanvas.com/dev/)
- [IFrame API Reference](https://customerscanvas.com/dev/editors/iframe-api/)

### 2. Payment Processing (Priority 2)
**Time Estimate:** 2-4 hours

**Options:**
- Integrate with existing Wine Shipping checkout
- Add Stripe directly
- Use Wine Shipping's payment provider

**Needs:**
- Payment API credentials
- Gift card code generation logic
- Order confirmation system

### 3. Email Delivery (Priority 3)
**Time Estimate:** 2-3 hours

**Options:**
- SendGrid (~$15/month)
- Resend (free tier available)
- AWS SES

**Needs:**
- Email templates (gift card delivery, receipt)
- Scheduled sending (for future delivery dates)
- Attachment support (PDF gift cards)

### 4. Database (Priority 3)
**Time Estimate:** 3-4 hours

**Schema Needed:**
```sql
gift_cards
  - id (uuid)
  - code (unique)
  - amount (decimal)
  - recipient_email
  - sender_name
  - message (text)
  - design_data (json)
  - delivery_method (email/physical)
  - delivery_date
  - redeemed (boolean)
  - created_at

orders
  - id (uuid)
  - gift_card_id
  - payment_status
  - total_amount
  - created_at
```

**Recommended:** Supabase (free tier) or your existing database

---

## 💰 Cost Breakdown

| Service | Cost | Required? |
|---------|------|-----------|
| Vercel Hosting | Free-$20/mo | ✅ Yes |
| Customer's Canvas | $?? (Contact sales) | ✅ Yes |
| Email Service | $0-$15/mo | ✅ Yes |
| Database | $0-$25/mo | ✅ Yes |
| Domain | $12/year (if new) | Optional |
| **Total (Monthly)** | **~$50-100/mo** | - |

---

## 🎨 Brand Alignment

Colors extracted from wineshipping.com and applied throughout:

- **Primary Dark:** `#2c1810` (headers, text)
- **Accent Brown:** `#8b4513` (buttons, CTAs)
- **Gold Accent:** `#d4a574` (highlights, hover states)
- **Background:** `#f8f5f0` (warm off-white base)
- **Wine Red:** `#722f37` (accent color)

All colors can be customized in `tailwind.config.ts` if needed.

---

## 📋 Immediate Next Steps

### Week 1: Deployment & Testing
- [ ] Push code to GitHub
- [ ] Deploy to Vercel
- [ ] Test on multiple devices
- [ ] Share preview URL with team

### Week 2: Customer's Canvas Setup
- [ ] Sign up for Customer's Canvas
- [ ] Create 6 wine-themed templates
- [ ] Upload wine clipart library
- [ ] Integrate IframeApi.js
- [ ] Test drag-and-drop editor

### Week 3: Backend Integration
- [ ] Set up database
- [ ] Implement payment processing
- [ ] Build gift card code generator
- [ ] Connect email delivery service

### Week 4: Production Launch
- [ ] Configure custom domain (giftcards.wineshipping.com)
- [ ] Final testing & QA
- [ ] Soft launch to test customers
- [ ] Monitor analytics & fix issues
- [ ] Full launch 🚀

---

## 🛠️ Customization Guide

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'wine-primary': '#2c1810',  // Change these
  'wine-accent': '#8b4513',
  // ...
}
```

### Add More Templates
Edit `components/TemplateSelector.tsx`:
```typescript
const templates: Template[] = [
  {
    id: 'new-template',
    name: 'Your Template Name',
    // ...
  }
];
```

### Modify Form Fields
Edit `components/GiftCardOptions.tsx` to add/remove fields.

### Change Preset Amounts
Update `presetAmounts` array in `GiftCardOptions.tsx`:
```typescript
const presetAmounts = [25, 50, 100, 250, 500]; // Modify here
```

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Vercel Deployment Fails
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Ensure `package.json` scripts are correct

---

## 📞 Support & Questions

### Customer's Canvas Support
- Documentation: https://customerscanvas.com/dev/
- Support Portal: https://customerscanvas.com/account/cases
- Email: info@aurigma.com

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions

### Code Issues
- This project is well-documented
- Check README.md for technical details
- Review PREVIEW.md for design specs

---

## ✅ Acceptance Checklist

Before considering this "done":

- [ ] App deployed and accessible via URL
- [ ] Customer's Canvas editor working with drag-and-drop
- [ ] Payment processing functional
- [ ] Email delivery working (test orders)
- [ ] Database storing gift cards & orders
- [ ] Gift card codes generating uniquely
- [ ] Redemption system implemented
- [ ] Mobile responsive (tested on phone)
- [ ] Brand colors match Wine Shipping
- [ ] Analytics/tracking added
- [ ] Custom domain configured

---

## 🎉 What This Gives You

1. **New Revenue Stream** - Sell gift cards directly from your site
2. **Customer Experience** - Beautiful, personalized gift cards
3. **Brand Touchpoint** - Reinforce Wine Shipping premium image
4. **Viral Marketing** - Recipients become potential customers
5. **Data Collection** - Build email list of wine enthusiasts
6. **Differentiation** - Most competitors don't offer custom design

---

## 📊 Success Metrics to Track

- Gift cards sold per month
- Average gift card value
- Redemption rate
- Time from purchase to redemption
- Repeat purchaser rate
- Email signup conversion from recipients

---

## 💡 Future Enhancement Ideas

- **Social sharing:** Let customers post their design
- **Video backgrounds:** Premium animated templates
- **AI suggestions:** Auto-suggest designs based on occasion
- **Bulk orders:** Corporate gift card purchasing
- **Gift card marketplace:** Let users sell/trade unused cards
- **Wine pairings:** Suggest wines based on gift card amount
- **Subscription gifts:** Monthly wine club gift cards

---

## 🔒 Security Considerations

**Before launch, ensure:**
- Payment data is PCI compliant
- Customer emails are encrypted
- Gift card codes are cryptographically secure
- API keys are in environment variables (not code)
- Rate limiting on gift card creation
- CSRF protection on forms
- Input validation on all fields

---

## 📝 Final Notes

This prototype was built in **~45 minutes** as a proof-of-concept. It's production-quality code that's ready to deploy and integrate.

**The hardest parts are done:**
- ✅ UI/UX design
- ✅ User flow
- ✅ Brand styling
- ✅ Form validation
- ✅ Responsive design
- ✅ Build configuration

**What remains is integration work:**
- Customer's Canvas API connection
- Payment processing
- Email delivery
- Database setup

**Estimated time to full production:** 2-4 weeks with focused development.

---

**Questions?** Review the other docs:
- `README.md` - Technical setup
- `DEPLOY.md` - Deployment steps
- `PREVIEW.md` - Design & visual guide
- `PROJECT-SUMMARY.md` - Feature overview

**Ready to launch?** Start with deploying to Vercel, then tackle Customer's Canvas integration.

---

Built with ⚡ by Portifoy  
March 20, 2026
