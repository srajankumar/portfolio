"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const TextRunner = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hello World!", "Hello World!", "Hello World!"],
    loop: true,
    delaySpeed: 3000,
    deleteSpeed: 50,
  });
  return (
    <div>
      <span>{text}</span>
      <Cursor cursorStyle=";" cursorColor="#80ed9d" cursorBlinking={true} />
    </div>
  );
};

export default TextRunner;
