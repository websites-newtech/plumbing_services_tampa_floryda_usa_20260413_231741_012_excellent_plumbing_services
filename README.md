# Excellent Plumbing Services — Website

Modern commercial plumbing website for Tampa, FL. Built with HTML + Alpine.js.

## Project Structure

```
website/
├── index.html              # Homepage
├── about.html              # About Us
├── services.html           # Services (full detail)
├── property-managers.html  # Property Manager landing page
├── contact.html            # Contact + form
├── privacy.html            # Privacy Policy
├── assets/
│   ├── css/
│   │   └── main.css        # All styles
│   ├── js/
│   │   └── main.js         # Scroll animations + navbar
│   └── images/             # Place all images here
│       ├── hero_001.jpeg
│       ├── hero_002.jpg
│       ├── hero_003.jpg
│       ├── image_001.png
│       ├── image_002.png
│       ├── image_003.jpg
│       ├── image_004.jpg
│       └── image_005.jpg
└── design_decisions.md     # Design rationale
```

## Quick Start (Local Preview)

```bash
# Option 1: Python (built-in)
cd website
python3 -m http.server 8000
# Open: http://localhost:8000

# Option 2: Node (if installed)
npx serve website

# Option 3: VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

**Do NOT open HTML files directly** via `file://` — fonts and relative paths need a local server.

## Deployment

### GitHub Pages (Free)

1. Create a new GitHub repository
2. Push the `website/` folder contents to the repo root (or a `docs/` folder)
3. Go to **Settings → Pages → Source** → Select `main` branch → `/ (root)`
4. Site will be live at: `https://yourusername.github.io/repo-name`

```bash
git init
git add .
git commit -m "Initial website"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### Netlify (Recommended — Free Tier)

1. Go to [netlify.com](https://netlify.com) → Log in
2. Drag the `website/` folder to the Netlify deploy area
3. **Done** — live URL in seconds

Or via CLI:
```bash
npm install -g netlify-cli
netlify deploy --dir=website --prod
```

**Netlify Advantage:** Auto-enables contact form handling (add `netlify` attribute to `<form>` tag).

### cPanel / Traditional Hosting

1. Zip the contents of the `website/` folder
2. Upload to `public_html/` via File Manager
3. Ensure `index.html` is in root

### Custom Domain

After deploying to Netlify or GitHub Pages:
1. Purchase domain (Namecheap, GoDaddy, etc.)
2. In DNS settings, add a CNAME record pointing to your deploy URL
3. Add the custom domain in Netlify/GitHub Pages settings
4. SSL certificate is auto-provisioned (free)

## Setting Up the Contact Form

### Option A: Netlify Forms (Easiest — Free)

Add these attributes to the `<form>` tag in `contact.html`:

```html
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  ...
>
  <input type="hidden" name="form-name" value="contact">
  <!-- rest of form -->
</form>
```

Remove the Alpine.js `@submit.prevent` handler. Netlify will handle submissions and email them to you.

### Option B: Formspree (Works Anywhere — Free Tier: 50/month)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → copy your form ID
3. Update `<form>` tag:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Remove Alpine.js `@submit.prevent` handler.

## Updating Content

### Phone Number
Search and replace `(813) 734-9192` and `+18137349192` across all HTML files.

### Email Address
Search and replace `excellent@excellentplumbingservices.com` across all files.

### Hours
Edit in `contact.html` (`.hours-table` section) and footer of all pages.

### Images
Replace files in `assets/images/` — keep the same filenames or update the `src` attributes in HTML.

## Browser Support

- Chrome 90+, Firefox 90+, Safari 14+, Edge 90+
- Mobile: iOS Safari 14+, Chrome Android 90+
- Alpine.js requires modern browsers (ES6+)

## Performance Notes

- Google Fonts loaded with `display=swap` — no FOUT
- Images use `loading="lazy"` (below fold) and `loading="eager"` (hero)
- Alpine.js from CDN: ~15KB gzipped
- No build step, no bundler — instant deploy

## Contact

- **Phone:** (813) 734-9192
- **Email:** excellent@excellentplumbingservices.com
- **Social:** @excellentplumbingservices (Instagram), /excellentplumbingserv (Facebook)