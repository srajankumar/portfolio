"use client";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Link from "@/components/Links";
import { DecoderText } from "@/components/DecoderText";
import Carousel from "nuka-carousel";
import "@/styles/contact.css";
const About = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="md:px-20 lg:px-40 px-5 flex justify-center md:flex-row flex-col items-center">
        <div className="min-h-96 w-full flex flex-col">
          {/* <div className="bg-[#d1f2f9] bg-opacity-5 md:mx-5 md:mt-5 md:px-10 px-7 text-justify py-10 text-lg rounded-3xl"> */}
          <div className=" px-7 text-justify py-10 text-lg rounded-3xl">
            <h1 className="mb-5 font-gothamB text-4xl">
              <Slide top>About.</Slide>
            </h1>
            <Slide bottom>
              <p className="font-gothamL text-base">
                Hey, I&apos;m Srajan Kumar, a curious Frontend developer, aiming
                to be a cool full-stack developer and also explore other tech
                stacks. I also love to do drawings, listen to music, read manga,
                manhwa and ocassionally watch anime in my free time.
              </p>
            </Slide>
            <Slide bottom>
              <div className="font-gothamL text-base pt-5">
                I am a second year Computer Science student from Sahyadri
                College of Engineering and Management, Mangaluru, India. I am
                also Web Lead of{" "}
                <Link
                  className="text-green-500 font-gothamB"
                  href="https://www.sosc.org.in/"
                >
                  Sahyadri Open-Source Community
                </Link>
                , Technical Committee Secretary of{" "}
                <Link
                  className="text-blue-400 font-gothamB"
                  href="https://www.linkedin.com/company/iei-cse-sahyadri-student-chapter/"
                >
                  Institution of Engineers &#x28;India&#x29; Student Chapter
                </Link>
              </div>
            </Slide>
            <Slide bottom>
              <Link href="" className="mt-3 font-gothamB">
                resume
              </Link>
            </Slide>
          </div>

          {/* <div className="content">
            <div className="tracking-widest gothamB title">
              <DecoderText text="About" delay={300} />
              <div className="aurora md:invisible">
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="md:px-20 py-5 lg:px-48 px-5 w-full">
        <Fade>
          <Carousel
            autoplay="true"
            autoplayInterval={1500}
            cellAlign="center"
            dragging="true"
            pauseOnHover="true"
            wrapAround={true}
            slidesToShow={5}
            disableEdgeSwiping={true}
            speed={1500}
            withoutControls={true}
          >
            <div className="  text-orange-600 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718l10.059.003l.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426l-2.91.804l-2.955-.81l-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443l.744-8.157H8.531z"
                />
              </svg>
            </div>
            <div className="  text-blue-600 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622l10.125.002l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523l-2.91.804l-2.956-.81l-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                />
              </svg>
            </div>
            <div className="  text-yellow-300 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873c-.736-.345-1.554-.585-1.797-1.14c-.091-.33-.105-.51-.046-.705c.15-.646.915-.84 1.515-.66c.39.12.75.42.976.9c1.034-.676 1.034-.676 1.755-1.125c-.27-.42-.404-.601-.586-.78c-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005c-1.14 1.291-.811 3.541.569 4.471c1.365 1.02 3.361 1.244 3.616 2.205c.24 1.17-.87 1.545-1.966 1.41c-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109c1.74 1.756 6.09 1.666 6.871-1.004c.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805c0 1.232.063 2.363-.138 2.711c-.33.689-1.18.601-1.566.48c-.396-.196-.597-.466-.83-.855c-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517c.855.51 2.004.675 3.207.405c.783-.226 1.458-.691 1.811-1.411c.51-.93.402-2.07.397-3.346c.012-2.054 0-4.109 0-6.179l.004-.056z"
                />
              </svg>
            </div>
            <div className="text-blue-700 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg viewBox="0 0 128 128" width="40" height="40">
                <path
                  fill="currentColor"
                  d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"
                ></path>
              </svg>
            </div>
            <div className="text-pink-900 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg width="40" height="40" viewBox="0 0 128 128">
                <path
                  fill="currentColor"
                  d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM82 66v-4h5v-5h5v5h5v4h-5v5h-5v-5h-5zm3.3-14C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5zM115 66h-5v5h-4v-5h-6v-4h6v-5h4v5h5v4z"
                ></path>
              </svg>
            </div>
            <div className="ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 256 346"
              >
                <path
                  fill="#5382A1"
                  d="M82.554 267.473s-13.198 7.675 9.393 10.272c27.369 3.122 41.356 2.675 71.517-3.034c0 0 7.93 4.972 19.003 9.279c-67.611 28.977-153.019-1.679-99.913-16.517m-8.262-37.814s-14.803 10.958 7.805 13.296c29.236 3.016 52.324 3.263 92.276-4.43c0 0 5.526 5.602 14.215 8.666c-81.747 23.904-172.798 1.885-114.296-17.532"
                />
                <path
                  fill="#E76F00"
                  d="M143.942 165.515c16.66 19.18-4.377 36.44-4.377 36.44s42.301-21.837 22.874-49.183c-18.144-25.5-32.059-38.172 43.268-81.858c0 0-118.238 29.53-61.765 94.6"
                />
                <path
                  fill="#5382A1"
                  d="M233.364 295.442s9.767 8.047-10.757 14.273c-39.026 11.823-162.432 15.393-196.714.471c-12.323-5.36 10.787-12.8 18.056-14.362c7.581-1.644 11.914-1.337 11.914-1.337c-13.705-9.655-88.583 18.957-38.034 27.15c137.853 22.356 251.292-10.066 215.535-26.195M88.9 190.48s-62.771 14.91-22.228 20.323c17.118 2.292 51.243 1.774 83.03-.89c25.978-2.19 52.063-6.85 52.063-6.85s-9.16 3.923-15.787 8.448c-63.744 16.765-186.886 8.966-151.435-8.183c29.981-14.492 54.358-12.848 54.358-12.848m112.605 62.942c64.8-33.672 34.839-66.03 13.927-61.67c-5.126 1.066-7.411 1.99-7.411 1.99s1.903-2.98 5.537-4.27c41.37-14.545 73.187 42.897-13.355 65.647c0 .001 1.003-.895 1.302-1.697"
                />
                <path
                  fill="#E76F00"
                  d="M162.439.371s35.887 35.9-34.037 91.101c-56.071 44.282-12.786 69.53-.023 98.377c-32.73-29.53-56.75-55.526-40.635-79.72C111.395 74.612 176.918 57.393 162.439.37"
                />
                <path
                  fill="#5382A1"
                  d="M95.268 344.665c62.199 3.982 157.712-2.209 159.974-31.64c0 0-4.348 11.158-51.404 20.018c-53.088 9.99-118.564 8.824-157.399 2.421c.001 0 7.95 6.58 48.83 9.201"
                />
              </svg>
            </div>
            <div className="ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 256 255"
              >
                <defs>
                  <linearGradient
                    id="logosPython0"
                    x1="12.959%"
                    x2="79.639%"
                    y1="12.039%"
                    y2="78.201%"
                  >
                    <stop offset="0%" stop-color="#387EB8" />
                    <stop offset="100%" stop-color="#366994" />
                  </linearGradient>
                  <linearGradient
                    id="logosPython1"
                    x1="19.128%"
                    x2="90.742%"
                    y1="20.579%"
                    y2="88.429%"
                  >
                    <stop offset="0%" stop-color="#FFE052" />
                    <stop offset="100%" stop-color="#FFC331" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosPython0)"
                  d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072ZM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13Z"
                />
                <path
                  fill="url(#logosPython1)"
                  d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897Zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13Z"
                />
              </svg>
            </div>
            <div className="text-blue-300 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538a15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564c-.44-.02-.89-.034-1.345-.034c-.46 0-.915.01-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093c.406.582.802 1.203 1.183 1.86c.372.64.71 1.29 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005a26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16c-.225.39-.435.782-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387c-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474c0-.768 1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175c.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034c.46 0 .915-.01 1.36-.034c-.44.572-.895 1.095-1.345 1.565c-.455-.47-.91-.993-1.36-1.565z"
                />
              </svg>
            </div>
            <div className="ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M23.749 30.005c-.119.063-.109.083.005.025a.31.31 0 0 0 .095-.061c0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016a.249.249 0 0 0 .068-.047c0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016a.246.246 0 0 0 .068-.048c0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015c.037-.02.068-.041.068-.047c0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068c.067-.041.181-.131.161-.131c-.043.016-.079.043-.115.063zM14.953.011c-.073.005-.292.025-.484.041c-4.548.412-8.803 2.86-11.5 6.631a15.828 15.828 0 0 0-2.824 6.989c-.129.88-.145 1.14-.145 2.333c0 1.192.016 1.448.145 2.328c.871 6.011 5.147 11.057 10.943 12.927c1.043.333 2.136.563 3.381.704c.484.052 2.577.052 3.061 0c2.152-.24 3.969-.771 5.767-1.688c.276-.14.328-.177.291-.208a340.89 340.89 0 0 1-2.609-3.495l-2.557-3.453l-3.203-4.745a416.396 416.396 0 0 0-3.229-4.744c-.011 0-.025 2.109-.031 4.681c-.011 4.505-.011 4.688-.068 4.792a.572.572 0 0 1-.276.287c-.099.047-.188.057-.661.057h-.541l-.141-.088a.595.595 0 0 1-.208-.229l-.068-.141l.005-6.271l.011-6.271l.099-.125a.753.753 0 0 1 .229-.187c.131-.063.183-.073.724-.073c.635 0 .74.025.907.208a602.855 602.855 0 0 1 3.859 5.812c2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839l.125-.083a16.346 16.346 0 0 0 3.285-2.885a15.935 15.935 0 0 0 3.767-8.177c.129-.88.145-1.141.145-2.333c0-1.193-.016-1.448-.145-2.328C30.985 7.668 26.709 2.622 20.913.751a16.983 16.983 0 0 0-3.328-.697c-.303-.031-2.371-.068-2.631-.041zM21.5 9.688a.623.623 0 0 1 .317.364c.027.084.032 1.823.027 5.74l-.011 5.624l-.989-1.52l-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204a.67.67 0 0 1 .313-.395c.124-.063.172-.068.667-.068c.463 0 .541.005.645.063z"
                />
              </svg>
            </div>
            <div className="text-purple-500 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5.423 3.038c-1.284 0-2.233 1.124-2.19 2.342c.04 1.171-.013 2.687-.395 3.924c-.383 1.24-1.03 2.026-2.088 2.127v1.138c1.058.101 1.705.887 2.088 2.127c.382 1.236.435 2.753.394 3.923c-.042 1.219.907 2.343 2.192 2.343h13.154c1.284 0 2.234-1.124 2.192-2.343c-.041-1.17.012-2.687.393-3.923c.384-1.24 1.03-2.026 2.087-2.127v-1.138c-1.058-.101-1.703-.887-2.087-2.127c-.381-1.236-.434-2.753-.393-3.924c.042-1.218-.908-2.342-2.192-2.342H5.423Zm10.581 11.033c0 1.678-1.251 2.696-3.328 2.696H9.14a.381.381 0 0 1-.382-.381V7.614a.381.381 0 0 1 .382-.381h3.515c1.732 0 2.869.938 2.869 2.379c0 1.01-.765 1.916-1.739 2.074v.053c1.326.145 2.22 1.064 2.22 2.332Zm-3.714-5.63h-2.016v2.848h1.698c1.313 0 2.036-.528 2.036-1.473c0-.885-.622-1.374-1.718-1.374Zm-2.016 3.978v3.139h2.09c1.367 0 2.09-.549 2.09-1.58c0-1.03-.743-1.559-2.178-1.559h-2.002Z"
                />
              </svg>
            </div>
            <div className="text-blue-400 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M128 204.667C145.062 136.227 187.738 102 256 102c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C494.938 221.773 452.262 256 384 256c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5zm-128 154C17.062 290.227 59.738 256 128 256c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C366.938 375.773 324.262 410 256 410c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5z"
                />
              </svg>
            </div>
            <div className="text-blue-500 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <g fill="currentColor" clip-path="url(#akarIconsVscodeFill0)">
                    <path d="M.228 8.37s-.584-.427.117-.995L1.98 5.897s.467-.497.962-.064l15.081 11.542v5.534s-.007.87-1.11.774L.227 8.369Z" />
                    <path d="M4.116 11.937L.228 15.509s-.4.3 0 .837l1.805 1.66s.429.465 1.062-.065l4.121-3.158l-3.1-2.846Zm6.824.029l7.13-5.502l-.047-5.505s-.305-1.202-1.32-.576L7.216 9.11l3.724 2.856Z" />
                    <path d="M16.912 23.69c.414.428.916.288.916.288l5.556-2.767c.711-.49.611-1.098.611-1.098V3.588c0-.726-.735-.977-.735-.977L18.444.264c-1.052-.657-1.741.119-1.741.119s.886-.645 1.32.576v21.85c0 .15-.032.297-.095.43c-.127.259-.402.5-1.062.4l.046.051Z" />
                  </g>
                  <defs>
                    <clipPath id="akarIconsVscodeFill0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </div>
            <div className="text-orange-700 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M15.698 7.287L8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45l1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025a1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"
                />
              </svg>
            </div>
            <div className="ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"
                />
              </svg>
            </div>
            <div className="ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="m12 1l12 21H0L12 1Z" />
              </svg>
            </div>
            <div className="ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 32 32"
              >
                <g fill="none">
                  <path
                    fill="url(#vscodeIconsFileTypeVite0)"
                    d="m29.884 6.146l-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.714.714 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z"
                  />
                  <path
                    fill="url(#vscodeIconsFileTypeVite1)"
                    d="M22.264 2.007L12.54 3.912a.357.357 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222l7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45z"
                  />
                  <defs>
                    <linearGradient
                      id="vscodeIconsFileTypeVite0"
                      x1="6"
                      x2="235"
                      y1="33"
                      y2="344"
                      gradientTransform="translate(1.34 1.894) scale(.07142)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#41D1FF" />
                      <stop offset="1" stop-color="#BD34FE" />
                    </linearGradient>
                    <linearGradient
                      id="vscodeIconsFileTypeVite1"
                      x1="194.651"
                      x2="236.076"
                      y1="8.818"
                      y2="292.989"
                      gradientTransform="translate(1.34 1.894) scale(.07142)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFEA83" />
                      <stop offset=".083" stop-color="#FFDD35" />
                      <stop offset="1" stop-color="#FFA800" />
                    </linearGradient>
                  </defs>
                </g>
              </svg>
            </div>
            <div className="ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 32 32"
              >
                <defs>
                  <linearGradient
                    id="vscodeIconsFileTypeMongo0"
                    x1="-645.732"
                    x2="-654.59"
                    y1="839.188"
                    y2="839.25"
                    gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".231" stop-color="#999875" />
                    <stop offset=".563" stop-color="#9b9977" />
                    <stop offset=".683" stop-color="#a09f7e" />
                    <stop offset=".768" stop-color="#a9a889" />
                    <stop offset=".837" stop-color="#b7b69a" />
                    <stop offset=".896" stop-color="#c9c7b0" />
                    <stop offset=".948" stop-color="#deddcb" />
                    <stop offset=".994" stop-color="#f8f6eb" />
                    <stop offset="1" stop-color="#fbf9ef" />
                  </linearGradient>
                  <linearGradient
                    id="vscodeIconsFileTypeMongo1"
                    x1="-644.287"
                    x2="-657.028"
                    y1="823.405"
                    y2="845.476"
                    gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#48a547" />
                    <stop offset="1" stop-color="#3f9143" />
                  </linearGradient>
                  <linearGradient
                    id="vscodeIconsFileTypeMongo2"
                    x1="-643.386"
                    x2="-652.418"
                    y1="839.485"
                    y2="833.417"
                    gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#41a247" />
                    <stop offset=".352" stop-color="#4ba74b" />
                    <stop offset=".956" stop-color="#67b554" />
                    <stop offset="1" stop-color="#69b655" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#vscodeIconsFileTypeMongo0)"
                  d="m16.62 30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741 3.423-.149a2.712 2.712 0 0 0-1.333 1.523A14.1 14.1 0 0 0 16.62 30Z"
                />
                <path
                  fill="url(#vscodeIconsFileTypeMongo1)"
                  d="M17.026 26.329a13.223 13.223 0 0 0 5-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a9.792 9.792 0 0 1-.825-1.6l.277 18.069s-.574 5.522.874 6.187Z"
                />
                <path
                  fill="url(#vscodeIconsFileTypeMongo2)"
                  d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 0 1 5.519-11.648A1.725 1.725 0 0 0 15.846 2c.381.82.319 12.243.359 13.579c.155 5.197-.289 10.009-.718 10.99Z"
                />
              </svg>
            </div>
            <div className="text-white ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957a6.272 6.272 0 0 1-7.306-.933a6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z"
                />
              </svg>
            </div>
            <div className="text-green-600 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 23.956c-.342 0-.66-.089-.957-.243l-3.029-1.738c-.455-.242-.227-.33-.09-.374c.614-.198.728-.242 1.366-.595c.068-.044.16-.022.228.022l2.323 1.343c.09.044.205.044.273 0l9.087-5.084c.09-.044.136-.132.136-.242V6.899c0-.11-.045-.198-.136-.242l-9.087-5.061c-.091-.044-.205-.044-.273 0L2.754 6.657c-.091.044-.137.154-.137.242v10.146c0 .088.046.198.137.242l2.482 1.387c1.344.66 2.186-.11 2.186-.88V7.78c0-.132.114-.264.274-.264h1.161c.137 0 .273.11.273.264v10.013c0 1.739-.979 2.751-2.687 2.751c-.524 0-.934 0-2.095-.55l-2.391-1.32A1.847 1.847 0 0 1 1 17.067V6.921c0-.66.364-1.276.957-1.606L11.044.23a2.095 2.095 0 0 1 1.912 0l9.088 5.084c.592.33.956.946.956 1.606v10.146c0 .66-.364 1.276-.956 1.607l-9.088 5.083a2.4 2.4 0 0 1-.956.198Zm2.801-6.977c-3.985 0-4.805-1.76-4.805-3.257c0-.132.114-.264.273-.264h1.184c.137 0 .25.088.25.22c.183 1.166.707 1.738 3.121 1.738c1.913 0 2.733-.418 2.733-1.408c0-.572-.228-.99-3.211-1.276c-2.483-.243-4.031-.77-4.031-2.685c0-1.783 1.548-2.84 4.145-2.84c2.915 0 4.35.969 4.532 3.082a.347.347 0 0 1-.069.198c-.045.044-.113.088-.182.088h-1.184a.265.265 0 0 1-.25-.198c-.274-1.21-.98-1.607-2.847-1.607c-2.096 0-2.346.704-2.346 1.232c0 .639.296.837 3.12 1.189c2.801.352 4.122.858 4.122 2.75c-.023 1.938-1.662 3.038-4.555 3.038Z"
                />
              </svg>
            </div>
            <div className="text-pink-500 ease-in transition duration-300 p-0 pt-5 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1c-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2s-1.4-6.6-14.3-6.7s-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3c-4.4-8.5-8.1-16-8.9-22c-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2s-1.4-6.6-14.29-6.7s-24 2.5-25.3 5.9s-2.7 11.4-5.3 19.1s-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6c-.4.8-.7 1.3-.9 1.7c.3-.5.5-1 .5-.8c-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1c-.6 0-1.9-8.4.3-19.9c4.7-24.2 15.8-61.8 15.7-63.1c-.1-.7 2.1-7.2-7.3-10.7c-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2s10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5c-7.9 4.3-25 13.6-43 23.5c-6.9 3.8-14 7.7-20.7 11.4c-.5-.5-.9-1-1.4-1.5c-35.79-38.2-101.87-65.2-99.07-116.5c1-18.7 7.5-67.8 127.07-127.4c98-48.8 176.35-35.4 189.84-5.6c19.4 42.5-41.89 121.6-143.66 133c-38.79 4.3-59.18-10.7-64.28-16.3c-5.3-5.9-6.1-6.2-8.1-5.1c-3.3 1.8-1.2 7 0 10.1c3 7.9 15.5 21.9 36.79 28.9c18.7 6.1 64.18 9.5 119.17-11.8c61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4c-48.69 45.6-56.48 85.3-53.28 101.9c11.39 58.9 92.57 97.3 125.06 125.7c-1.6.9-3.1 1.7-4.5 2.5c-16.29 8.1-78.18 40.5-93.67 74.7c-17.5 38.8 2.9 66.6 16.29 70.4c41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8c4.2-2.5 8.5-5 12.8-7.5c8.29-4.9 16.39-9.4 23.49-13.3c-4 10.8-6.9 23.8-8.4 42.6c-1.8 22 7.3 50.5 19.1 61.7c5.2 4.9 11.49 5 15.39 5c13.8 0 20-11.4 26.89-25c8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46c16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30c-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5c-12.79 15.2-28 32.6-30 37.6c-2.4 5.9-1.8 10.3 2.8 13.7c3.4 2.6 9.4 3 15.69 2.5c11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8c-.4-9.6-3.5-19.2-7.3-28.2c1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7c-18.59 15.1-30.09 32.6-34.09 44.1c-7.4 21.3-1.6 30.9 9.3 33.1c4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6c-.3-7.9-2.5-15.8-5.4-23.4c15.7-6.6 36.09-10.2 62.09-7.2c55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25s-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9c4.6-.8 29.19-11.8 30.29-38.7c1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4c2.7-1.6 6.6-4 11.4-6.9c.8-.5 1.2-.7 1.2-.7c.9-.6 1.9-1.1 2.9-1.7c8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6c-7-1.8-11.3-32.3-1.4-62.3c5-15.1 15.6-33.1 21.9-40.1c10.09-11.3 21.19-14.9 23.79-10.4c3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6c-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9c0 .5.1 1 .1 1.6c-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7c2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"
                />
              </svg>
            </div>
          </Carousel>
        </Fade>
      </div>
    </div>
  );
};

export default About;
