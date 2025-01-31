import SectionTitle from "./SectionTitle";
import React, { useState } from "react";
import CountUp from "react-countup";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const Coundown = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  // Start the counter when the section is in view
  React.useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);
  return (
    <div className="my-12 container mx-auto">
      <SectionTitle subHeading="TRUSTED BY THE BEST"></SectionTitle>
      <>
        <section className="">
          <div
            ref={ref}
            className="px-2 mx-auto   text-[#388EF2]   justify-center items-center container md:px-5"
          >
            <div className="grid py-8 w-full md:grid-cols-3 gap-5 px-5">
              <div className="flex flex-row md:flex-col justify-between md:justify-center items-center sm:border-none border-b border-dashed border-blue-500">
                <h3 className="text-4xl  sm:text-7xl font-semibold flex">
                  {startCount && <CountUp start={0} end={20} duration={2} />}
                  <span>
                    <MdKeyboardArrowLeft />
                  </span>
                </h3>
                <p className="mt-2 mb-4 text-lg font-medium text-gray-900">
                  Years of Experience
                </p>
              </div>
              <div className="flex flex-row md:flex-col justify-between md:justify-center items-center sm:border-none border-b border-dashed border-blue-5">
                <h3 className="text-4xl sm:text-7xl  font-semibold">
                  {startCount && <CountUp start={0} end={40} duration={2} />}
                  <span>+</span>
                </h3>
                <p className="mt-2 text-lg md:text-xl text-gray-900">
                  Financial Institutions
                </p>
              </div>
              <div className="flex flex-row md:flex-col justify-between md:justify-center items-center border-b border-dashed border-blue-5 sm:border-none">
                <h3 className="text-4xl sm:text-7xl font-semibold flex">
                  <span>
                    <MdKeyboardArrowLeft />
                  </span>
                  {startCount && <CountUp start={0} end={200} duration={2} />}
                </h3>
                <p className="mt-2 text-lg md:text-xl text-gray-900">
                  Customers Each
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Coundown;
