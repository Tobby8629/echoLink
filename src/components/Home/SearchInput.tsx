import { arrow } from "../../../public/svgs"

const SearchInput = () => {
  return (
    <div className="flex justify-between mt-4 items-center pl-5 border-2 border-gray-400 bg-white h-14 max-sm:h-11 w-[401px] max-sm:w-[320px] max-lg:mx-auto rounded-[2rem]">
      <input 
      placeholder="Email"
      className=" p-2 bg-transparent"
      />
      <span className="bg-pry h-full translate-x-1 flex justify-center items-center rounded-full max-sm:w-11 max-sm:h-11 w-14">
        <img src={arrow} />
      </span>
    </div>
  )
}

export default SearchInput
