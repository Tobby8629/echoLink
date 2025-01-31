interface search {
  className?: string
  inputStyle?: string
}

import { arrow } from "../../../public/svgs"


const SearchInput = ({className, inputStyle}: search) => {
  return (
    <div className={`flex justify-between mt-4 items-center pl-5 border-2 border-gray-400 bg-white h-14 max-sm:h-11 w-[401px] max-sm:w-full max-lg:mx-auto rounded-[2rem] ${className}`}>
      <input 
      placeholder="Email"
      className="searchInput"
      />
      <span className={`bg-pry h-full translate-x-1 flex justify-center items-center rounded-full max-sm:w-11 max-sm:h-11 w-14 ${inputStyle}`}>
        <img src={arrow} />
      </span>
    </div>
  )
}

export default SearchInput
