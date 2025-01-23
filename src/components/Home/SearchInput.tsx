import { arrow } from "../../../public/svgs"

const SearchInput = () => {
  return (
    <div className="flex justify-between mt-4 items-center pl-5 border-2 border-gray-400 bg-white h-14 w-[401px] max-sm:w-full rounded-[2rem]">
      <input 
      placeholder="Email"
      className=" p-2 bg-transparent"
      />
      <span className="bg-pry h-full translate-x-1 flex justify-center items-center rounded-full w-14">
        <img src={arrow} />
      </span>
    </div>
  )
}

export default SearchInput
