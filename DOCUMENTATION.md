
# Website Documentation: Radhi K. - Developer Portfolio

This document provides an overview of the project structure and guidance on how to make common changes to your portfolio website.

## 1. Project Overview

This website is a single-page application (SPA) built with React, Vite, TailwindCSS, shadcn/ui, and Framer Motion. It's designed to showcase your skills, services, portfolio, and provide a way for visitors to contact you.

**Key Technologies:**

*   **Vite:** Fast build tool and development server.
*   **React:** JavaScript library for building user interfaces.
*   **React Router:** For handling navigation between different "pages" or views (like Terms of Service).
*   **TailwindCSS:** A utility-first CSS framework for rapid styling.
*   **shadcn/ui:** Pre-built UI components (like Buttons, Cards, Inputs) that are customizable.
*   **Framer Motion:** For animations and transitions.
*   **Lucide React:** For icons.
*   **Supabase:** For backend services (currently used for the contact form).

## 2. Project Structure

Here's a simplified view of the important files and folders:

```
.
├── public/
│   ├── Radhi_Katiki_Resume.pdf  // Your resume file
│   └── vite.svg                 // Vite icon (can be changed)
│   └── index.html               // Main HTML entry point
├── src/
│   ├── components/              // Reusable UI parts
│   │   ├── ui/                  // shadcn/ui components (Button, Card, etc.)
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ContactInfo.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Portfolio.jsx
│   │   ├── SectionHeader.jsx
│   │   └── Services.jsx
│   ├── lib/
│   │   ├── supabaseClient.js    // Supabase client initialization
│   │   └── utils.js             // Utility functions (e.g., cn for classnames)
│   ├── pages/
│   │   ├── HomePage.jsx         // Main page assembling all sections
│   │   └── LegalPage.jsx        // For Terms of Service & Privacy Policy
│   ├── App.jsx                  // Main application component, sets up routing
│   ├── index.css                // Global styles, Tailwind directives, color variables
│   └── main.jsx                 // React application entry point
├── .env.local                   // (Optional) For local environment variables (not committed)
├── DOCUMENTATION.md             // This file
├── package.json                 // Project dependencies and scripts
├── tailwind.config.js           // TailwindCSS configuration
└── vite.config.js               // Vite configuration (Read-Only)
```

## 3. Running the Project Locally

1.  **Open Terminal:** Navigate to your project's root directory.
2.  **Install Dependencies (if you haven't already):**
    ```bash
    npm install
    ```
3.  **Start Development Server:**
    ```bash
    npm run dev
    ```
    This will usually open the website at `http://localhost:5173` in your browser. Changes you make to the code will update live in the browser.

## 4. Making Common Changes

### 4.1. Changing Text Content

Most text (headings, paragraphs, button labels) is directly written within the JSX of the respective components.

*   **Hero Section (Intro, Name, Title):**
    *   File: `src/components/Hero.jsx`
    *   Look for text elements like `<h1>`, `<p>`, and `<Button>`.
*   **About Me (Journey, Skills):**
    *   File: `src/components/About.jsx`
    *   The main narrative is in `<p>` tags.
    *   Skills are in the `skills` array.
    *   Journey points are in the `journeyPoints` array.
*   **Services Offered:**
    *   File: `src/components/Services.jsx`
    *   Each service is an object in the `servicesData` array. Modify `title`, `description`, and `features` for each service.
*   **Portfolio/My Work:**
    *   File: `src/components/Portfolio.jsx`
    *   Each project is an object in the `portfolioData` array. Modify `title`, `description`, `projectUrl`, and `tags`.
*   **Contact Information:**
    *   File: `src/components/ContactInfo.jsx`
    *   Email, phone, location are in the `contactDetails` array.
    *   Social media links are in the `socialLinks` array.
*   **Footer Links & Copyright:**
    *   File: `src/components/Footer.jsx`
    *   Legal page links are in `footerLinks`.
    *   Copyright text is directly in a `<p>` tag.
*   **Navigation Bar Links:**
    *   File: `src/components/Navbar.jsx`
    *   Links are in the `navLinks` array.

**Example: Changing the Hero Title**

Open `src/components/Hero.jsx`. Find a line similar to:
`<motion.h1 ...>Radhi Katiki</motion.h1>`
Change "Radhi Katiki" to your desired text.

### 4.2. Updating Your Resume

1.  **Prepare your PDF:** Make sure your resume is saved as a PDF file.
2.  **Replace the file:**
    *   Go to the `public/` folder in your project.
    *   Delete the existing `Radhi_Katiki_Resume.pdf`.
    *   Place your new resume PDF file in the `public/` folder.
    *   **Crucially, name your new PDF file exactly `Radhi_Katiki_Resume.pdf`**.
3.  The download links in the Navbar and Hero section are hardcoded to point to this filename. If you use a different filename, you'll need to update the `resumeUrl` variable in `src/components/Navbar.jsx` and the `href` in `src/components/Hero.jsx`.

### 4.3. Changing Images

*   **Hero Image (Your Profile Picture):**
    *   File: `src/components/Hero.jsx`
    *   Find the `<img-replace>` tag. The text content inside this tag is the description for the image. The system uses this to find a relevant image. If you want to use a specific URL, replace `<img-replace src="YOUR_URL_HERE" ...>`
*   **Portfolio Project Images:**
    *   File: `src/components/Portfolio.jsx`
    *   In the `portfolioData` array, each project object has an `imageUrl` property.
    *   Update the URL string for the desired project. For new images, you can use `<img-replace>` within the `PortfolioCard` component if you modify it, or provide direct URLs.
    *   The current setup uses `<img-replace>` within `PortfolioCard.jsx` which takes `project.imageUrl` as its `src` if it's a URL, or uses the text content for system image selection.
*   **About Me Image (If you re-add it):**
    *   File: `src/components/About.jsx`
    *   If you add an image back, you'd use an `<img-replace>` tag similar to the Hero section.

### 4.4. Modifying Colors and Theme

Colors are primarily defined as CSS variables in `src/index.css`.

1.  Open `src/index.css`.
2.  Look for the `:root` block:

    ```css
    :root {
      --background: 240 10% 3.9%; /* Dark Gray */
      --foreground: 0 0% 98%; /* Almost White */
      /* ... other color variables ... */
      --primary: 262 84% 58%; /* Vibrant Purple */
      --primary-foreground: 0 0% 98%;
      --secondary: 300 80% 60%; /* Magenta/Pinkish Purple */
      --secondary-foreground: 0 0% 98%;
      /* ... etc. ... */
    }
    ```
3.  These colors are defined using HSL values (Hue, Saturation, Lightness).
    *   `--background`: Main background color.
    *   `--foreground`: Main text color.
    *   `--primary`: Main accent color (buttons, highlights).
    *   `--secondary`: Secondary accent color.
    *   `--card`: Background color for card elements.
    *   `--accent`: Another accent color, often used for icons or subtle highlights.
4.  Change the HSL values to your desired colors. You can use an online HSL color picker to find values.
5.  TailwindCSS uses these variables throughout the `tailwind.config.js` file to generate its utility classes.

### 4.5. Adding or Removing Sections from Homepage

The main page layout is controlled by `src/pages/HomePage.jsx`.

```jsx
// src/pages/HomePage.jsx
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
// import Testimonials from '@/components/Testimonials'; // Example: if you had this
import Contact from '@/components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
};

export default HomePage;
```

*   **To remove a section:** Comment out or delete its component line (e.g., delete `<Services />`).
*   **To add a new section:**
    1.  Create your new component (e.g., `src/components/MyNewSection.jsx`).
    2.  Import it into `HomePage.jsx`.
    3.  Add its tag (e.g., `<MyNewSection />`) in the desired order.
*   **To reorder sections:** Change the order of the component tags.

### 4.6. Managing Contact Form Submissions (Supabase)

Contact form submissions are stored in your Supabase project in a table named `contact_messages`.

1.  **Log in to Supabase:** Go to [Supabase Dashboard](https://app.supabase.io).
2.  Select your project ("Radhi Portfolio").
3.  In the left sidebar, go to the **Table Editor** (icon looks like a grid).
4.  Select the `contact_messages` table. You'll see all submitted messages here.

### 4.7. Google Analytics

1.  Open `index.html` in the root of your project.
2.  Find these lines:
    ```html
    <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'YOUR_GA_MEASUREMENT_ID');
    </script>
    ```
3.  Replace `YOUR_GA_MEASUREMENT_ID` (in two places) with your actual Google Analytics Measurement ID (e.g., `G-XXXXXXXXXX`).
4.  You can get this ID from your Google Analytics account under Admin > Data Streams > Your Web Stream.

## 5. Deployment

When you're ready to make your website live:

1.  **Build the project:**
    ```bash
    npm run build
    ```
    This creates a `dist/` folder with optimized static files.
2.  **Publish:** You can deploy your project by pressing the "Publish" button located at the top-right corner of the Hostinger Horizons interface. This will deploy the contents of the `dist/` folder to your Hostinger hosting plan.

This documentation should help you manage and update your portfolio website. If you encounter issues or need further modifications, you can always ask for assistance!
