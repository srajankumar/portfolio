"use client";
import { DecoderText } from "@/templates/DecoderText";
import Image from "next/image";
import BlobComponent from "@/components/BlobComponent";
import Footer from "@/components/Footer";
import Link from "next/link";
const Arts = () => {
  return (
    <div>
      <BlobComponent />
      <nav>
        <Link
          className="fixed right-0 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 hover:bg-opacity-5 transition duration-300 text-white font-gothamB tracking-wide w-20 flex items-center justify-center rounded-full py-2 px-16 md:mr-10 mr-6 md:mt-8 mt-12 cursor-pointer"
          href="/"
        >
          back
        </Link>
      </nav>
      <div className="md:px-5 md:pt-5 p-2">
        <div className="px-5 pb-10 md:pt-5 pt-10 md:text-5xl text-4xl font-gothamB">
          <DecoderText text="Reo Arts" delay={300} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:px-5 px-4">
          <div className="grid gap-4">
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/eight.jpeg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/six.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/twenty_three.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/fourteen.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/twelve.jpeg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/two.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/thirteen.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/one.jpeg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/eleven.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/seven.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/five.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={500}
                height={500}
                className="h-auto max-w-full rounded-lg"
                src="/assets/arts/six.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Arts;
