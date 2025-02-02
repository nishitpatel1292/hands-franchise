import React from "react";
import ClientHero from "./ClientHero";

export default function Hero() {
  // const handleButtonClick = () =>{
  //   const contactSection = document.getElementById('contactus');
  //   if(contactSection){
  //     contactSection.scrollIntoView({behavior: "smooth"})
  //   }
  // };
  return (
    <div
      className={`relative min-h-screen flex items-center justify-center hero-section`}
    >
      <ClientHero />
    </div>
  );
}
