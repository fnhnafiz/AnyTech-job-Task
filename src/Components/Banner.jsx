import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }, []);
  return (
    <div className="relative mobile-shape-bg md:shape min-h-screen bg-gradient-to-br from-[#00D0FF] via-[#0066FF] to-[#0262E6] flex flex-col lg:flex-row  pt-20 overflow-hidden">
      <img
        className={`absolute -top-3 right-0 z-10 w-full ${
          animate ? "animate-bounce" : ""
        }`}
        src="/backgrounds/icon.svg"
        alt=""
      />

      <div className="max-w-2xl z-10 flex justify-center items-center">
        <div className="space-y-8 pl-6 md:pl-12 flex flex-col md:block px-8">
          <Fade direction="left">
            <h1 className="text-7xl font-bold text-white">
              Embrace the future of finance
            </h1>
          </Fade>
          <Fade delay={1e3} cascade damping={1e-1}>
            <p className="text-lg font-semibold text-white">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </p>
          </Fade>
          <Fade direction="left">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-orange-600">
              Reach Out to Us ›
            </button>
          </Fade>
        </div>
      </div>
      <div className="flex-1 lg:absolute lg:top-0 lg:right-0 -z-10 ">
        <Fade direction="right">
          <img
            className="hidden lg:block picture-shape h-[800px] w-full object-cover "
            src="/backgrounds/banner.jpg"
            alt=""
          />
        </Fade>
      </div>
      <Fade direction="right">
        <img
          className="mobile-shape hidden md:block lg:hidden w-full object-cover "
          src="/backgrounds/banner.jpg"
          alt=""
        />
      </Fade>
      <Fade direction="right">
        <img
          className="mobile-shape-small  md:hidden  h-[400px] w-full object-cover "
          src="/backgrounds/banner.jpg"
          alt=""
        />
      </Fade>
    </div>
  );
};

export default Banner;
