import { Link, NavLink } from "react-router-dom"
import { logo, } from "../../../public/svgs"
import { menuLink } from "../../constant"
import { useEffect, useState } from "react"
import Cancel from "../../assets/Cancel"
import Menu from "../../assets/Menu"
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // Change background when scrolled more than 40px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed z-[999] w-full right-0 left-0 ${isScrolled ? "bg-misc" : "bg-transparent"}`}>
     <nav className={`max-w-7xl mx-auto flex_row_btw max-sm:p-4 md:p-[2rem]  `}>
      <img src={logo} alt="echolink" />
      <div className={`${visible ? " translate-x-0 block" : "-translate-x-[800px] hidden" } menu`}>
        <div className=" flex flex-col h-full justify-between md:flex-row md:items-center">
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
      </div>
      <div id="menu" className=" z-[99] md:hidden opacity-0" onClick={()=> setVisible(!visible)}>
        {visible ? <Cancel fill={"rgba(90, 79, 243, 1)"} width={"40px"} height={"40px"} /> : <Menu fill={"rgba(90, 79, 243, 1)"} width={"50px"} height={"30px"}/>}
      </div>
     </nav>
    </div>
   
  )
}

export default Navbar
