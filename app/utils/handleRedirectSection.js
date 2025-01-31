"use client";

import { usePathname, useRouter } from "next/navigation";

export const useHandleRedirectSection = () => {
  const path = usePathname();
  const router = useRouter();

  const handleRedirectSection = (id) => {
    const section = document.getElementById(id);
    if (path === "/") {
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
      section?.scrollIntoView({behavior: "smooth"})
    }
  };

  return handleRedirectSection;
};