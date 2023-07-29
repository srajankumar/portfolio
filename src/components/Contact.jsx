"use client";
import { Vector3 } from "three";
import { Canvas } from "react-three-fiber";
import Earth from "@/components/Earth";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Linkk from "@/templates/Links";
import React, { useState } from "react";
import emailjs from "emailjs-com";
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
        className="flex justify-between w-full lg:mx-40 md:mx-14 flex-wrap"
      >
        <div className="md:w-1/2 font-gothamL px-14 md:mt-0 md:py-0 py-5 w-full flex flex-col justify-center">
          <h1 className="mb-5 font-gothamB text-4xl">
            <Slide top>Contact.</Slide>
          </h1>
          <Slide bottom>
            <Linkk
              className="tracking-wide px-1"
              href="mailto:kumarsrajan02@gmail.com"
              _blank="y"
            >
              kumarsrajan02@gmail.com
            </Linkk>
          </Slide>
          <Fade>
            <div className="w-full h-full">
              <Canvas camera={{ position: cameraPosition }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Earth />
              </Canvas>
            </div>
          </Fade>
        </div>
        <div className="w-full font-gothamM flex-col md:w-1/2 md:px-5 px-5 flex-wrap items-center rounded-lg flex relative">
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
