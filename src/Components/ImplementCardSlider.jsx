import { FaClock, FaExchangeAlt, FaServer } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImplementCardSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-4 py-12">
      <Slider {...settings}>
        {/* slider first card */}
        <div className="px-2">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-16 text-center shadow-md w-full  ">
            <div className="flex justify-start items-center mb-4">
              <div className="bg-[#B9D9FF] p-3 rounded-full text-gray-900 text-2xl">
                <FaServer />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-start">
              New Setup
            </h3>
            <p className="text-gray-700 mt-2 text-start">
              Create banking infrastructure from the ground up to better serve
              your needs and your customers.
            </p>
          </div>
        </div>
        {/* slider second card */}
        <div className="px-2">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-16 text-center shadow-md w-full ">
            <div className="flex justify-start items-center mb-4">
              <div className="bg-[#B9D9FF] p-3 rounded-full text-gray-900 text-2xl">
                <FaExchangeAlt />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-start">
              System Upgrade
            </h3>
            <p className="text-gray-700 mt-2 text-start">
              Modernise your current infrastructure to overcome challenges posed
              by legacy systems.
            </p>
          </div>
        </div>
        {/* slider third card */}
        <div className="px-2">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-16 text-center shadow-md w-full ">
            <div className="flex justify-start items-center mb-4">
              <div className="bg-[#B9D9FF] p-3 rounded-full text-gray-600 text-2xl">
                <FaClock />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-start">
              System Migration
            </h3>
            <p className="text-gray-700 mt-2 text-start">
              Seamlessly migrate your data and integrations to newer systems
              without business interruptions.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImplementCardSlider;
