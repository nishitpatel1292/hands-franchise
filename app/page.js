import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeManage from "@components/WeManage";
import ContactUs from "@components/ContactUs";
import AboutUs from "@components/AboutUs";

export default function Home() {
  return (
    <main className="relative">
      <Hero/>
      <AboutUs/>
      <WeManage/>
      <ContactUs/>
    </main>
  );
}
