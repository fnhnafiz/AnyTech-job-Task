import ServiceCardSlider from "../../Components/ServiceCardSlider";
import WhatWeDo from "../../Components/WhatWeDo";

const Services = () => {
  return (
    <div>
      <div className="relative shape h-[450px] md:h-[500px] bg-gradient-to-br from-[#00D0FF] via-[#0066FF] to-[#0262E6] pt-28 md:pt-32 overflow-hidden ">
        <img
          className="absolute -top-3 right-0 backdrop-blur-lg w-full -z-10"
          src="../public/backgrounds/icon.svg"
          alt=""
        />

        <div className="max-w-3xl z-10 flex justify-center items-center ">
          <div className="space-y-4 pl-12">
            <p className="font-bold text-[#02D8E1]">OUR SERVICES</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-white">
              Reimagining <br /> banking solutions
            </h1>
            <p className="text-lg font-semibold text-white">
              Enabling financial institutions to create unparalleled customer
              experiences
            </p>
          </div>
        </div>
      </div>
      <WhatWeDo />
      <ServiceCardSlider />
    </div>
  );
};

export default Services;
