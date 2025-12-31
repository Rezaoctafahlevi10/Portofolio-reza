import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/aboutme";
import Project from "@/components/Project";
import Footer from "@/components/footer";
import Skill from "@/components/skill";

export default function Home() {
  return (
    <main id="home" className="bg-[#f7f7fb] min-h-screen">
      <Navbar />
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Footer/>
    </main>
  );
}
