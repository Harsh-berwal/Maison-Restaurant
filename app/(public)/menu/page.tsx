import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import CTA from "@/components/home/CTA";
import MenuHero from "@/components/menu/Hero";
import MenuSection from "@/components/menu/MenuSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <MenuHero />
      <MenuSection />
      <CTA />
      <Footer /> 
    </>
  );
}