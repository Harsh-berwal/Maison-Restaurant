import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import ContactHero from "@/components/contact/Hero";
import FindUs from "@/components/contact/FindUs";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <FindUs />
      <ContactSection />
      <Footer /> 
    </>
  );
}