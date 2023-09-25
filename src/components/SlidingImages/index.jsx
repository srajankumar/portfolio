import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "../assets/arts/seven.jpg",
  },
  {
    color: "#d6d7dc",
    src: "../assets/arts/one.jpeg",
  },
  {
    color: "#e3e3e3",
    src: "../assets/arts/four.jpg",
  },
  {
    color: "#21242b",
    src: "../assets/arts/three.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "../assets/arts/fourteen.jpg",
  },

  {
    color: "#d7d4cf",
    src: "../assets/arts/eight.jpeg",
  },
  {
    color: "#e5e0e1",

    src: "../assets/arts/thirteen.jpg",
  },
  {
    color: "#e1dad6",
    src: "../assets/arts/twelve.jpeg",
  },
];

export default function index() {
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
          {slider1.map((project, index) => {
            return (
              <div
                key={index}
                className={`h-[50vh] w-[50vw] md:w-[25%] md:h-[50vh] lg:h-[70vh] ${styles.project}`}
                style={{ backgroundColor: project.color }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"image"}
                    src={`/images/${project.src}`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        style={{ x: x2 }}
        className={`md:w-[120vw] md:left-[-10vw] left-[-10vw] sm:left-[10vw] w-[50rem] ${styles.slider}`}
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={`h-[50vh] w-[50vw] md:w-[25%] md:h-[50vh] lg:h-[70vh] ${styles.project}`}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
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
