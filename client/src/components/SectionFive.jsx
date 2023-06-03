import Formimg from "../assets/Formimg.png";
import Trustedby from "../assets/Trustedby.png";
import Clientlogotwo from "../assets/Clientlogotwo.png";

function SectionFive() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center mt-[300px] md:mt-[100px]">
      <div className="md:w-[472px] md:h-[294px] lg:w-[472px] lg:h-[294px]">
        <div className="mt-7 font-bold text-3xl">
          See why the world’s best companies use Qubly to become truly
          data-driven.
        </div>
        <img className="mt-3" src={Trustedby} alt="" />
        <img className="mt-10" src={Clientlogotwo} alt="" />
      </div>
      <div>
        <img src={Formimg} alt="" />
      </div>
    </div>
  );
}

export default SectionFive;
