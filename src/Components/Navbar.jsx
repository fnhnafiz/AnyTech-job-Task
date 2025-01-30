import { MdLanguage } from "react-icons/md";
import navLogo from "../../public/icons/easy-banking/navlogo.svg";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full absolute z-10 px-12 py-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img className="w-32" src={navLogo} alt="" />
        </div>
        {/* Center Item */}
        <div className="flex gap-10 items-center">
          {/* Dropdown */}
          <div className="dropdown dropdown-hover ">
            <div
              tabIndex={0}
              role="button"
              className="text-white m-1 flex items-center "
            >
              Solutions <FiChevronDown className="text-lg" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li className="border-b border-b-gray-100">
                <a>AnyCaaS</a>
              </li>
              <li className="border-b border-b-gray-100">
                <a>AnyCaaS</a>
              </li>
              <li className="border-b border-b-gray-100">
                <a>AnyCaaS</a>
              </li>
            </ul>
          </div>
          {/* end drop down */}
          <div>
            <span className="text-white">Contact Us</span>
          </div>
          <div>
            <span className="text-white">About Us</span>
          </div>
          <div>
            <div className="dropdown dropdown-hover">
              <button
                tabIndex={0}
                className="m-1 flex items-center gap-2 border border-white text-white  px-4 py-2 rounded-full"
              >
                <MdLanguage className="text-xl" />
                <span>EN</span>
                <FiChevronDown className="text-lg" />
              </button>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white text-black rounded-md shadow-md w-32 p-2"
              >
                <li>
                  <a>Hindi</a>
                </li>
                <li>
                  <a>Arabic</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* btn */}
        <button className="flex items-center gap-2 font-semibold  border border-white text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-500 hover:shadow-lg">
          Contact Us <FiChevronRight />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
