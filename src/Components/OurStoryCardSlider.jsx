import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiBarChart2 } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { PiCoinsDuotone } from "react-icons/pi";

const OurStoryCardSlider = () => {
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
    <div>
      <Slider {...settings}>
        <div>
          {/* Card 1 */}
          <div className="p-6 flex flex-col items-start space-y-4">
            <div className="rounded-full p-3 bg-blue-100">
              <FiBarChart2 className="w-6 h-6 text-gray-900" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-navy-900">
              Experts in technology and finance
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With our team's deep expertise in the finance and tech sectors, we
              are catalysts for change, paving the way for innovation and
              strategic reorientation, shaping the future of finance.
            </p>
          </div>
        </div>
        <div>
          {/* Card 2 */}
          <div className="p-6 flex flex-col items-start space-y-4">
            <div className="rounded-full p-3 bg-[#FFE2D4]">
              {/* <FaLaptop className="w-6 h-6 text-blue-600" 
              /> */}
              <PiCoinsDuotone className="w-6 h-6 text-gray-900" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-navy-900">
              Empowerment through technology
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Empowering more than 40 financial institutions to transform in a
              digital-first world, our innovative platform enables banks and
              financial institutions to develop customer-centric financial
              products and offerings.
            </p>
          </div>
        </div>
        <div>
          {/* Card 3 */}
          <div className="p-6 flex flex-col items-start space-y-4">
            <div className="rounded-full p-3 bg-[#E9F3FF]">
              {/* <FaUserSecret className="w-6 h-6 text-blue-600" /> */}
              <FaUsers className="w-6 h-6 text-gray-900" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">
              Understanding evolving needs
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By staying at the forefront of technology and understanding the
              evolving needs of the industry, we strive to provide cutting-edge
              solutions that drive efficiency, enhance user experiences, and
              enable financial inclusion.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OurStoryCardSlider;
