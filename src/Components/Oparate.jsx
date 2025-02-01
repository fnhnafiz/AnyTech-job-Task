import customer from "../../public/OparateSection/oparateSectionImg.png";
import bannerSVG1 from "../../public/ImplementImage/foreground.png";
import bannerSVG2 from "../../public/frames/story/3.svg";
import icon2 from "../../public/OparateSection/oparateChart!.svg";
import icon1 from "../../public/OparateSection/oparteUserIcon.svg";

const Oparate = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row sm:items-start  sm:justify-between gap-20 md:gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <p className="text-[#388EF2] font-semibold tracking-wide uppercase  pl-16 md:pl-0">
            long-term efficiency
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B305B] leading-tight pl-16 md:p-0 md:text-left">
            Operate
          </h2>
          <div className="mt-6 hidden md:block space-y-4">
            <p className="text-gray-700 leading-relaxed  font-bold">
              Setting up operational efficiencies to deliver the promised value
              to your customers is pivotal to long-term growth.
            </p>
            <p className="text-gray-700 leading-relaxed  font-bold">
              We provide a full suite of operational and support services that
              continue throughout the product life cycle.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Continually drive success with our dedicated experts who are ready
              to assist you at every step of the way.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative ">
            {/* Background Shapes Layer */}
            <div className="absolute inset-0 w-full h-full">
              {/* Top right shape */}
              <div className="absolute  -bottom-[30%] -left-[25%] w-[600px] h-72 md:w-[800px] md:h-96 transform ">
                <img
                  src={bannerSVG1}
                  alt=""
                  className="w-full object-contain"
                />
              </div>

              <div className="absolute -bottom-[20%] right-5 md:-bottom-[70%] md:-right-[5%] lg:right-[2%] lg:-bottom-[30%] w-32 h-52 md:w-52 md:h-96 -z-20">
                <img
                  src={bannerSVG2}
                  alt=""
                  className="w-full h-full object-contain "
                />
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative -z-10 flex justify-center items-center">
              <img
                src={customer}
                alt="Financial Technology"
                className="w-[80%] object-cover shadow-xl"
              />
            </div>

            <div className="absolute -right-10 -top-14 md:-right-[5%]   z-20 animate-pulse">
              <img src={icon2} alt="" className="w-42 h-32 " />
            </div>
            <div className="absolute left-0 top-[20%] md:left-[3%] md:top-[25%]  z-20 animate-pulse">
              <img src={icon1} alt="" className="w-26 h-32 " />
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="mt-6 md:hidden space-y-4">
          <p className="text-gray-700 leading-relaxed  font-bold">
            Setting up operational efficiencies to deliver the promised value to
            your customers is pivotal to long-term growth.
          </p>
          <p className="text-gray-700 leading-relaxed font-bold">
            We provide a full suite of operational and support services that
            continue throughout the product life cycle.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Continually drive success with our dedicated experts who are ready
            to assist you at every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Oparate;
