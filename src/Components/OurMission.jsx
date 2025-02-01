import SectionTitle from "./SectionTitle";

const OurMission = () => {
  return (
    <div className="my-20">
      <SectionTitle subHeading="our mission" heading="Redefining tomorrow" />
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white  rounded-xl  container mx-auto ">
        <div
          className="flex flex-col lg:flex-row justify-between items-center rounded-xl p-10   "
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
          <div className="text-center md:text-left space-y-8 ">
            <h2 className="text-xl  font-bold text-[#01DBE0]">Our Mission</h2>
            <p className="mt-2 text-3xl md:text-5xl font-semibold">
              To redefine global finance by empowering institutions with
              technology that drives value and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
