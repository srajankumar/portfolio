const Blob = () => {
  return (
    <main id="main" className="relative mx-auto max-w-4xl px-8">
      <div className="fixed flex w-screen justify-center items-center">
        <div className="absolute top-0 left-0 right-0">
          <div className="absolute left-8 top-16 -z-10 overflow-visible opacity-20">
            <div className="circle-1 -z-10 h-[400px] w-[700px] rounded-full bg-red-700 mix-blend-multiply blur-[128px]" />
          </div>
          <div className="absolute left-10 top-32 -z-10 overflow-visible opacity-20">
            <div className="circle-2 -z-10 h-[400px] w-[700px] rounded-full bg-green-700 mix-blend-multiply blur-[128px]" />
          </div>
          <div className="absolute left-12 top-48 -z-10 overflow-visible opacity-20">
            <div className="circle-3 -z-10 h-[600px] w-[500px] rounded-full bg-blue-700 mix-blend-multiply blur-[128px]" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blob;
