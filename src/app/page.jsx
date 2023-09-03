"use client";
import BlobComponent from "@/components/BlobComponent";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Project from "@/components/ProjectSection/Project";
// import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-transparent">
      <BlobComponent />
      {/* <Sidebar /> */}
      <Navbar />
      <section id="/">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <div className="md:visible invisible md:py-0 py-3">
        <Footer />
      </div>
    </div>
  );
}
