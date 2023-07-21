import "./arts.css";
import Image from "next/image";
import Footer from "@/components/Footer";

const Arts = () => {
  return (
    <div>
      <div className="py-20 content">
        <h1 className="title">
          Reo Arts
          <div className="aurora">
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
          </div>
        </h1>
        {/* <p>{"A small collection of my works :)"}</p> */}
      </div>
      <div className="bg-gradient-to-b pb-4 from-black to-[#f1f1f1] grid grid-cols-2 md:grid-cols-4 gap-4 lg:px-5 px-4">
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/eight.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/six.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/twenty_three.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/fourteen.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/twelve.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/two.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/thirteen.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/one.jpeg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/eleven.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/seven.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/five.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/arts/six.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Arts;
