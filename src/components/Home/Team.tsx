import { teams } from "../../constant"
import Button from "../reuseable/Button"

const Team = () => {
  return (
    <div>
      <h2 className='header_text_regular'>Meet The Team</h2>
      <p className='text my-7 md:w-[55%] xl:w-[42%] mx-auto'>Discover the creators behind our success, where teamwork begins with our dedicated workers and trusted partners.</p>
      <div className="md:flex md:justify-between">
        {teams.map((e: team)=>(
            <div key={e.name} className="h-[339px] flex flex-col max-sm:w-[75%] max-sm:h-[320px] rounded-lg mx-auto my-10 max-lg:w-[220px] max-lg:h-[280px] bg-transparent shadow-lg">
            <img src={e.image} alt={e.name} className="h-[80%] rounded-t-lg" />
            <div className="font-poppins text-left p-2 px-4 team-bg">
                <p className=" font-normal capitalize ">{e.name}</p>
                <p className="text-sec text-sm">{e.role}</p>
            </div>
            </div>
        ))}
      </div>
      <div className="md:w-[42%] lg:w-[35%] md:mx-auto">
        <Button link="/" linkName="Go to Team Page"/>
      </div>
      
    </div>
  )
}

export default Team
