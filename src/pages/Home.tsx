import HeaderImage from "../components/Home/HeaderImage"
import SearchInput from "../components/Home/SearchInput"

const Home = () => {
  return (
   
      <header className="header">
        <section className="lg:flex lg:items-center lg:justify-between lg:my-5">
          <div className="mb-5 lg:max-w-[470px] lg:text-left">
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
        </section>
      </header>
   
  )
}

export default Home
