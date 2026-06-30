# Hayer Farms — Website

A responsive marketing website for **Hayer Farms**, a family-owned farm in Gulalipur, Tarn Taran, Punjab. Built with plain HTML, CSS, and JavaScript — no build step required.

## Structure

```
project/
├── index.html      # Page markup
├── styles.css      # All styles (fluid, responsive)
├── script.js       # Nav, scroll reveal, Web3Forms submission
└── uploads/        # Images
```

## Running locally

The contact form uses [Web3Forms](https://web3forms.com), which requires the page to be served over `http://` or `https://` (not opened directly via `file://`). Start any static server from the `project/` folder:

```bash
cd project
python -m http.server 8000
# then open http://localhost:8000
```

## Contact form (Web3Forms)

The form in the Contact section posts to `https://api.web3forms.com/submit` from the browser. Submissions are emailed to the address registered with the Web3Forms access key set in `index.html`:

```html
<input type="hidden" name="access_key" value="bf509c15-3ef4-41f2-896a-c228d4eafab1" />
```

To send to a different inbox, register a new key at web3forms.com and replace that value. A hidden `botcheck` honeypot field provides spam protection.

## Responsiveness

The layout is fully fluid and tested across breakpoints for phones, tablets, laptops, and large desktops — using CSS `clamp()` for spacing/typography, a hamburger menu under 720px, and `prefers-reduced-motion` support.

## Deploying

It's a fully static site — deploy the `project/` folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

© 2025 Hayer Farms · Gulalipur, Tarn Taran, Punjab
