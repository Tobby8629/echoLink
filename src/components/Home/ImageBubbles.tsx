import { edge } from "../../../public/svgs"

interface imageBubbles {
 image: string
 bubbleStyle?: string
 imageStyle?: string
 wrapperStyle?: string
}


const ImageBubbles = ({image, bubbleStyle, imageStyle, wrapperStyle}:imageBubbles ) => {
  return (
    <div className={` mb-10 md:w-[45%] relative ${wrapperStyle}`}>
       <div className={`w-[90%] h-[80%] mt-14 z-[99] relative ${imageStyle}`}>
         <img src={image}  className="w-full"/>
       </div>
      
       <img src={edge} className={bubbleStyle} />
    </div>
  )
}

export default ImageBubbles
