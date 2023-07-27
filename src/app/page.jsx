"use client";
import BlobComponent from "@/components/BlobComponent";
import Link from "@/components/Links";
import Footer from "@/components/Footer";

// import { Canvas } from "@react-three/fiber";
// import Blob from "@/components/Blob";

import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Intro from "@/components/Home/Intro";
export default function Home() {
  return (
    <div className="bg-transparent">
      <BlobComponent />
      <Navbar />
      <section id="/">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>{" "}
      {/* <div className="fixed top-0 right-0">
        <Canvas>
          <Blob />
        </Canvas>
      </div> */}
      <div className="md:visible invisible py-3">
        <Footer />
      </div>
    </div>
  );
}
