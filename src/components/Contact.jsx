"use client";
import { Vector3 } from "three";
import { Canvas } from "react-three-fiber";
import Blob from "@/components/Blobby";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import Link from "next/link";
import Linkk from "@/components/Links";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import BlobComponent from "@/components/BlobComponent";
import { DecoderText } from "@/components/DecoderText";
import "@/styles/contact.css";
const Contact = () => {
  const cameraPosition = new Vector3(0, 0, 2);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: name,
        reply_to: email,
        to_name: "kumarsrajan02@gmail.com",
        subject: subject,
        message: message,
      };

      await emailjs.send(
        "service_e4hv9j3",
        "template_l0xp1bj",
        templateParams,
        "8lrYwpLvn3cMHLz2B"
      );
      alert("ありがとうございます! Your message has been sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="  flex justify-between w-full lg:mx-40 md:mx-14 flex-wrap"
      >
        <div className="md:w-1/2 px-14 md:mt-0 md:py-0 py-5 w-full flex flex-col justify-center">
          {/* <div className="md:text-xl md:w-auto w-full font-normal">
            <div className="bg-black rounded-3xl px-10">
              <div className="content">
                <div className="py-5 text-2xl text-[#f1f1f1] font-gothamB title">
                  <DecoderText text="Contact Me" delay={300} />
                  <div className="aurora">
                    <div className="aurora__item"></div>
                    <div className="aurora__item"></div>
                    <div className="aurora__item"></div>
                    <div className="aurora__item"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <h1 className="mb-5 font-gothamB text-4xl">
            <Slide top>Contact.</Slide>
          </h1>
          {/* <div className="pb-0.5">
            <Slide bottom>
              {" "}
              Get in touch or shoot me an email directly on{" "}
            </Slide>
          </div>{" "} */}
          <Slide bottom>
            <Linkk href="mailto:kumarsrajan02@gmail.com">
              kumarsrajan02@gmail.com
            </Linkk>
          </Slide>
          <Fade>
            <div className="w-full h-full">
              <Canvas camera={{ position: cameraPosition }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Blob />
              </Canvas>
            </div>
          </Fade>
        </div>
        <div className="w-full flex-col md:w-1/2 md:px-5 px-5 flex-wrap items-center rounded-lg flex relative">
          {/* <div className="flex flex-wrap pt-2 w-full md:w-auto flex-row">
            <Link
              href="https://github.com/srajankumar"
              className="hover:text-gray-700 ease-in transition duration-300 p-0 pt-[1rem] pr-[2rem]"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                />
              </svg>
            </Link>
            <Link
              className="hover:text-gray-700 ease-in transition duration-300 p-0 pt-[1rem] pr-[2rem]"
              href="https://www.linkedin.com/in/kumarsrajan/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </g>
              </svg>
            </Link>
            <Link
              className="hover:text-gray-700 ease-in transition duration-300 p-0 pt-[1rem] pr-[2rem]"
              href="https://www.instagram.com/withpainsimon/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <g fill="none">
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M34 6H14a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"
                  />
                  <path
                    fill="currentColor"
                    d="M35 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
                  />
                </g>
              </svg>
            </Link>
            <Link
              className="hover:text-gray-700 ease-in transition duration-300 p-0 pt-[1rem] pr-[2rem]"
              href="https://twitter.com/kumarsrajan02"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2z"
                />
              </svg>
            </Link>

            <Link
              className="hover:text-gray-700 ease-in transition duration-300 p-0 pt-[1rem] pr-[2rem]"
              href="http://discordapp.com/users/withpainsimon#7119"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0" />
                  <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833-1.667 3.5-3c.667-1.667.5-5.833-1.5-11.5c-1.457-1.015-3-1.34-4.5-1.5l-.972 1.923a11.913 11.913 0 0 0-4.053 0L9 4c-1.5.16-3.043.485-4.5 1.5c-2 5.667-2.167 9.833-1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2-2 2-3" />
                  <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                </g>
              </svg>
            </Link>
            <Link
              className="hover:text-gray-700 ease-in transition duration-300 p-0 pt-[1rem] pr-[2rem]"
              href="https://dev.to/srajankumar"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6 15h2.8l.75-.75v-4.5L8.8 9H6v6Zm1.15-1.15v-3.7H8.4v3.7H7.15Zm4.125 0v-1.3h1.3V11.4h-1.3v-1.25h2.05V9h-3.2v6l3.2-.025V13.85h-2.05Zm4.75-.75L14.95 9h-1.2l1.575 5.975h1.4L18.3 9h-1.2l-1.075 4.1ZM3 21V3h18v18H3Zm2-2h14V5H5v14Zm0 0V5v14Z"
                />
              </svg>
            </Link>
            <Link
              className="hover:text-gray-700 ease-in transition duration-300 p-0 pt-[1rem] pr-[2rem]"
              href="https://stackoverflow.com/users/21259173/srajan"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56M6.77 14.32l.37-1.76l8.79 1.85l-.37 1.76l-8.79-1.85m1.16-4.21l.76-1.61l8.14 3.78l-.76 1.62l-8.14-3.79m2.26-3.99l1.15-1.38l6.9 5.76l-1.15 1.37l-6.9-5.75m4.45-4.25L20 9.08l-1.44 1.07l-5.36-7.21l1.44-1.07M6.59 18.41v-1.8h8.98v1.8H6.59Z"
                />
              </svg>
            </Link>
          </div>{" "} */}
          <div className=" flex-wrap w-full card bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 rounded-xl p-10 flex h-fit flex-col md:mt-0 relative mx-auto">
            <div className="relative bg-transparent mb-6">
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                id="name"
                name="name"
                className="w-full rounded border-2 border-transparent bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 focus:border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out"
              />
            </div>
            <div className="relative bg-transparent mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                id="email"
                name="email"
                className="w-full border-2 border-transparent bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 focus:border-gray-500 rounded text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative bg-transparent mb-4">
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows="4"
                className="w-full p-2 border-2 border-transparent bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 focus:border-gray-500 rounded h-32 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex w-full justify-center font-gothamB items-center mt-2 p-2 rounded-lg ease-in transition duration-100 hover:bg-[#939393] bg-[#f1f1f1] text-black"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
