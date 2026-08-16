import About from "./about";
import Contact from "../pages/Contact";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";

export default function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
