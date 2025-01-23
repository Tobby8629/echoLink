import { activity, calender, header_note } from "../../../public/svgs"
import {phone} from "../../../public/images"

const HeaderImage = () => {
  return (
    <div className=" relative w-[370px] lg:w-[600px] mx-auto">
      <img src={phone} className=" w-full"/>
      <div className="bg-white p-2 rounded-md w-28 absolute top-[40%] right-[17%]">
        <img src={activity} className=" "/>
      </div>
      <div className="icon_wrapper absolute top-[45%] left-[29%]">
        <img src={calender} />
      </div>
      
     
      {/* <div className="icon_wrapper absolute">
        <img src={quick_chat} className=" "/>
      </div> */}
      <div className="icon_wrapper absolute top-[20%] right-[28%]">
        <span className="bg-red-500 text-white h-4 w-4 absolute -top-[10%] -right-[10%] block rounded-full text-xs">3</span>
        <img src={header_note} className=" "/>
      </div>
      
    </div>
  )
}

export default HeaderImage
