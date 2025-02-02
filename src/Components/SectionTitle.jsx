import { Fade } from "react-awesome-reveal";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto text-center my-8 px-12 md:p-0 space-y-6">
      <Fade>
        <p className="text-[#388EF2]  font-semibold">{subHeading}</p>
      </Fade>
      <Fade direction="up">
        <h3 className="text-3xl md:text-5xl font-semibold uppercase text-[#0B305B]">
          {heading}
        </h3>
      </Fade>
    </div>
  );
};

export default SectionTitle;
