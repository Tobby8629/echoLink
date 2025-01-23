import HeaderImage from "../components/Home/HeaderImage"
import SearchInput from "../components/Home/SearchInput"

const Home = () => {
  return (
   
      <header className=" min-h-screen overflow-hidden bg-homeHeader bg-cover bg-center px-8 pt-28 max-sm:px-4 ">
        <div className="mb-5">
          <h2 className="header_text ">Communication made Easy with Our platform</h2>
          <p className="text my-3">
            Stay connected with your team and clients, 
            whether you're working remotely or on the go. 
            Our platform makes communication simple, reliable, 
            and effective. Sign Up to get early access.
          </p>
          <SearchInput />
        </div>
        <HeaderImage />
      </header>
   
  )
}

export default Home
