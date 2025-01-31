import {
  FaFacebook,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import footerLogo from "../../public/icons/easy-banking/navlogo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo  */}
        <div className="flex items-center space-x-2 ">
          <img src={footerLogo} alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links*/}
        <nav className="flex flex-col md:flex-row md:space-x-6 text-cyan-400 text-sm text-center mt-4 md:mt-0">
          <span className="font-semibold">Our Solutions</span>
          <span>AnyCaaS</span>
          <span>AnyBaaS</span>
          <span>AnyPaaS</span>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 md:order-2 mt-4 md:mt-0 sm:hidden">
          <FaFacebook className="text-cyan-400 text-lg cursor-pointer" />
          <FaTwitter className="text-cyan-400 text-lg cursor-pointer" />
          <FaLinkedin className="text-cyan-400 text-lg cursor-pointer" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <div className="flex items-center space-x-1 text-cyan-400">
          <FaRegCopyright />
          <span>2023 All rights reserved. Any Technology Pte Ltd.</span>
        </div>
        <span className="mt-2 md:mt-0 text-cyan-400">Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
