import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";

const slider1 = [
  {
    src: "seven.jpg",
  },
  {
    src: "one.jpeg",
  },
  {
    src: "four.jpg",
  },
  {
    src: "three.jpg",
  },
];

const slider2 = [
  {
    src: "fourteen.jpg",
  },

  {
    src: "eight.jpeg",
  },
  {
    src: "five.jpg",
  },
  {
    src: "twelve.jpeg",
  },
];

const slider3 = [
  {
    src: "two.jpg",
  },

  {
    src: "thirteen.jpg",
  },
  {
    src: "six.jpg",
  },
  {
    src: "nine.jpeg",
  },
];

const slider4 = [
  {
    src: "ten.jpeg",
  },

  {
    src: "eleven.jpg",
  },
  {
    src: "fifteen.jpeg",
  },
  {
    src: "sixteen.jpg",
  },
];

const slider5 = [
  {
    src: "seventeen.jpeg",
  },

  {
    src: "eighteen.jpg",
  },
  {
    src: "nineteen.jpg",
  },
  {
    src: "twenty.jpg",
  },
];

const slider6 = [
  {
    src: "twenty_one.jpeg",
  },

  {
    src: "twenty_four.jpg",
  },
  {
    src: "twenty_three.jpg",
  },
  { src: "twenty_two.jpeg" },
];

function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <div>
        <motion.div
          style={{ x: x1 }}
          className={`md:w-[120vw] md:left-[-10vw] sm:left-[-15vw] left-[-25vw] w-[50rem] ${styles.slider}`}
        >
          {slider1.map((art, index) => {
            return (
              <div
                key={index}
                className={`h-[30vh] w-[50vw] md:w-[25%] md:h-[50vh] lg:h-[70vh] ${styles.art}`}
              >
                <div className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"reoarts"}
                    className="rounded-2xl"
                    src={`/assets/arts/${art.src}`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        style={{ x: x2 }}
        className={`md:w-[120vw] md:left-[-10vw] left-[-10vw] sm:left-[10vw] w-[55rem] ${styles.slider}`}
      >
        {slider2.map((art, index) => {
          return (
            <div
              key={index}
              className={`h-[30vh] w-[50vw] md:w-[25%] md:h-[50vh] lg:h-[70vh] ${styles.art}`}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"reoarts"}
                  className="rounded-2xl"
                  src={`/assets/arts/${art.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <div>
        <motion.div
          style={{ x: x1 }}
          className={`md:w-[120vw] md:left-[-10vw] sm:left-[-15vw] left-[-25vw] w-[50rem] ${styles.slider}`}
        >
          {slider3.map((art, index) => {
            return (
              <div
                key={index}
                className={`h-[30vh] w-[50vw] md:w-[25%] md:h-[50vh] lg:h-[70vh] ${styles.art}`}
              >
                <div className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"reoarts"}
                    className="rounded-2xl"
                    src={`/assets/arts/${art.src}`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        style={{ x: x2 }}
        className={`md:w-[120vw] md:left-[-10vw] left-[-10vw] sm:left-[10vw] w-[55rem] ${styles.slider}`}
      >
        {slider4.map((art, index) => {
          return (
            <div
              key={index}
              className={`h-[30vh] w-[50vw] md:w-[25%] md:h-[50vh] lg:h-[70vh] ${styles.art}`}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"reoarts"}
                  className="rounded-2xl"
                  src={`/assets/arts/${art.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <div>
        <motion.div
          style={{ x: x1 }}
          className={`md:w-[120vw] md:left-[-10vw] sm:left-[-15vw] left-[-25vw] w-[50rem] ${styles.slider}`}
        >
          {slider5.map((art, index) => {
            return (
              <div
                key={index}
                className={`h-[30vh] w-[50vw] md:w-[25%] md:h-[50vh] lg:h-[70vh] ${styles.art}`}
              >
                <div className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"reoarts"}
                    className="rounded-2xl"
                    src={`/assets/arts/${art.src}`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        style={{ x: x2 }}
        className={`md:w-[120vw] md:left-[-10vw] left-[-10vw] sm:left-[10vw] w-[55rem] ${styles.slider}`}
      >
        {slider6.map((art, index) => {
          return (
            <div
              key={index}
              className={`h-[30vh] w-[50vw] md:w-[25%] md:h-[50vh] lg:h-[70vh] ${styles.art}`}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"reoarts"}
                  className="rounded-2xl"
                  src={`/assets/arts/${art.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}

export default Index;
