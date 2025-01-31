const CardTitle = ({ subHeading, heading, paragraph1, paragraph2 }) => {
  return (
    <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-left space-y-6">
      <p className="text-blue-600 font-semibold text-lg uppercase">
        {subHeading}
      </p>
      <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 mt-2">
        {heading}
      </h2>
      <p className="font-semibold text-gray-800 mt-4">{paragraph1}</p>
      <p className="text-gray-600 mt-4">{paragraph2}</p>
    </div>
  );
};

export default CardTitle;
