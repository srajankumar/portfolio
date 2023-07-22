"use client";
import BlobComponent from "@/components/BlobComponent";
import Link from "@/components/Links";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Intro from "@/components/Home/Intro";
export default function Home() {
  return (
    <div className="bg-transparent">
      <BlobComponent />
      <Intro />
      <Footer />
    </div>
  );
}
