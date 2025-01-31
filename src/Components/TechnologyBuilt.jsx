import SectionTitle from "./SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage1 from "../../public/CardImage/Slider1.jpg";
import sliderImage2 from "../../public/CardImage/slider2.jpg";
import sliderImage3 from "../../public/CardImage/slider3.png";
import sliderImage4 from "../../public/CardImage/slider4.jpg";
import CardTitle from "./CardTitle";

const TechnologyBuilt = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
      <SectionTitle
        subHeading="TECHNOLOGY BUILT FOR YOU"
        heading="The future of finance"
      ></SectionTitle>
      <div className="flex items-center justify-between  mx-auto py-12 px-4 flex-wrap gap-4">
        <button className="px-6 py-2 rounded-full text-blue-500 hover:bg-blue-100 transition-colors">
          Customer focused
        </button>
        <button className="px-6 py-2 rounded-full text-blue-500 hover:bg-blue-100 transition-colors">
          Agile and adaptable
        </button>
        <button className="px-6 py-2 rounded-full text-blue-500 hover:bg-blue-100 transition-colors">
          Compliance ready
        </button>
        <button className="px-6 py-2 bg-blue-100 rounded-full text-blue-500 hover:bg-blue-200 transition-colors">
          Secure and safe
        </button>
      </div>
      <Slider {...settings}>
        <div>
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start w-full container mx-auto">
            {/* Left Side: Text Content */}
            {/* <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-left">
              <p className="text-blue-600 font-semibold text-sm uppercase">
                Customer Focused
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                Purpose-built financial services
              </h2>
              <p className="font-semibold text-gray-800 mt-4">
                Elevate customer experience and achieve agile financial product
                innovation with the world’s first, consumer-centric, real-time
                transaction account processing and credit limit system.
              </p>
              <p className="text-gray-600 mt-4">
                Experience the advantages of integrated retail financial
                services technology, real-time analysis of transactional
                behaviour and product marketing opportunities.
              </p>
            </div> */}
            <CardTitle
              subHeading="Customer focused"
              heading="Purpose-built financial services"
              paragraph1="Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system."
              paragraph2="
Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities."
            ></CardTitle>

            {/* Right Side: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={sliderImage1}
                alt="Financial Data"
                className="rounded-lg shadow-lg w-full max-w-sm md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start w-full container mx-auto">
            {/* Left Side: Text Content */}
            <CardTitle
              subHeading="AGILE AND ADAPTABLE"
              heading="Agile and adaptable for growth"
              paragraph1="Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance."
              paragraph2="Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities."
            ></CardTitle>

            {/* Right Side: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={sliderImage2}
                alt="Financial Data"
                className="rounded-lg shadow-lg w-full max-w-sm md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start w-full container mx-auto">
            {/* Left Side: Text Content */}
            <CardTitle
              subHeading="COMPLIANCE READY"
              heading="Manage compliance with ease"
              paragraph1="Navigate through the evolving regulatory landscape with confidence by streamlining compliance management-through real-time risk monitoring solutions powered by Al and machine learning."
              paragraph2="Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems."
            ></CardTitle>

            {/* Right Side: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={sliderImage3}
                alt="Financial Data"
                className="rounded-lg shadow-lg w-full max-w-sm md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start w-full container mx-auto">
            {/* Left Side: Text Content */}
            <CardTitle
              subHeading="SECURE AND SAFE"
              heading="Highly secure and safe"
              paragraph1="Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise."
              paragraph2="Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure."
            ></CardTitle>

            {/* Right Side: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={sliderImage4}
                alt="Financial Data"
                className="rounded-lg shadow-lg w-full h-full sm:h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TechnologyBuilt;
