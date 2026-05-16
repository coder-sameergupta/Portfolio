# Sameer Gupta — Portfolio Website

A premium, production-ready personal portfolio built with React, Framer Motion, and React Router DOM.

## ✨ Features

- **6 Pages**: Home, About, Skills, Projects, Resume, Contact
- **Animated Hero** with typing effect and floating orbs
- **Page transitions** with Framer Motion
- **Custom cursor** with hover effects
- **Loading screen**
- **Mobile-responsive** with hamburger menu
- **Project search & filter** functionality
- **Contact form** with validation + EmailJS/mailto fallback
- **SEO optimized** with meta tags
- **Dark theme** with electric lime accent

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/coder-sameergupta/portfolio
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📧 Email Setup (Contact Form)

### Option 1: EmailJS (Recommended — No Backend)

1. Create an account at [emailjs.com](https://emailjs.com)
2. Create an **Email Service** (Gmail recommended)
3. Create an **Email Template** with these variables:
   - `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Get your **Service ID**, **Template ID**, and **Public Key**
5. Update `src/pages/Contact.jsx`:

```js
// Uncomment these lines in handleSubmit:
const emailjs = (await import('@emailjs/browser')).default
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  from_name: form.name,
  from_email: form.email,
  subject: form.subject,
  message: form.message,
  to_email: 'sameergupta7906@gmail.com',
}, 'YOUR_PUBLIC_KEY')
```

### Option 2: Mailto Fallback (Already Working)
The form already uses `mailto:` which opens the user's email client. No setup needed.

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
npm run build
vercel --prod
```

Or connect GitHub repo to [vercel.com](https://vercel.com) for auto-deploy.

**Important**: Add `vercel.json` for React Router:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify

```bash
npm run build
# Upload the /dist folder to netlify.com
```

Add `public/_redirects`:
```
/* /index.html 200
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://coder-sameergupta.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then: `npm run deploy`

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── CustomCursor.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Resume.jsx
│       └── Contact.jsx
```

## 🎨 Customization

All content is in the page files. Update:
- **Personal info**: Edit each page file
- **Projects**: `src/pages/Projects.jsx` → `projects` array
- **Skills**: `src/pages/Skills.jsx` → `skillGroups` array
- **Colors**: `src/index.css` → CSS variables in `:root`

## 🔗 Links

- GitHub: [github.com/coder-sameergupta](https://github.com/coder-sameergupta)
- LinkedIn: [linkedin.com/in/sameer-gupta](https://linkedin.com/in/sameer-gupta)
- LeetCode: [leetcode.com/u/coder-sameergupta](https://leetcode.com/u/coder-sameergupta)

## 📄 License

MIT — Free to use and modify.
