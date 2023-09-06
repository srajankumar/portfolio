import { DecoderText } from "@/utils/DecoderText";
import TextRunner from "@/utils/TextRunner";
const Intro = () => {
  return (
    <div className="flex sm:pb-32 pb-40 justify-center flex-col w-full h-screen">
      <div className="lg:px-72 md:px-32 sm:px-20 px-10">
        <div className="tracking-wide text-gray-400 text-2xl font-gothamB ">
          <DecoderText text="SRAJAN KUMAR" delay={300} />
        </div>
        <div className="absolute font-gothamB py-3 text-5xl">
          <TextRunner />
        </div>
      </div>
    </div>
  );
};

export default Intro;
