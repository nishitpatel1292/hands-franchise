import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeManage from "@components/WeManage";
import ContactUs from "@components/ContactUs";

export default function Home() {
  return (
    <main className="relative">
      <Navbar/>
      <Hero/>
      <WeManage/>
      <ContactUs/>
    </main>
  );
}
