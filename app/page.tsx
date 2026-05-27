import SplashScreen from "@/app/components/SplashScreen";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import LogoCarousel from "@/app/components/LogoCarousel";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <LogoCarousel />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}