import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoreWeb Innovations — Innovating the Core of the Web" },
      { name: "description", content: "Premium futuristic web development agency building modern, scalable, high-performance websites and digital experiences." },
      { property: "og:title", content: "CoreWeb Innovations — Innovating the Core of the Web" },
      { property: "og:description", content: "We build modern, scalable, and high-performance websites infused with futuristic digital experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Loader />
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Marquee />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
