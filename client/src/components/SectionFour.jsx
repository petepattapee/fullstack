import Profilepic from "../assets/Profilepic.png";
import Linesecfour from "../assets/Linesecfour.png";
import Clientlogos from "../assets/Clientlogos.png";

function SectionFour() {
  return (
    <div className="secfour flex flex-col justify-center items-center md:min-h-[730px] md:min-w-[1440px] mt-[300px] md:mt-[100px] max-w-full">
      <h1 className="font-bold text-xl md:w-[780px] md:h-[64px] text-center">
        "What I love about Qubly is the easy way we can collaborate even if
        there is a lot of people involved in the process"
      </h1>
      <img className="w-[80px] h-[80px] mt-3" src={Profilepic} alt="" />
      <h3 className="font-bold text-sm text-center mt-2">Guillaume Cabane</h3>
      <h3 className="font-bold text-sm text-center">CTO @ BigSpring</h3>
      <img className="mt-8" src={Linesecfour} alt="" />
      <img className="mt-9" src={Clientlogos} alt="" />
    </div>
  );
}

export default SectionFour;
