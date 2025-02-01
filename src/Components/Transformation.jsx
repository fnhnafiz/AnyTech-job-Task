import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Transformation = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white  rounded-xl  container mx-auto ">
      <div
        className="flex flex-col lg:flex-row justify-between items-center rounded-xl px-5 md:px-20 py-12 lg:py-0"
        style={{
          backgroundImage: `url(${"../../public/backgrounds/icon.svg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "50vh",
          minHeight: "30vh",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-center md:text-left py-12">
          <h2 className="text-2xl md:text-5xl font-bold">
            Start your transformation
          </h2>
          <p className="mt-2 text-sm md:text-base">
            We are ready to serve as strategic partners to provide your
            organisation with the support you need.
          </p>
        </div>
        <Link to="#">
          <button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 cursor-pointer shadow-md transition-all flex items-center gap-2">
            Talk to Us <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Transformation;
