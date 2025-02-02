import { FaBrain, FaChalkboard } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bounce, Fade } from "react-awesome-reveal";

const OparateCardSlider = () => {
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
        <Bounce>
          <div className="px-2">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-16 text-center shadow-md w-full  ">
              <div className="flex justify-start items-center mb-4">
                <div className="bg-[#B9D9FF] p-3 rounded-full text-gray-900 text-2xl">
                  <LuBrainCircuit />
                </div>
              </div>
              <Fade direction="up">
                <h3 className="text-xl font-semibold text-gray-900 text-start">
                  Operational Support
                </h3>
              </Fade>
              <Fade direction="up">
                <p className="text-gray-700 mt-2 text-start">
                  Deploy our team to manage and maintain your AnyTech solutions
                  so that you can focus on your core business and strategic
                  initiatives.
                </p>
              </Fade>
            </div>
          </div>
        </Bounce>
        {/* slider second card */}
        <Bounce>
          <div className="px-2">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-16 text-center shadow-md w-full ">
              <div className="flex justify-start items-center mb-4">
                <div className="bg-[#B9D9FF] p-3 rounded-full text-gray-900 text-2xl">
                  <FaChalkboard />
                </div>
              </div>
              <Fade direction="up">
                <h3 className="text-xl font-semibold text-gray-900 text-start">
                  Personalised Services
                </h3>
              </Fade>
              <Fade direction="up">
                <p className="text-gray-700 mt-2 text-start">
                  From developing new business opportunities to running backend
                  IT maintenance, our team can also provide any other support
                  you require.
                </p>
              </Fade>
            </div>
          </div>
        </Bounce>
        {/* slider third card */}
        <Bounce>
          <div className="px-2">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-16 text-center shadow-md w-full ">
              <div className="flex justify-start items-center mb-4">
                <div className="bg-[#B9D9FF] p-3 rounded-full text-gray-600 text-2xl">
                  <FaBrain />
                </div>
              </div>
              <Fade direction="up">
                <h3 className="text-xl font-semibold text-gray-900 text-start">
                  24/7 Technical Support
                </h3>
              </Fade>
              <Fade direction="up">
                <p className="text-gray-700 mt-2 text-start">
                  Our customer success team is available around the clock to
                  address your enquiries and resolve any issues that may arise.
                </p>
              </Fade>
            </div>
          </div>
        </Bounce>
      </Slider>
    </div>
  );
};

export default OparateCardSlider;
