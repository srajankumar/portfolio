import SlidingImages from "@/components/SlidingImages";
import Header from "@/utils/Header";
import Linkk from "@/utils/Links";

const ArtsSection = () => {
  return (
    <div className="overflow-hidden">
      {/* <div className="flex font-gothamB pb-10 text-3xl tracking-wide lg:mx-40 mx-14 w-full">
        <Header content="Reo Arts." />
      </div> */}
      <SlidingImages />
      {/* <div className="flex font-gothamL pb-32 md:pb-20 tracking-wide lg:mx-40 mx-14 w-full">
        <Linkk href="arts" _blank="n">
          more pencil stuff
        </Linkk>
      </div> */}
    </div>
  );
};

export default ArtsSection;
