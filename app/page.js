import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeManage from "@components/WeManage";

export default function Home() {
  return (
    <main className="relative">
      <Navbar/>
      <Hero/>
      <WeManage/>
    </main>
  );
}
