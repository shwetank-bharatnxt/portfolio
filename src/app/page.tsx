import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Backdrop from "@/components/Backdrop";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative">
      <Backdrop />
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
