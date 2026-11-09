import About from "@/components/About";
import EducationContact from "@/components/EducationContact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="space-y-16 py-16 sm:py-20">
          <About />
          <FeaturedProjects />
          <EducationContact />
        </div>
      </main>
      <Footer />
    </>
  );
}
