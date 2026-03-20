# Deployment Instructions

## Quick Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   cd /root/.clawdbot/workspace/projects/wineshipping-gift-cards
   git init
   git add .
   git commit -m "Initial commit: Wine Shipping Gift Card Designer"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! Your app will be live at `https://your-project.vercel.app`

### Option 2: Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy
cd /root/.clawdbot/workspace/projects/wineshipping-gift-cards
vercel --prod
```

### Option 3: Manual Deploy

1. Zip the project:
   ```bash
   cd /root/.clawdbot/workspace/projects
   tar -czf wineshipping-gift-cards.tar.gz wineshipping-gift-cards/
   ```

2. Upload to Vercel via dashboard:
   - Go to vercel.com
   - "Add New Project"
   - Upload the zip/tar file

## Custom Domain

After deployment:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add `giftcards.wineshipping.com` (or your preferred subdomain)
4. Follow Vercel's DNS instructions

## Environment Variables (Production)

When ready to connect Customer's Canvas:

```env
NEXT_PUBLIC_CUSTOMERS_CANVAS_URL=https://your-canvas-instance.com
CUSTOMERS_CANVAS_API_KEY=your_api_key_here
CUSTOMERS_CANVAS_TENANT_ID=your_tenant_id
```

Add these in Vercel Dashboard → Project → Settings → Environment Variables

## Build Settings (Vercel Auto-Detects)

- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## Post-Deployment Checklist

- [ ] Test all 3 steps (template → design → options)
- [ ] Verify mobile responsiveness
- [ ] Check brand colors match Wine Shipping
- [ ] Test form validation
- [ ] Set up analytics (optional)
- [ ] Configure custom domain
- [ ] Add Customer's Canvas credentials

## Monitoring

Vercel provides built-in:
- Real-time logs
- Analytics
- Performance monitoring
- Error tracking

Access via: Project → Analytics / Logs

---

**Ready to deploy?** Choose Option 1 (GitHub + Vercel) for automatic deployments on every commit.
