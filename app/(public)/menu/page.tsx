import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import CTA from "@/components/home/CTA";
import MenuHero from "@/components/menu/Hero";


export default function Home() {
  return (
    <>
      <Navbar />
      <MenuHero />
      
      <CTA />
      <Footer /> 
    </>
  );
}