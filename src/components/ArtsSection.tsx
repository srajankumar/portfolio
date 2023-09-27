import SlidingImages from "@/utils/SlidingImages";
import Linkk from "@/utils/Links";

const ArtsSection = () => {
  return (
    <div className="overflow-hidden md:pt-24">
      <SlidingImages />
      <div className="flex font-gothamM tracking-wide lg:mx-40 mx-14 w-full">
        <Linkk href="arts" _blank="n">
          Reo Arts
        </Linkk>
      </div>
    </div>
  );
};

export default ArtsSection;
