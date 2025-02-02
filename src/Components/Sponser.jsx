import logo1 from "../../public/SponserLogo/logo1.webp";
import logo2 from "../../public/SponserLogo/logo2.webp";
import logo3 from "../../public/SponserLogo/logo3.webp";
import logo4 from "../../public/SponserLogo/logo4.webp";
import logo5 from "../../public/SponserLogo/logo5.webp";
import logo6 from "../../public/SponserLogo/logo6.webp";
import logo7 from "../../public/SponserLogo/logo7.webp";
import logo8 from "../../public/SponserLogo/logo8.webp";
import logo9 from "../../public/SponserLogo/logo9.webp";
import logo10 from "../../public/SponserLogo/logo10.webp";
import logo11 from "../../public/SponserLogo/logo11.webp";
import logo12 from "../../public/SponserLogo/logo12.webp";
import logo13 from "../../public/SponserLogo/logo13.webp";
import logo14 from "../../public/SponserLogo/logo14.webp";
import logo15 from "../../public/SponserLogo/logo15.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sponser = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1, // Show 1 logo per slide in small screens
    slidesToScroll: 1,
  };

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
  ];

  return (
    <div className="container mx-auto py-10 ">
      {/* Grid Layout for Large Screens */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-10 items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="h-16 w-52 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Slider for Small Screens */}
      <div className="md:hidden">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Sponsor ${index + 1}`}
                className="h-16 w-full object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sponser;
