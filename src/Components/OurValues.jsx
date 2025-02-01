import SectionTitle from "./SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiBarChart2 } from "react-icons/fi";
import { FaBaby, FaUsers } from "react-icons/fa";
import { PiCoinsDuotone } from "react-icons/pi";

const OurValues = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="mb-12 md:mb-32">
      <SectionTitle subHeading="OUR VALUES" heading="Built in our core" />
      <div>
        <Slider {...settings}>
          <div>
            {/* Card 1 */}
            <div className="p-6 flex flex-col gap-6 items-start space-y-4">
              <div className="rounded-full p-3 bg-blue-100">
                <FiBarChart2 className="w-6 h-6 text-gray-900" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-navy-900">
                Driven
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Motivated by a desire for change, we empower our customers by
                tenaciously striving for breakthroughs in financial services.
              </p>
            </div>
          </div>
          <div>
            {/* Card 2 */}
            <div className="p-6 flex flex-col gap-4 items-start space-y-4">
              <div className="rounded-full p-3 bg-[#FFE2D4]">
                {/* <FaLaptop className="w-6 h-6 text-blue-600" 
              /> */}
                <PiCoinsDuotone className="w-6 h-6 text-gray-900" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-navy-900 ">
                Agile
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our agility helps us stay one step ahead, where we embrace
                change and swiftly adapt in order to deliver cutting-edge
                solutions.
              </p>
            </div>
          </div>
          <div>
            {/* Card 3 */}
            <div className="p-6 flex flex-col gap-6 items-start space-y-4">
              <div className="rounded-full p-3 bg-[#E9F3FF]">
                {/* <FaUserSecret className="w-6 h-6 text-blue-600" /> */}
                <FaUsers className="w-6 h-6 text-gray-900" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Global
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We think beyond borders, with a commitment to creating financial
                technological solutions that empower banks and financial
                institutions across the world.
              </p>
            </div>
          </div>
          <div>
            {/* Card 4 */}
            <div className="p-6 flex flex-col gap-6 items-start space-y-4">
              <div className="rounded-full p-3 bg-[#E9F3FF]">
                {/* <FaUserSecret className="w-6 h-6 text-blue-600" /> */}
                <FaBaby className="w-6 h-6 text-gray-900" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Open
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In a world of possibilities, our openness leads us to discover
                new ideas, fostering creativity and inspiring transformative
                solutions.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurValues;
