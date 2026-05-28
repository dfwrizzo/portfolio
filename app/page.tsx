import SplashScreen from "@/app/components/SplashScreen";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import LogoCarousel from "@/app/components/LogoCarousel";
import TechStack from "@/app/components/TechStack";
import Projects from "@/app/components/Projects";
import Showroom from "@/app/components/Showroom";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <LogoCarousel />
        <TechStack />
        <Projects />
        <Showroom />
        <Experience />
        <Contact />
      </main>
    </>
  );
}