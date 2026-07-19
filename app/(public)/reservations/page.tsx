import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import ReservationHero from "@/components/reservations/HeroSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <ReservationHero />
      <Footer /> 
    </>
  );
}