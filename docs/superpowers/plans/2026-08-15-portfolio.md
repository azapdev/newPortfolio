# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a beautiful, responsive, single-page React portfolio for Ahmed Elazap, showcasing his dual profile as a Dental Student and App Developer.

**Architecture:** A Vite + React application using Tailwind CSS for styling and Framer Motion for scroll animations. The app will have a single-page structure for Home, About, Skills, Projects, and Contact, plus a separate Gallery route.

**Tech Stack:** React, Vite, Tailwind CSS, Framer Motion, Lucide React, React Router DOM.

## Global Constraints
- **Colors:** Base Background `#FBFBFE`, Alt Background `#F3F4FA`, Cards `#FFFFFF`, Primary Text `#1F2430`, Secondary Text `#6B7280`, Primary Accent `#2DA8A0`, Secondary Accent `#FF8A65`, Gradient Accent `#3AAFA9` to `#7B61FF`, Success `#4CAF7D`, Borders `#E5E7EB`.
- **Fonts:** Headings in Poppins, Body in Inter.
- **Styling:** Tailwind CSS. No custom CSS classes unless absolutely necessary.
- **Animations:** Framer Motion for scroll/hover interactions.

---

### Task 1: Project Scaffolding and Dependencies

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/index.css`
- Test: `tests/setup.test.jsx`

**Interfaces:**
- Consumes: None
- Produces: Base configured React app with routing and Tailwind CSS ready.

- [ ] **Step 1: Write the failing test**
```javascript
// tests/setup.test.jsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../src/App';

describe('App Setup', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Portfolio')).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npm run test tests/setup.test.jsx`
Expected: FAIL due to missing files/components.

- [ ] **Step 3: Write minimal implementation**
```bash
npm install react-router-dom framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer vitest @testing-library/react @testing-library/jest-dom jsdom
npx tailwindcss init -p
```
Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#FBFBFE',
        bgAlt: '#F3F4FA',
        card: '#FFFFFF',
        textPrimary: '#1F2430',
        textSecondary: '#6B7280',
        accentPrimary: '#2DA8A0',
        accentSecondary: '#FF8A65',
        success: '#4CAF7D',
        borderLight: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
```
Update `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-bgMain text-textPrimary font-sans;
}
h1, h2, h3, h4, h5, h6 {
  @apply font-heading;
}
```
Update `src/App.jsx`:
```javascript
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<div>Portfolio</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**
Run: `npm run test tests/setup.test.jsx`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "chore: setup project dependencies, tailwind, and routing"
```

### Task 2: Navbar Component

**Files:**
- Create: `src/components/Navbar.jsx`
- Modify: `src/App.jsx`
- Test: `tests/Navbar.test.jsx`

**Interfaces:**
- Consumes: React Router
- Produces: `<Navbar />` component.

- [ ] **Step 1: Write the failing test**
```javascript
// tests/Navbar.test.jsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/Navbar';

describe('Navbar Component', () => {
  it('renders logo and navigation links', () => {
    const { getByText } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(getByText('M.')).toBeDefined();
    expect(getByText('Contact Me')).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npm run test tests/Navbar.test.jsx`
Expected: FAIL

- [ ] **Step 3: Write minimal implementation**
```javascript
// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-borderLight shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center justify-center w-10 h-10 rounded-full bg-accentPrimary text-white font-heading font-bold text-xl">
          M.
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#home" className="text-textSecondary hover:text-accentPrimary font-medium">Home</a>
          <a href="#about" className="text-textSecondary hover:text-accentPrimary font-medium">About</a>
          <a href="#skills" className="text-textSecondary hover:text-accentPrimary font-medium">Skills</a>
          <a href="#projects" className="text-textSecondary hover:text-accentPrimary font-medium">Projects</a>
          <Link to="/gallery" className="text-textSecondary hover:text-accentPrimary font-medium">Gallery</Link>
        </div>
        <div className="flex gap-4">
          <a href="/resume.pdf" className="hidden md:block px-4 py-2 rounded-full border-2 border-accentPrimary text-accentPrimary font-medium hover:bg-accentPrimary/10 transition-colors">Resume</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-accentPrimary text-white font-medium hover:bg-[#258c85] transition-colors shadow-md hover:shadow-lg">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}
```
Modify `src/App.jsx`:
```javascript
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="pt-16">Portfolio</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**
Run: `npm run test tests/Navbar.test.jsx`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/components/Navbar.jsx src/App.jsx tests/Navbar.test.jsx
git commit -m "feat: implement responsive Navbar component"
```

### Task 3: Hero Section

**Files:**
- Create: `src/components/Hero.jsx`
- Modify: `src/App.jsx`
- Test: `tests/Hero.test.jsx`

**Interfaces:**
- Consumes: Framer Motion.
- Produces: `<Hero />` component to be rendered in Home.

- [ ] **Step 1: Write the failing test**
```javascript
// tests/Hero.test.jsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Hero from '../src/components/Hero';

describe('Hero Component', () => {
  it('renders hero content', () => {
    const { getByText } = render(<Hero />);
    expect(getByText('Dental Student & App Developer')).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npm run test tests/Hero.test.jsx`
Expected: FAIL

- [ ] **Step 3: Write minimal implementation**
```javascript
// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center px-4 py-20 relative overflow-hidden bg-bgMain">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3AAFA9]/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B61FF]/15 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-2 rounded-full bg-accentPrimary/10 text-accentPrimary font-semibold mb-6">
            👋 Hi, I'm Mohamed
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6 text-textPrimary">
            Dental Student & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3AAFA9] to-[#7B61FF]">App Developer</span>
          </h1>
          <p className="text-lg text-textSecondary mb-8 max-w-lg">
            Building healthier smiles in the clinic and better digital experiences in the code editor. Passionate about merging healthcare and technology.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 rounded-full bg-accentPrimary text-white font-medium hover:bg-[#258c85] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              View My Work
            </a>
            <a href="/resume.pdf" className="px-6 py-3 rounded-full border-2 border-borderLight text-textPrimary font-medium hover:border-accentPrimary hover:text-accentPrimary transition-all">
              Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl relative z-10">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              [Photo Placeholder]
            </div>
          </div>
          <div className="absolute -right-6 top-10 bg-white p-3 rounded-xl shadow-xl z-20 flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <span className="font-semibold text-sm">Dental Student</span>
          </div>
          <div className="absolute -left-6 bottom-10 bg-white p-3 rounded-xl shadow-xl z-20 flex items-center gap-2">
            <span className="text-xl">💻</span>
            <span className="font-semibold text-sm">App Developer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```
Modify `src/App.jsx`:
```javascript
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**
Run: `npm run test tests/Hero.test.jsx`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/components/Hero.jsx src/App.jsx tests/Hero.test.jsx
git commit -m "feat: implement animated Hero section"
```

### Task 4: About Section

**Files:**
- Create: `src/components/About.jsx`
- Modify: `src/App.jsx`
- Test: `tests/About.test.jsx`

**Interfaces:**
- Produces: `<About />` component.

- [ ] **Step 1: Write the failing test**
```javascript
// tests/About.test.jsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import About from '../src/components/About';

describe('About Component', () => {
  it('renders about section with stat cards', () => {
    const { getByText } = render(<About />);
    expect(getByText('About Me')).toBeDefined();
    expect(getByText('Always Learning')).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npm run test tests/About.test.jsx`
Expected: FAIL

- [ ] **Step 3: Write minimal implementation**
```javascript
// src/components/About.jsx
import React from 'react';

export default function About() {
  const stats = [
    { label: "Apps Built", value: "10+" },
    { label: "Dental Year", value: "3rd" },
    { label: "Projects", value: "25+" },
    { label: "Status", value: "Always Learning" }
  ];

  return (
    <section id="about" className="py-24 bg-bgAlt px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-textPrimary">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-borderLight">
            <h3 className="text-2xl font-semibold mb-4 text-accentPrimary">Bridging Healthcare & Tech</h3>
            <p className="text-textSecondary mb-6 leading-relaxed">
              As a dental student by day and a self-taught mobile app developer by night, I find joy in solving complex problems. Whether it's diagnosing oral pathologies or debugging Kotlin code, my goal is always to improve lives and craft seamless experiences.
            </p>
            <p className="text-textSecondary leading-relaxed">
              I specialize in mobile development with native Android and Flutter, constantly exploring how technology can intersect with healthcare to create meaningful digital products.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-borderLight flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <span className="text-3xl font-bold text-textPrimary mb-2">{stat.value}</span>
                <span className="text-sm font-medium text-textSecondary">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```
Modify `src/App.jsx` HomePage component to include `<About />`:
```javascript
import About from './components/About';
// inside HomePage:
function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**
Run: `npm run test tests/About.test.jsx`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/components/About.jsx src/App.jsx tests/About.test.jsx
git commit -m "feat: implement About section with stat cards"
```

### Task 5: Skills Section (Split View)

**Files:**
- Create: `src/components/Skills.jsx`
- Modify: `src/App.jsx`
- Test: `tests/Skills.test.jsx`

**Interfaces:**
- Produces: `<Skills />` component with tabbed navigation between Tech and Dental.

- [ ] **Step 1: Write the failing test**
```javascript
// tests/Skills.test.jsx
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Skills from '../src/components/Skills';

describe('Skills Component', () => {
  it('renders tech and dental skill tabs', () => {
    const { getByText } = render(<Skills />);
    expect(getByText('Tech Skills')).toBeDefined();
    expect(getByText('Dental Focus')).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npm run test tests/Skills.test.jsx`
Expected: FAIL

- [ ] **Step 3: Write minimal implementation**
```javascript
// src/components/Skills.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('tech');

  const techSkills = [
    { name: 'Kotlin', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'Flutter', category: 'Framework' },
    { name: 'React', category: 'Framework' },
    { name: 'Android Studio', category: 'Tool' },
    { name: 'Git', category: 'Tool' },
  ];

  const dentalSkills = [
    { name: 'Oral Pathology', category: 'Academic' },
    { name: 'Restorative Dentistry', category: 'Clinical' },
    { name: 'Radiography', category: 'Clinical' },
    { name: 'Patient Care', category: 'Soft Skill' },
  ];

  return (
    <section id="skills" className="py-24 bg-bgMain px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10 text-textPrimary">My Expertise</h2>
        
        <div className="flex justify-center mb-12">
          <div className="bg-bgAlt p-1 rounded-full flex gap-2 border border-borderLight">
            <button 
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'tech' ? 'bg-white text-accentPrimary shadow-sm' : 'text-textSecondary hover:text-textPrimary'}`}
            >
              💻 Tech Skills
            </button>
            <button 
              onClick={() => setActiveTab('dental')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'dental' ? 'bg-white text-accentPrimary shadow-sm' : 'text-textSecondary hover:text-textPrimary'}`}
            >
              🦷 Dental Focus
            </button>
          </div>
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === 'tech' ? (
              <motion.div key="tech" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techSkills.map((skill, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-borderLight shadow-sm hover:border-accentPrimary transition-colors flex flex-col items-center justify-center gap-2">
                    <span className="font-semibold text-textPrimary">{skill.name}</span>
                    <span className="text-xs text-textSecondary bg-bgAlt px-2 py-1 rounded-md">{skill.category}</span>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div key="dental" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {dentalSkills.map((skill, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-borderLight shadow-sm hover:border-accentSecondary transition-colors flex flex-col items-center justify-center gap-2">
                    <span className="font-semibold text-textPrimary">{skill.name}</span>
                    <span className="text-xs text-textSecondary bg-bgAlt px-2 py-1 rounded-md">{skill.category}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
```
Modify `src/App.jsx` HomePage component to include `<Skills />`.

- [ ] **Step 4: Run test to verify it passes**
Run: `npm run test tests/Skills.test.jsx`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/components/Skills.jsx src/App.jsx tests/Skills.test.jsx
git commit -m "feat: implement tabbed Skills section"
```

### Task 6: Projects Section

**Files:**
- Create: `src/components/Projects.jsx`
- Modify: `src/App.jsx`
- Test: `tests/Projects.test.jsx`

**Interfaces:**
- Produces: `<Projects />` component with project cards.

- [ ] **Step 1: Write the failing test**
```javascript
// tests/Projects.test.jsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Projects from '../src/components/Projects';

describe('Projects Component', () => {
  it('renders projects section', () => {
    const { getByText } = render(<Projects />);
    expect(getByText("What I've Built")).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npm run test tests/Projects.test.jsx`
Expected: FAIL

- [ ] **Step 3: Write minimal implementation**
```javascript
// src/components/Projects.jsx
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "DentalSync App",
      desc: "A clinic management mobile app for tracking patient records.",
      tags: ["Kotlin", "Firebase"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Study Timer",
      desc: "Pomodoro-style app for medical students with custom intervals.",
      tags: ["Flutter", "Dart"],
      links: { demo: "#", github: "#" }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-bgAlt px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-textPrimary">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-borderLight group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                [Image Placeholder]
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-semibold px-3 py-1 bg-accentPrimary/10 text-accentPrimary rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-textPrimary">{proj.title}</h3>
                <p className="text-textSecondary mb-6">{proj.desc}</p>
                <div className="flex gap-4">
                  <a href={proj.links.demo} className="flex items-center gap-2 text-sm font-semibold text-textPrimary hover:text-accentPrimary transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={proj.links.github} className="flex items-center gap-2 text-sm font-semibold text-textPrimary hover:text-accentPrimary transition-colors">
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```
Modify `src/App.jsx` HomePage component to include `<Projects />`.

- [ ] **Step 4: Run test to verify it passes**
Run: `npm run test tests/Projects.test.jsx`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/components/Projects.jsx src/App.jsx tests/Projects.test.jsx
git commit -m "feat: implement Projects grid"
```

### Task 7: Contact and Footer

**Files:**
- Create: `src/components/Contact.jsx`
- Create: `src/components/Footer.jsx`
- Modify: `src/App.jsx`
- Test: `tests/Contact.test.jsx`

**Interfaces:**
- Produces: `<Contact />` and `<Footer />` components.

- [ ] **Step 1: Write the failing test**
```javascript
// tests/Contact.test.jsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

describe('Contact & Footer', () => {
  it('renders contact section', () => {
    const { getByText } = render(<Contact />);
    expect(getByText("Let's Talk")).toBeDefined();
  });
  it('renders footer', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/All rights reserved/)).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npm run test tests/Contact.test.jsx`
Expected: FAIL

- [ ] **Step 3: Write minimal implementation**
```javascript
// src/components/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bgMain px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-borderLight grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4 text-textPrimary">Let's Talk</h2>
            <p className="text-textSecondary mb-8">Looking for a developer, or just want to chat about dentistry? Send me a message.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success font-medium rounded-full text-sm">
              <span className="w-2 h-2 rounded-full bg-success"></span> Available for opportunities
            </div>
          </div>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="px-4 py-3 rounded-xl border border-borderLight bg-bgAlt focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all" />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-xl border border-borderLight bg-bgAlt focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all" />
            <textarea placeholder="Message" rows="4" className="px-4 py-3 rounded-xl border border-borderLight bg-bgAlt focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all resize-none"></textarea>
            <button type="submit" className="py-3 px-6 bg-accentPrimary hover:bg-[#258c85] text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all text-center">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
```
```javascript
// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-borderLight py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-textSecondary text-sm">© {new Date().getFullYear()} Mohamed. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-textSecondary hover:text-accentPrimary">GitHub</a>
          <a href="#" className="text-textSecondary hover:text-accentPrimary">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
```
Modify `src/App.jsx` HomePage component to include `<Contact />` and `<Footer />`. (Put Footer outside HomePage if it applies to Gallery too).

- [ ] **Step 4: Run test to verify it passes**
Run: `npm run test tests/Contact.test.jsx`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/components/Contact.jsx src/components/Footer.jsx src/App.jsx tests/Contact.test.jsx
git commit -m "feat: implement Contact form and Footer"
```

### Task 8: Gallery Page

**Files:**
- Create: `src/pages/Gallery.jsx`
- Modify: `src/App.jsx`
- Test: `tests/Gallery.test.jsx`

**Interfaces:**
- Produces: `<Gallery />` page available at `/gallery`.

- [ ] **Step 1: Write the failing test**
```javascript
// tests/Gallery.test.jsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Gallery from '../src/pages/Gallery';

describe('Gallery Page', () => {
  it('renders gallery grid', () => {
    const { getByText } = render(<BrowserRouter><Gallery /></BrowserRouter>);
    expect(getByText('Visual Log')).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npm run test tests/Gallery.test.jsx`
Expected: FAIL

- [ ] **Step 3: Write minimal implementation**
```javascript
// src/pages/Gallery.jsx
import React from 'react';

export default function Gallery() {
  const images = [1, 2, 3, 4, 5, 6]; // Placeholders

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-bgAlt">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-heading font-bold text-textPrimary mb-4">Visual Log</h1>
          <p className="text-textSecondary">App UI snapshots & Dental clinic moments.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map(img => (
            <div key={img} className="bg-gray-200 rounded-2xl border border-borderLight overflow-hidden hover:shadow-lg transition-shadow flex items-center justify-center text-gray-400">
              [Gallery Image {img}]
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```
Modify `src/App.jsx`:
```javascript
import Gallery from './pages/Gallery';

// In Routes:
<Route path="/gallery" element={<Gallery />} />
```

- [ ] **Step 4: Run test to verify it passes**
Run: `npm run test tests/Gallery.test.jsx`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/pages/Gallery.jsx src/App.jsx tests/Gallery.test.jsx
git commit -m "feat: implement Gallery page"
```
