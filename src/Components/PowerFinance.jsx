import customer from "../../public/backgrounds/second-section-img.png";
import icon1 from "../../public/icons/sectionImag/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg";
import icon2 from "../../public/icons/sectionImag/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg";
import icon3 from "../../public/icons/sectionImag/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg";
import bannerSVG1 from "../../public/frames/story/3.svg";
import bannerSVG2 from "../../public/frames/story/2.svg";

const PowerFinance = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20 md:gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4 ">
          <p className="text-[#388EF2] font-semibold tracking-wide uppercase text-center md:text-left">
            Powering the future of finance
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B305B] leading-tight pl-16 md:p-0 md:text-left">
            Uncovering new ways to delight customers
          </h2>
          <div className="mt-6 hidden md:block space-y-4">
            <p className="text-gray-700 leading-relaxed  font-bold">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
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
              {/* Top shapes */}
              <div className="absolute -top-10 right-10 md:-top-16 md:right-20 w-32 h-32 transform">
                <img
                  src={bannerSVG2}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Bottom right shape */}
              <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96">
                <img
                  src={bannerSVG1}
                  alt=""
                  className="w-full h-full object-contain opacity-50"
                />
              </div>
              {/* Bottom shapes */}
              <div className="absolute bottom-20 right-10 w-32 h-32 z-20">
                <img
                  src={bannerSVG2}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-3 md:bottom-4 left-11 md:left-15 w-32 h-32 z-20">
                <img
                  src={bannerSVG2}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-4 left-1/4 w-32 h-32">
                <img
                  src={bannerSVG2}
                  alt=""
                  className="w-full h-full object-contain"
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
            <div className="absolute left-5 top-[15%] z-20 animate-pulse">
              <img src={icon2} alt="" className="w-20 h-20" />
            </div>
            <div className="absolute right-0 top-[10%] z-20 animate-pulse">
              <img src={icon1} alt="" className="w-32 h-32" />
            </div>
            <div className="absolute top-[35%] left-[20%] z-20 animate-pulse">
              <img src={icon3} alt="" className="w-24 h-24" />
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

export default PowerFinance;
