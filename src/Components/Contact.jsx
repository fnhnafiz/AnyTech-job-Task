import { FiArrowRight } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact-shape w-full h-[400px] sm:h-[600px] flex justify-center items-center overflow-hidden">
      <div className="contact-shape-bg w-full h-[400px] sm:h-[600px] bg-gradient-to-br from-[#00D0FF] via-[#0066FF] to-[#0262E6] opacity-80 flex justify-start items-center">
        <div className="space-y-5 px-8 sm:px-16">
          <h3 className="text-3xl sm:text-5xl font-bold text-white">
            Legacy no longer
          </h3>
          <p className="text-white font-semibold">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition duration-300">
            Contact Us <FiArrowRight className="text-lg" />
          </button>
        </div>
      </div>

      {/* <div className="flex items-center">
        <img
          className="w-full h-[300px] backdrop-blur-2xl absolute bottom-0 -z-10"
          src="../public/backgrounds/icon.svg"
          alt=""
        />
        <img
          className="w-full h-[300px] backdrop-blur-2xl -z-10"
          src="../public/backgrounds/icon.svg"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Contact;
