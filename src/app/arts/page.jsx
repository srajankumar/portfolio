"use client";
import { DecoderText } from "@/utils/DecoderText";
import Image from "next/image";
import BlobComponent from "@/components/BlobComponent";
import Footer from "@/components/Footer";
import Link from "next/link";
import ArtsSection from "@/components/ArtsSection";
const Arts = () => {
  return (
    <div>
      <BlobComponent />
      <nav>
        <Link
          className="fixed z-10 right-0 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 hover:bg-opacity-5 transition duration-300 text-white font-gothamB tracking-wide w-20 flex items-center justify-center rounded-full py-2 px-16 md:mr-10 mr-6 md:mt-8 mt-12 cursor-pointer"
          href="/"
        >
          back
        </Link>
      </nav>
      <div className="md:px-5 md:pt-5 p-2">
        <div className="px-5 pb-10 md:pt-5 pt-10 md:text-5xl text-4xl font-gothamB">
          <DecoderText text="Reo Arts." delay={300} />
        </div>
        <ArtsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Arts;
