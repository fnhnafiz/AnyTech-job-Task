import { Fade } from "react-awesome-reveal";

const CardTitle = ({ subHeading, heading, paragraph1, paragraph2 }) => {
  return (
    <div className="w-full lg:w-1/2 pr-0 md:pr-8 text-center md:text-left space-y-6">
      <Fade direction="up">
        <p className="text-blue-600 font-semibold text-lg uppercase">
          {subHeading}
        </p>
      </Fade>
      <Fade direction="up">
        <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 mt-2">
          {heading}
        </h2>
      </Fade>
      <Fade direction="up">
        <p className="font-semibold text-gray-800 mt-4">{paragraph1}</p>
      </Fade>
      <Fade direction="up">
        <p className="text-gray-600 mt-4">{paragraph2}</p>
      </Fade>
    </div>
  );
};

export default CardTitle;
