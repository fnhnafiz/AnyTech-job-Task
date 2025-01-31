const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className="text-[#388EF2] mb-2">{subHeading}</p>
      <h3 className="text-3xl uppercase text-[#0B305B]  py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
