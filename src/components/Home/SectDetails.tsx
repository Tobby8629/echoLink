import { Link } from "react-router-dom";
import Header from "./Header";
import ImageBubbles from "./ImageBubbles";
import { calenderTwo } from "../../../public/svgs";


interface sectDetails {
   each: HomeSection
   index: number
  }

const SectDetails = ({each, index}: sectDetails) => {
  const odd = () => index%2 !== 0
  return (
    <div className={`text-left md:flex ${odd() ? "md:flex-row-reverse" : "flex-row"} md:items-center md:justify-between mb-10`}>
      {each.image === calenderTwo  ? 
        <img src={each.image} alt="image" className="mr-10 mb-10 md:w-[40%]" /> :
        <ImageBubbles image={each.image} 
        bubbleStyle={ odd() ? "top_absolute" : "bottom_absolute"}
        imageStyle= {odd() ? "": "ml-auto" }
        wrapperStyle={odd()? "overflow-hidden" : ""}
         />
      }


      <div className="md:w-[48%] lg:w-[468px]">
        <Header headerText={each.header} className=" md:text-[2.5rem] md:leading-[3.2rem]"/>
        <p className="text my-5">
        {each.text}
        </p>
        <Link to={"/"} className="text-pry border-b-2 font-bold py-1 border-pry font-mulish uppercase"> 
          {each.btnText}
        </Link>
      </div>
    </div>
  )
}

export default SectDetails
