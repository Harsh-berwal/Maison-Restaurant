import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import ReservationForm from "@/components/reservations/ReservationForm";
import ReservationHero from "@/components/reservations/HeroSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <ReservationHero />
      <ReservationForm />
      <Footer /> 
    </>
  );
}