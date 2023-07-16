"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const TextRunner = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["CSE Student @SCEM", "Frontend Developer"],
    loop: true,
    delaySpeed: 3000,
    deleteSpeed: 50,
  });
  return (
    <div>
      <span>{text}</span>
      <Cursor cursorStyle="." cursorBlinking={true} />
    </div>
  );
};

export default TextRunner;
