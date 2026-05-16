# Bảo Nguyễn Chí Portfolio

Static embedded/IoT styled portfolio optimized for free hosting.

## Included Optimizations

- Responsive desktop/mobile layout
- Reveal motion with reduced-motion fallback
- Lazy-loaded images with async decode
- Security headers via _headers
- Cache headers for static assets

## Run Locally

Open index.html directly in your browser.

Or run a static server:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Free Deploy + DDoS Protection (Recommended): Cloudflare Pages

1. Push this folder to GitHub.
2. Go to Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git.
3. Select the repository and configure:
   - Framework preset: None
   - Build command: (empty)
   - Build output directory: /
4. Deploy.
5. You get:
   - Free HTTPS
   - Global CDN
   - Cloudflare DDoS protection
   - Security headers from _headers

## Deploy on Vercel (Alternative)

1. Import repository into Vercel.
2. Framework preset: Other.
3. Build command: (empty).
4. Output directory: ./
5. Deploy.

## Quick Customization

- Update name and bio: index.html
- Put your real avatar as avatar.jpg in project root
- Update colors/theme: styles.css
- Update section reveal behavior: script.js
