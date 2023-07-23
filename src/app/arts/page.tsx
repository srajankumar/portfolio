"use client";
import "./arts.css";
import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery1 from "./components/Gallery1";
import Gallery2 from "./components/Gallery2";
import BlobComponent from "@/components/BlobComponent";
const Arts = () => {
  return (
    <div>
      <BlobComponent />
      <div className="bg-gradient-to-b from-black to-transparent">
        <Header />
      </div>
      <div className="absolute -z-10 top-0 bg-gradient-to-b from-black to-transparent w-full h-screen"></div>
      <div className="fixed -z-10 top-0 backdrop-blur-3xl w-full h-screen"></div>
      <div className="backdrop-blur-3xl">
        <Gallery1 />
        <Gallery2 />
        <Footer />
      </div>
    </div>
  );
};

export default Arts;
