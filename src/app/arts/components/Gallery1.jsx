import Image from "next/image";

const Gallery1 = () => {
  return (
    <div className="pb-4 grid grid-cols-2 md:grid-cols-4 gap-4 lg:px-5 px-4">
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
  );
};

export default Gallery1;
