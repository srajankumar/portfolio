"use client";
import BlobComponent from "@/components/BlobComponent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Blob from "@/components/Blob";
import SlidingImages from "@/components/SlidingImages";
import Linkk from "@/utils/Links";
import ArtsSection from "@/components/ArtsSection";

export default function Home() {
  return (
    <div className="bg-transparent">
      <BlobComponent />
      {/* <Blob /> */}
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
      <div id="arts">
        <ArtsSection />
      </div>
      <section id="contact">
        <Contact />
      </section>
      <div className="md:visible invisible md:py-0 py-3">
        <Footer />
      </div>
    </div>
  );
}
