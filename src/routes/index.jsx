// src/routes/index.js
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Careers from '../pages/Careers';
import NewsSection from '../components/sections/NewsSection';
import NewsDetail from '../pages/NewsDetail';
import ProjectDetail from '../pages/ProjectDetail';
import ContactPage from '../pages/ContactPage';

export const routes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "services",
    element: <Services />
  },
  {
    path: "projects",
    element: <Projects />
  },
  {
    path: "careers",
    element: <Careers />
  },
  {
    path: "news",
    element: <NewsSection />
  },
  {
    path: "news/:slug",
    element: <NewsDetail />
  },
  {
    path: "project/:slug",
    element: <ProjectDetail />
  },
  {
    path: "contact",
    element: <ContactPage />
  }
];