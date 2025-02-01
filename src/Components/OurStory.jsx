import customer from "../../public/OurStory/OurStory.jpg";
import bannerSVG1 from "../../public/frames/story/1.png";
import bannerSVG2 from "../../public/frames/story/3.svg";

const OurStory = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row sm:items-start  sm:justify-between gap-20 md:gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-[#388EF2] font-semibold tracking-wide uppercase text-center sm:text-left md:pl-16 lg:pl-0">
            OUR STORY
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#0B305B] leading-tight pl-16 md:p-0 md:text-left">
            Building the future today
          </h2>
          <div className="mt-6 hidden md:block space-y-4">
            <p className="text-gray-700 leading-relaxed  font-bold">
              Founded in January 2020, Any Technology is a Singapore-based
              fintech enterprise committed to helping the global financial
              services industry reimagine banking and payment services.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative ">
            {/* Background Shapes Layer */}
            <div className="absolute inset-0 w-full h-full">
              {/* Top right shape */}
              <div className="absolute  -bottom-[5%] md:-top-[10%] left-0 w-32 h-72 md:w-52 md:h-96 transform ">
                <img
                  src={bannerSVG1}
                  alt=""
                  className="w-full object-contain"
                />
              </div>

              <div className="absolute -bottom-[30%] right-5 md:-bottom-[70%] md:-right-[5%] lg:right-[2%] lg:-bottom-[40%] w-32 h-52 md:w-52 md:h-96 -z-20">
                <img
                  src={bannerSVG2}
                  alt=""
                  className="w-full h-full object-contain opacity-50"
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
          </div>
        </div>

        {/* Mobile Content */}
        <div className="mt-6 md:hidden space-y-4">
          Founded in January 2020, Any Technology is a Singapore-based fintech
          enterprise committed to helping the global financial services industry
          reimagine banking and payment services.
        </div>
      </div>
    </section>
  );
};

export default OurStory;
