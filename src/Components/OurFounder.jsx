import bannerSVG1 from "../../public/frames/story/3.svg";
import customer from "../../public/OurStory/founder.png";

const OurFounder = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col  lg:flex-row sm:items-start  justify-between gap-20 md:gap-32">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <p className="text-[#388EF2] font-semibold tracking-wide uppercase pl-16 md:pl-0">
            Our Founder
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B305B] leading-tight pl-16 md:p-0 md:text-left">
            A trailblazer in finance
          </h2>
          <div className="mt-6 hidden md:block space-y-4">
            <p className="text-gray-700 leading-relaxed  font-bold">
              Trong Lau is an experienced executive with extensive knowledge in
              the field of credit card systems. Throughout her career spanning
              over 30 years, she has played a pivotal role in introducing and
              executing advanced credit card and intelligent retail financial
              systems across the region.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Her unwavering dedication to innovation and impactful leadership
              has been instrumental in shaping the industry and driving the
              creation of pragmatic and user-centric financial technologies.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative aspect-square">
            {/* Background Shapes Layer */}
            <div className="absolute inset-0 w-full h-full">
              {/* Top right shape */}
              <div className="absolute -top-10 -left-10 w-72 h-72 transform rotate-180">
                <img
                  src={bannerSVG1}
                  alt=""
                  className="w-full h-full object-contain opacity-50"
                />
              </div>

              <div className="absolute bottom-0 right-16 w-52 h-72 ">
                <img
                  src={bannerSVG1}
                  alt=""
                  className="w-full h-full object-contain opacity-50"
                />
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative z-10 flex flex-col justify-center items-start ">
              <img
                src={customer}
                alt="Financial Technology"
                className="w-[80%] object-cover "
              />
              <h2 className="text-xl text-gray-700 font-bold pl-8">
                TRONG LAU, FOUNDER
              </h2>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="mt-6 md:hidden space-y-4">
          <p className="text-gray-700 leading-relaxed font-bold">
            Trong Lau is an experienced executive with extensive knowledge in
            the field of credit card systems. Throughout her career spanning
            over 30 years, she has played a pivotal role in introducing and
            executing advanced credit card and intelligent retail financial
            systems across the region.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Her unwavering dedication to innovation and impactful leadership has
            been instrumental in shaping the industry and driving the creation
            of pragmatic and user-centric financial technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFounder;
