"use client";
import BlobComponent from "@/components/BlobComponent";

import Link from "@/components/Links";
import { DecoderText } from "@/components/DecoderText";

import Footer from "@/components/Footer";
import TextRunner from "@/components/TextRunner";

export default function Home() {
  return (
    <div className="bg-transparent">
      <BlobComponent />

      <div className="flex sm:pb-32 pb-40 text-gray-200 justify-center flex-col w-full h-screen">
        <div className="lg:px-72 md:px-32 sm:px-20 px-10">
          <div className="tracking-wide text-gray-400 text-2xl font-gothamB ">
            <DecoderText text="SRAJAN KUMAR" delay={300} />
          </div>
          <div className="absolute font-gothamB py-3 text-5xl">
            <TextRunner />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
