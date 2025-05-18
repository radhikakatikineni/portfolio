
# Radhika - Full Stack Python Developer Portfolio

This is a React-based portfolio website showcasing Radhika's skills and projects as a Full Stack Python Developer.

## Tech Stack


- **Vite**: Build tool and development server
- **React 18.2.0**: Frontend library
- **TailwindCSS 3.3.3**: Utility-first CSS framework
- **shadcn/ui**: UI components (built with Radix UI)
- **Framer Motion 10.16.4**: Animations library
- **Lucide React 0.285.0**: Icons library

## Prerequisites

- Node.js (version 20 or higher recommended)
- npm (comes with Node.js)

## Getting Started

### 1. Clone the Repository (or Download Files)

If this project were on a Git repository, you would clone it. Since you have the files:
1.  Ensure all files and folders are in a single project directory on your local machine.
2.  Make sure you have the `Radhika_Katiki_Resume.pdf` file in the `public` folder of your project. If the `public` folder doesn't exist, create it at the root of your project and place the PDF file there.

### 2. Install Dependencies

Open your terminal or command prompt, navigate to the project's root directory, and run:

```bash
npm install
```
This command will download and install all the necessary packages defined in `package.json`.

### 3. Running the Development Server

Once the dependencies are installed, you can start the local development server:

```bash
npm run dev
```
This will typically start the application on `http://localhost:5173` (Vite's default port, but it might vary if the port is in use). Open this URL in your web browser to see the website.

The development server supports Hot Module Replacement (HMR), so changes you make to the code will be reflected in the browser almost instantly without a full page reload.

### 4. Building for Production

When you are ready to deploy the website, you can create an optimized production build:

```bash
npm run build
```
This command will generate a `dist` folder in your project root. This folder contains static assets that can be deployed to any web hosting service.

## Project Structure

-   **`public/`**: Contains static assets like `index.html` and your resume PDF.
-   **`src/`**: Contains all the source code for the React application.
    -   **`components/`**: Reusable UI components.
        -   **`ui/`**: shadcn/ui components.
    -   **`lib/`**: Utility functions (e.g., `cn` for classnames).
    -   **`assets/`**: (If you add local images/fonts) Static assets imported by components.
    -   **`App.jsx`**: The main application component where different sections are assembled.
    -   **`main.jsx`**: The entry point of the React application.
    -   **`index.css`**: Global styles and TailwindCSS directives.
-   **`package.json`**: Lists project dependencies and scripts.
-   **`vite.config.js`**: Vite configuration file.
-   **`tailwind.config.js`**: TailwindCSS configuration file.
-   **`postcss.config.js`**: PostCSS configuration file.

## Making Changes

-   **Content**: Most text content can be found directly within the JSX of components in the `src/components/` directory (e.g., `Hero.jsx`, `About.jsx`, `Services.jsx`, etc.).
-   **Styling**: Styles are primarily handled by TailwindCSS classes applied directly in the JSX. Global styles or custom Tailwind components are in `src/index.css`.
-   **Portfolio Projects**: Edit the `projects` array in `src/components/Portfolio.jsx`.
-   **Services**: Edit the `services` array in `src/components/Services.jsx`.
-   **Resume**: To update the resume, replace the `Radhika_Katiki_Resume.pdf` file in the `public` folder with your new PDF. Ensure the filename matches or update the `resumeUrl` variable in `src/components/Navbar.jsx`.

## Contact Form Data

The contact form currently saves messages to the browser's `localStorage`. You can view these messages by opening your browser's developer tools, going to the "Application" tab (in Chrome/Edge) or "Storage" tab (in Firefox), and looking under "Local Storage" for your website's domain.

For a production environment, you would typically integrate this form with a backend service (like Supabase, Firebase, or your own API) to store messages persistently and securely.

Enjoy customizing your portfolio!
