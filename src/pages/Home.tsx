import Header from "../components/Home/Header"
import HeaderImage from "../components/Home/HeaderImage"
import SearchInput from "../components/Home/SearchInput"
import SectDetails from "../components/Home/SectDetails"
import { homeSec } from "../constant"

const Home = () => {
  return (
    <main>
      <header className="header">
        <section className="lg:flex lg:items-center lg:justify-between lg:my-5">
          <div className="mb-5 lg:max-w-[470px] lg:text-left">
            <Header headerText={"Communication made Easy with Our platform"}/>
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
      <section className="bg-white py-10">
          {homeSec.map((e, index)=>(
            <div key={e.id}>
              <SectDetails each={e}  index={index}/>
            </div>
          ))}
      </section>
    </main>
      
   
  )
}

export default Home
