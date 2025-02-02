import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeartbeat, FaLightbulb, FaProjectDiagram } from "react-icons/fa";
import { Bounce, Fade } from "react-awesome-reveal";

const ServiceCardSlider = () => {
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
    <div className="px-4 pb-12">
      <Slider {...settings} className="flex gap-4 justify-center">
        {/* slider first card */}
        <Bounce>
          <div className="px-2 py-6">
            <div className="bg-white border border-blue-100 rounded-lg p-6  shadow-md hover:bg-blue-50 transition duration-300 flex flex-col items-start ">
              <div className="flex justify-center items-center bg-blue-100 rounded-full w-12 h-12  mb-4">
                <FaLightbulb className="text-blue-600 text-2xl" />
              </div>
              <Fade direction="up">
                <h3 className="text-lg font-semibold text-gray-900">Consult</h3>
              </Fade>
              <Fade direction="up">
                <p className="text-gray-600 mt-2">
                  Our breadth of consulting expertise spans from applying the
                  latest financial technological innovations to implementing
                  risk-control strategies.
                </p>
              </Fade>
            </div>
          </div>
        </Bounce>
        {/* slider second card */}
        <Bounce>
          <div className="px-2 py-6">
            <div className="bg-white border border-blue-100 rounded-lg p-6 text-center shadow-md hover:bg-blue-50 transition duration-300 flex flex-col items-start">
              <div className="flex justify-center items-center bg-blue-100 rounded-full w-12 h-12  mb-4">
                <FaProjectDiagram className="text-blue-600 text-2xl" />
              </div>
              <Fade direction="up">
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  Implement
                </h3>
              </Fade>
              <Fade direction="up">
                <p className="text-gray-600 mt-2 text-left">
                  Combining deep technological expertise and a proven track
                  record, we design and implement custom solutions for financial
                  institutions that drive.
                </p>
              </Fade>
            </div>
          </div>
        </Bounce>
        {/* slider third card */}
        <Bounce>
          <div className="px-2 py-6">
            <div className="bg-white border border-blue-100 rounded-lg p-6 text-center shadow-md hover:bg-blue-50 transition duration-300 flex flex-col items-start">
              <div className="flex justify-center items-center bg-blue-100 rounded-full w-12 h-12 mb-4">
                <FaHeartbeat className="text-blue-600 text-2xl" />
              </div>
              <Fade direction="up">
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  Operate
                </h3>
              </Fade>
              <Fade direction="up">
                <p className="text-gray-600 mt-2 text-left">
                  We provide a full operational and support services that
                  continue solutions for financial throughout the product life
                  suite of find to the mistry cycle.
                </p>
              </Fade>
            </div>
          </div>
        </Bounce>
      </Slider>
    </div>
  );
};

export default ServiceCardSlider;
