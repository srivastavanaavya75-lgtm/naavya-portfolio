import Navbar from "./NavbarComponent";
import Hero from "./Hero";

import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Certifications from "./components/Certifications/Certifications";
import Footer from "./components/Footer/Footer";

 export default function App() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Skills />

      <Certifications />

      <Contact />

      <Footer />
      
    </main>
  );
}