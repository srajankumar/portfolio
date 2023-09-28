"use client";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Linkk from "@/utils/Links";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "@/utils/Header";

const Contact = () => {
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
    <div className="h-screen lg:px-[2%] md:px-0 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between w-full md:px-20 pb-5 lg:px-28 px-7 flex-wrap"
      >
        <div className="md:w-1/2 font-gothamL sm:px-3 md:pr-14 md:pl-0 md:mt-0 md:py-0 py-5 w-full flex flex-col justify-center">
          <h1 className="mb-5 font-gothamB text-4xl">
            <Header content="Contact." />
          </h1>{" "}
          <Slide bottom>
            <div className="pb-0.5 tracking-wide">
              <span className="pr-1">
                Get in touch or shoot me an email directly on{" "}
              </span>
              <Linkk
                className="tracking-wide"
                href="mailto:kumarsrajan02@gmail.com"
                _blank="y"
              >
                kumarsrajan02@gmail.com
              </Linkk>
            </div>
          </Slide>
          <Fade>
            <div className="w-full">
              <div className="flex flex-wrap w-full md:w-auto py-1 flex-row">
                <div className=" p-0 pt-[1rem] pr-[2rem]">
                  <Fade bottom delay={0}>
                    <Link
                      href="https://github.com/srajankumar"
                      className="hover:text-gray-400 ease-in transition duration-100"
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
                  </Fade>
                </div>
                <div className="p-0 pt-[1rem] pr-[2rem]">
                  <Fade bottom delay={200}>
                    <Link
                      className="hover:text-gray-400 ease-in transition duration-100"
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
                  </Fade>
                </div>
                <div className=" p-0 pt-[1rem] pr-[2rem]">
                  <Fade bottom delay={400}>
                    <Link
                      className="hover:text-gray-400 ease-in transition duration-100"
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
                  </Fade>
                </div>
                <div className=" p-0 pt-[1rem] pr-[2rem]">
                  <Fade bottom delay={600}>
                    <Link
                      className="hover:text-gray-400 ease-in transition duration-100"
                      href="https://twitter.com/kumarsrajan02"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        className="px-0.5"
                      >
                        <path
                          fill="currentColor"
                          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                        />
                      </svg>
                    </Link>
                  </Fade>
                </div>
                <div className=" p-0 pt-[1rem] pr-[2rem]">
                  <Fade bottom delay={800}>
                    <Link
                      className="hover:text-gray-400 ease-in transition duration-100"
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
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="w-full font-gothamM flex-col md:w-1/2 mt-5 md:mt-0 sm:mt-5 flex-wrap items-center rounded-lg md:px-0 flex relative">
          <div className=" flex-wrap w-full card bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 rounded-xl px-9 md:px-10 py-10 md:p-10 flex h-fit flex-col md:mt-0 relative md:mx-auto">
            <div className="relative bg-transparent mb-6">
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                id="name"
                name="name"
                className="w-full rounded border-2 border-transparent bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 focus:border-gray-500 text-base outline-none text-gray-50 py-1 px-3 leading-8 duration-200 ease-in-out"
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
                className="w-full border-2 border-transparent bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 focus:border-gray-500 rounded text-base outline-none text-gray-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative bg-transparent mb-4">
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows="4"
                className="w-full p-2 border-2 border-transparent bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 focus:border-gray-500 rounded h-32 text-base outline-none text-gray-50 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
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
