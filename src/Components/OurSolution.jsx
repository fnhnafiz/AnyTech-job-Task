import Slider from "react-slick";
import SectionTitle from "./SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardLogo from "../../public/icons/easy-banking/navbarLogoBlue.svg";
import { Bounce } from "react-awesome-reveal";

const OurSolution = () => {
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
    <div className="my-22 container mx-auto">
      <SectionTitle heading="Our solutions"></SectionTitle>

      <Slider {...settings}>
        {/* card 1 */}
        <Bounce>
          <div className="px-2">
            <div className="bg-white  rounded-xl shadow-md hover:border-2 hover:transition-all hover:duration-300 hover:border-green-600 hover:shadow-lg px-6 py-12 flex flex-col gap-4">
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-800 bg-clip-text text-transparent">
                AnyCaaS
              </h2>
              <div className="flex items-center">
                <p className="text-[10px]">By</p>
                <img className="w-12" src={cardLogo} alt="" />
              </div>
              <p className="mt-2 text-gray-600 text-sm flex-grow">
                Reimagine your card programmes with our Cards-as-a-Service
                (CaaS) solution. Streamline card management tool from us,
                deliver superior customer experiences, and more.
              </p>
            </div>
          </div>
        </Bounce>
        {/* Card 2 */}
        <Bounce>
          <div className="px-2">
            <div className="bg-white  rounded-xl shadow-md hover:border-2 hover:transition-all hover:duration-300 hover:border-purple-600 hover:shadow-lg px-6 py-12 flex flex-col gap-4">
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent">
                AnyBaaS
              </h2>
              <div className="flex items-center">
                <p className="text-[10px]">By</p>
                <img className="w-12" src={cardLogo} alt="" />
              </div>
              <p className="mt-2 text-gray-600 text-sm flex-grow">
                Dive into the future of banking with our Banking-as-a-Service
                (BaaS) platform that gives you the tools you need to adapt and
                scale in today’s fast-paced digital environment.
              </p>
            </div>
          </div>
        </Bounce>
        {/* Card 3 */}
        <Bounce>
          <div className="px-2">
            <div className="bg-white  rounded-xl shadow-md hover:border-2 hover:transition-all hover:duration-300 hover:border-blue-600 hover:shadow-lg px-6 py-12 flex flex-col gap-4">
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AnyPaaS
              </h2>
              <div className="flex items-center">
                <p className="text-[10px]">By</p>
                <img className="w-12" src={cardLogo} alt="" />
              </div>
              <p className="mt-2 text-gray-600 text-sm flex-grow">
                Enhance your payment processing capabilities with our
                Payment-as-a-Service (PaaS) solution. Experience scalable and
                secure infrastructure that handles transactions with ease.
              </p>
            </div>
          </div>
        </Bounce>
      </Slider>
    </div>
  );
};

export default OurSolution;
