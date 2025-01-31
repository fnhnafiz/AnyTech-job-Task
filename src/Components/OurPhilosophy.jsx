import SectionTitle from "./SectionTitle";
import desctopDiagram from "../../public/icons/easy-banking/destopDiagram.png";
import mobileDiagram from "../../public/icons/easy-banking/mobileDiagram.png";

const OurPhilosophy = () => {
  return (
    <div>
      <SectionTitle
        subHeading="OUR PHILOSOPHY"
        heading="Human-centred innovation"
      ></SectionTitle>
      <div className="container mx-auto">
        <img className="hidden md:block" src={desctopDiagram} alt="" />
        <img className="md:hidden" src={mobileDiagram} alt="" />
      </div>
    </div>
  );
};

export default OurPhilosophy;
