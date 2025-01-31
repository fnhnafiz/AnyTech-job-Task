import { FaLightbulb, FaShareAlt } from "react-icons/fa";
import { LuCircuitBoard } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
  var settings = {
    dots: false,
    infinite: false,
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
          infinite: false,
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
    <div className="slider-container container mx-auto py-16">
      <Slider {...settings}>
        {/* First Card */}
        <div className="px-2">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FaShareAlt className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Full-suite solutions
            </h3>
            <p className="text-gray-600">
              Experience the ease of integration across various banking and
              payment functions with our comprehensive suite of solutions.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="px-2">
          <div className="bg-cyan-50 rounded-lg p-6">
            <div className="rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FaLightbulb className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Simplify the complex
            </h3>
            <p className="text-gray-600">
              Simplify complex processes and optimize your financial operations
              by leveraging the power of AI, Blockchain, Cloud Computing, and
              Big Data.
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="px-2">
          <div className="bg-red-50 rounded-lg p-6">
            <div className="rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <LuCircuitBoard />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Cutting-edge tech
            </h3>
            <p className="text-gray-600">
              We seamlessly combine cutting-edge technologies, resulting in an
              unparalleled fintech experience for financial institutions.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Card;
