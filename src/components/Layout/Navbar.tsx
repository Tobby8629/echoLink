import { Link, NavLink } from "react-router-dom"
import { logo, } from "../../assets/svgs"
import { menuLink } from "../../constant"
import { useState } from "react"
import Cancel from "../../assets/svgs/cancel"
import Menu from "../../assets/svgs/Menu"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  
  useGSAP(()=>{
    gsap.killTweensOf("#menu");
    gsap.fromTo(
      "#menu",
      { opacity: 0 }, 
      { 
        opacity: 1,     
        duration: 1,    
        delay: 0.2,
      }
    );
  },[visible])

  return (
    <nav className="fixed w-full flex_row_btw max-sm:p-4 p-8 ">
      <img src={logo} alt="echolink" />
      <div className={`${visible ? " translate-x-0 block" : "-translate-x-[800px] hidden" } menu`}>
        <ul>
          {menuLink.map((link)=>(
            <NavLink
            className={({ isActive }) =>
              `menu_link block md:inline mb-3 capitalize ${isActive ? '!text-pry font-bold' : ''}`
            }
            
            key={link.name} 
            to={link.link}
            onClick={() => setVisible(!visible)}
            
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
        <button className="menu_btn text-center w-1/2 mx-auto rounded-lg">
          <Link 
          className="!text-black menu_link"
          to={'/'}
          >
            Get access
          </Link>
        </button>
      </div>
      <div id="menu" className=" z-[99] md:hidden opacity-0" onClick={()=> setVisible(!visible)}>
        {visible ? <Cancel fill={"rgba(90, 79, 243, 1)"} width={"40px"} height={"40px"} /> : <Menu fill={"rgba(90, 79, 243, 1)"} width={"50px"} height={"30px"}/>}
      </div>
    </nav>
  )
}

export default Navbar
