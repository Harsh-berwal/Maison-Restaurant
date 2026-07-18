import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import ContactHero from "@/components/contact/Hero";
import FindUs from "@/components/contact/FindUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <FindUs />
      <Footer /> 
    </>
  );
}