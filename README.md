# Bavin Raj – Developer Portfolio Website

A modern, responsive, and high-performance developer portfolio built for **Bavin Raj**, a B.Tech Information Technology graduate specializing in **Java Full Stack Development** (Java, Spring Boot, React, JavaScript, MySQL).

---

## 🚀 Features

- **Developer Aesthetic**: Clean typography, refined dark & light modes with persistent preference storage, and subtle glowing borders.
- **Interactive Code Terminal**: A multi-tab macOS-style IDE window in the hero section displaying Java, React, and MySQL code snippets with copy-to-clipboard functionality.
- **Categorized Skills**: Transparent and honest proficiency tags (*Developing*, *Learning*, *Familiar*, *Proficient*) across Programming, Frontend, Backend, Database, and Tools.
- **Project Showcase**:
  - **Udhavi Kural (Tamil Voice-Based Healthcare Assistance)**: Detailed case study modal with accessibility features and tech tags.
  - Future project placeholders for Java + Spring Boot and React web apps with *Coming Soon* badges.
- **Education & Training Timeline**: Visual timeline tracing B.Tech in IT, Python Diploma, MS Office Diploma, and active Java Full Stack training.
- **Resume Hub**:
  - Direct PDF download button (`/resume-bavin-raj.pdf`).
  - Interactive on-screen ATS Resume Preview modal with a Print button.
- **Validated Contact Form**: Client-side validation with status feedback and modular architecture ready for Spring Boot API integration.
- **Accessibility & SEO**: Semantic HTML5, keyboard navigation, Skip-to-content link, WCAG-compliant color contrast, Open Graph tags, and mobile responsive navigation drawer.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **Fonts**: Inter (Sans-serif) & JetBrains Mono (Monospace) via Google Fonts

---

## 📁 Project Structure

```
d:/portfolio/
├── public/
│   └── resume-bavin-raj.pdf   # Replace this with your actual PDF resume
├── src/
│   ├── components/
│   │   ├── About.jsx          # About Me section with key credentials card
│   │   ├── Contact.jsx        # Contact information & validated contact form
│   │   ├── Education.jsx      # Vertical education & certifications timeline
│   │   ├── Footer.jsx         # Footer with socials, back-to-top & copyright
│   │   ├── Hero.jsx           # Hero banner with bio and CTAs
│   │   ├── Navbar.jsx         # Sticky navigation with scrollspy & mobile menu
│   │   ├── Projects.jsx       # Project showcase cards & Udhavi Kural modal
│   │   ├── ResumeCTA.jsx      # Call-to-action banner for resume
│   │   ├── ResumeModal.jsx    # Interactive ATS resume preview modal
│   │   ├── Skills.jsx         # Categorized technical competencies
│   │   ├── TerminalVisual.jsx # Interactive multi-tab IDE window graphic
│   │   └── ThemeToggle.jsx    # Dark/Light mode switcher with localStorage
│   ├── data/
│   │   └── portfolioData.js   # Centralized data store (easy personalization)
│   ├── App.jsx                # Root layout & modal management
│   ├── index.css              # Tailwind utilities, custom scrollbars & grid
│   └── main.jsx               # Application entry point
├── index.html                 # Main HTML with SEO meta tags
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Theme color extensions & shadows
└── vite.config.js             # Vite configuration
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The compiled, minified output will be in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Personalize Your Information

All content is cleanly decoupled into [`src/data/portfolioData.js`](src/data/portfolioData.js). To customize:

1. **Contact Details & Social Links**:
   - Open `src/data/portfolioData.js`.
   - Update `email`, `phone`, `github`, and `linkedin` with your real URLs.
2. **Replace Resume File**:
   - Save your official resume as `resume-bavin-raj.pdf`.
   - Copy and replace `public/resume-bavin-raj.pdf`.
3. **Add Real Project Links**:
   - Under `projects` in `src/data/portfolioData.js`, add your GitHub repo URLs and live demo links.

---

## 🔌 Connecting the Contact Form to a Backend

The contact form in [`src/components/Contact.jsx`](src/components/Contact.jsx) is already wired with input validation. To connect it to a real backend:

### Option A: Java Spring Boot REST API
In your Spring Boot application, create a controller:
```java
@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @PostMapping
    public ResponseEntity<String> handleContactMessage(@Valid @RequestBody ContactRequest request) {
        // Process message, persist in database, or send notification email
        return ResponseEntity.ok("Message received successfully!");
    }
}
```
Then update the `handleSubmit` method in `Contact.jsx` to `fetch('/api/contact', { method: 'POST', ... })`.

### Option B: Formspree or EmailJS (Serverless)
Replace the submission handler with [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) for zero-backend email delivery.

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### Netlify
1. Drag and drop the `dist/` folder into the Netlify dashboard, or connect your Git repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 📄 License
© 2026 Bavin Raj. All rights reserved.
