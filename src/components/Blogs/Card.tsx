import { card, smallCard } from "../../../public/images"
import { blogEdge } from "../../../public/svgs"

interface card {
  index: number
}

const Card = ({index}: card) => {
  return (
    <div className="card">
      <img src={card} alt="card image" className="h-[204px] rounded-t-lg w-full max-sm:mx-auto object-cover"/>
      <div className="p-3">
        <h3 className="font-poppins text-xl my-3">10 secret tips to managing a remote team</h3>
        <p className="text !text-sm">
        One morning, when Gregor Samsa woke from troubled dreams, 
        he found himself transformed in his bed into a horrible vermin...
        </p>
        <div className=" flex items-center gap-3">
          <img src={smallCard} alt="small card" 
          className="w-[40px] h-[40px] rounded-full my-5" />
          <p className="text !text-sm flex items-center gap-3">
            Jenny Wilson
            <span className="h-[12px] w-[2px] bg-sec block"></span>
            <span>9/4/12</span>
          </p>
        </div>
      </div>
      
      {index === 0 ?
       <div className="absolute -left-[88px] !-top-[71px]  -z-50">
       <img src={blogEdge} alt="edge" />
     </div> : null  
    }
    </div>
  )
}

export default Card
