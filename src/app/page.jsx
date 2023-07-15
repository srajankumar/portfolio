"use client";
import { DecoderText } from "@/components/DecoderText";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black text-white min-h-screen">
      <div className="">
        <div className="text-3xl font-bold ">
          <DecoderText text="Srajan Kumar" delay={300} />
        </div>
      </div>
    </div>
  );
}
