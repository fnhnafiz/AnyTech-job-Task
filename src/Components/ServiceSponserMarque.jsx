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
import Marquee from "react-fast-marquee";
import SectionTitle from "./SectionTitle";
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
const ServiceSponserMarque = () => {
  return (
    <div className="my-12">
      <SectionTitle subHeading="Trusted by the best"></SectionTitle>
      <div className="bg-gray-100 py-4 container mx-auto">
        <Marquee speed={60} pauseOnHover>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Sponsor Logo ${index + 1}`}
              className="h-16 mx-6"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ServiceSponserMarque;
