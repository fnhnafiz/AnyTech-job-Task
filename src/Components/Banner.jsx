const Banner = () => {
  return (
    <div className="relative shape min-h-screen bg-gradient-to-br from-[#00D0FF] via-[#0066FF] to-[#0262E6] flex flex-col lg:flex-row items-center pt-20">
      <img
        className="absolute -top-3 right-0 z-10 w-full"
        src="../public/backgrounds/icon.svg"
        alt=""
      />

      <div className="max-w-2xl z-10 flex justify-center items-center">
        <div className="space-y-8 pl-12">
          <h1 className="text-7xl font-bold text-white">
            Embrace the future of finance
          </h1>
          <p className="text-lg font-semibold text-white">
            Reimagine financial services with AnyTech’s open platform,
            distributed <br />
            banking solution that powers transformation
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-orange-600">
            Reach Out to Us ›
          </button>
        </div>
      </div>
      <div className="flex-1 lg:absolute lg:top-0 lg:right-0 -z-10">
        <img
          className="hidden lg:block picture-shape h-full w-full object-cover "
          src="../../public/backgrounds/banner.jpg"
          alt=""
        />
      </div>
      <img
        className="mobile-shape block lg:hidden h-full w-full object-cover "
        src="../../public/backgrounds/banner.jpg"
        alt=""
      />
    </div>
  );
};

export default Banner;
