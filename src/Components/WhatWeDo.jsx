import bannerSVG1 from "../../public/frames/story/3.svg";
import customer from "../../public/icons/ServiceSection/serviceSectionImg.png";
import icon1 from "../../public/icons/ServiceSection/ServiceSectionSVG.svg";
import icon2 from "../../public/icons/ServiceSection/ServiceSectionSVG2.svg";

const WhatWeDo = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row sm:items-start  justify-between gap-20 md:gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-[#388EF2] font-semibold tracking-wide uppercase text-center sm:text-left md:pl-16 lg:pl-0">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B305B] leading-tight pl-16 md:p-0 md:text-left">
            The power of data
          </h2>
          <div className="mt-6 hidden md:block space-y-4">
            <p className="text-gray-700 leading-relaxed  font-bold">
              In today's rapidly evolving financial landscape, banks and
              financial institutions face unprecedented challenges. At AnyTech,
              we understand the critical need for continuous innovation and
              strategic decision-making in order to thrive.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With our global perspective and cutting-edge solutions, we are
              here to help you create unparalleled customer experiences that
              will set you apart from the competition. Embark on a journey of
              transformation with AnyTech—one that will redefine what’s possible
              for your institution.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-square">
            {/* Background Shapes Layer */}
            <div className="absolute inset-0 w-full h-full">
              {/* Top right shape */}
              <div className="absolute -top-20 left-0 w-72 h-72 md:w-96 md:h-96 transform rotate-180">
                <img
                  src={bannerSVG1}
                  alt=""
                  className="w-full h-full object-contain opacity-50"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96">
                <img
                  src={bannerSVG1}
                  alt=""
                  className="w-full h-full object-contain opacity-50"
                />
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative z-10 flex justify-center items-center">
              <img
                src={customer}
                alt="Financial Technology"
                className="w-[80%] object-cover shadow-xl"
              />
            </div>

            {/* Floating Icons */}
            <div className="absolute  md:left-5 top-[45%] z-20 animate-pulse">
              <img src={icon2} alt="" className="w-22 h-22" />
            </div>
            <div className="absolute right-0 top-[10%] z-20 animate-pulse">
              <img src={icon1} alt="" className="w-32 h-32" />
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="mt-6 md:hidden space-y-4">
          <p className="text-gray-700 leading-relaxed font-bold">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
