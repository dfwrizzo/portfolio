import SplashScreen from "@/app/components/SplashScreen";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import TechStack from "@/app/components/TechStack";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}