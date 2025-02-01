import icon from "../../public/OurStory/empower.svg";
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

const FinancialInstitutions = () => {
  return (
    <div className=" container mx-auto px-8 my-20">
      <div className="relative w-full h-full border-b border-gray-300 ">
        <img className="absolute top-0 left-0" src={icon} alt="" />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-600 py-16">
          Empowering more than{" "}
          <span className="text-blue-500">40 financial institutions</span> to
          transform in a digital-first world.
        </h1>
      </div>
      {/* Sponser Logo */}
      <div className="my-10">
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

export default FinancialInstitutions;
