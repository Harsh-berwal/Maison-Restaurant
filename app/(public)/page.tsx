import Navbar from "@/components/layouts/navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import Specialties from "@/components/home/Specialties";
import Testimonials from "@/components/home/Testimonials";
// import CTA from "@/components/home/CTA";
import Footer from "@/components/layouts/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      <Specialties />
      <Testimonials />
      {/*
      <CTA />
      */}
      <Footer /> 
    </>
  );
}