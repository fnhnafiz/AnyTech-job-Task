import FinancialInstitutions from "../../Components/FinancialInstitutions";
import OurFounder from "../../Components/OurFounder";
import OurMission from "../../Components/OurMission";
import OurStory from "../../Components/OurStory";
import OurStoryCardSlider from "../../Components/OurStoryCardSlider";
import OurValues from "../../Components/OurValues";

const About = () => {
  return (
    <div className="">
      <div className=" relative shape h-[450px] md:h-[500px] bg-gradient-to-br from-[#00D0FF] via-[#0066FF] to-[#0262E6] pt-28 md:pt-32 overflow-hidden ">
        <img
          className="absolute -top-3 right-0 backdrop-blur-lg w-full -z-10"
          src="../public/backgrounds/icon.svg"
          alt=""
        />

        <div className="max-w-3xl z-10 flex justify-center items-center ">
          <div className="space-y-4 pl-6 sm:pl-12">
            <p className="font-bold text-[#02D8E1]">ABOUT US</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-white">
              Paving the way ahead for finance
            </h1>
            <p className="text-lg font-semibold text-white">
              We’re building technologies that will power the future of banking
              and beyond
            </p>
          </div>
        </div>
      </div>
      {/* <div className="about-us-orange-shape ">
        <div className="h-[300px]  bg-gradient-to-br from-orange-500 via-orange-500 to-blue-600"></div>
      </div> */}

      {/* Components */}
      <OurStory />
      <OurStoryCardSlider />
      <FinancialInstitutions />
      <OurMission />
      <OurValues />
      <OurFounder />
    </div>
  );
};

export default About;
