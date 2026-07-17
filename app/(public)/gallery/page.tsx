import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import CTA from "@/components/home/CTA";
import GalleryHero from "@/components/gallery/Hero";
import GallerySection from "@/components/gallery/GallerySection";



export default function Home() {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <GallerySection />
      <CTA />
      <Footer /> 
    </>
  );
}