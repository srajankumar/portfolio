"use client";
import { Intro } from "@/app/Home/Intro";
import { useRef } from "react";

import { DecoderText } from "@/components/DecoderText";

import TextRunner from "@/components/TextRunner";
const disciplines = ["Hello", "world"];

export default function Home() {
  const intro = useRef();
  return (
    <div className="flex flex-col w-full bg-black text-white min-h-screen">
      <div className="">
        <div className="text-3xl font-bold ">
          <DecoderText text="Srajan Kumar" delay={300} />
        </div>
        <Intro id="intro" sectionRef={intro} disciplines={disciplines} />
        <TextRunner />
      </div>
    </div>
  );
}
