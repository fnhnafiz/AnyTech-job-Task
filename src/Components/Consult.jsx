import customer from "../../public/frames/story/consultDiscusion.png";
import icon1 from "../../public/frames/story/userIcon.svg";
import bannerSVG1 from "../../public/frames/story/1.png";
import bannerSVG2 from "../../public/frames/story/3.svg";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

const Consult = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row sm:items-start  sm:justify-between gap-20 md:gap-25">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <Fade direction="up">
            <p className="text-[#388EF2] font-semibold tracking-wide uppercase  pl-16  md:pl-0">
              Taking the First Step
            </p>
          </Fade>
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B305B] leading-tight pl-16 md:p-0 md:text-left">
              Consult
            </h2>
          </Fade>
          <div className="mt-6 hidden md:block space-y-4">
            <Fade direction="up">
              <p className="text-gray-700 leading-relaxed  font-bold">
                Taking the leap towards digital transformation with the ambition
                of delivering augmented value in financial services can be
                daunting.
              </p>
            </Fade>
            <Fade direction="up">
              <p className="text-gray-700 leading-relaxed">
                Tap on the vast experience and deep knowledge of our experts.
                Our breadth of consulting expertise spans from applying the
                latest financial technological innovations to implementing
                risk-control strategies.
              </p>
            </Fade>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative ">
            {/* Background Shapes Layer */}
            <div className="absolute inset-0 w-full h-full">
              {/* Top right shape */}
              <div className="absolute z-10 -bottom-[5%] md:-top-[10%] left-0 w-32 h-72 md:w-52 md:h-96 transform ">
                <Slide>
                  <img
                    src={bannerSVG1}
                    alt=""
                    className="w-full object-contain"
                  />
                </Slide>
              </div>

              <div className="absolute -bottom-[45%] right-5 md:-bottom-[55%] md:right-[0%] lg:right-[2%] lg:-bottom-[70%] w-32 h-52 md:w-52 md:h-96 -z-20">
                <Slide direction="right">
                  <img
                    src={bannerSVG2}
                    alt=""
                    className="w-full h-full object-contain opacity-50"
                  />
                </Slide>
              </div>
            </div>

            {/* Main Image Container */}
            <Fade direction="up">
              <div className="relative -z-10 flex justify-center items-center">
                <img
                  src={customer}
                  alt="Financial Technology"
                  className="w-[80%] object-cover shadow-xl"
                />
              </div>
            </Fade>

            <div className="absolute -right-10 -top-14 md:-right-[5%] md:-top-[25%]  z-20 animate-pulse">
              <Bounce>
                <img src={icon1} alt="" className="w-42 h-32 md:w-52 md:h-52" />
              </Bounce>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="mt-6 md:hidden space-y-4">
          <Fade direction="up">
            <p className="text-gray-700 leading-relaxed font-bold">
              Taking the leap towards digital transformation with the ambition
              of delivering augmented value in financial services can be
              daunting.
            </p>
          </Fade>
          <Fade direction="up">
            <p className="text-gray-700 leading-relaxed">
              Tap on the vast experience and deep knowledge of our experts. Our
              breadth of consulting expertise spans from applying the latest
              financial technological innovations to implementing risk-control
              strategies.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Consult;
