import { logo } from '../../../public/svgs'
import { otherLink, socials } from '../../constant'
import SearchInput from '../Home/SearchInput'

const Footer = () => {
  return (
    <div className='bg-[#EFD1F3] py-10'>
      <section className='max-sm:!m-0' >
        <div className='max-sm:w-[85%]'>
          <img src={logo} alt='logo' />
          <p className='text max-sm:!text-left max-sm:text-sm my-3'>
            why we are different, Sign Up now to get early access
          </p>
          <div className='flex items-center gap-3'>
            {socials.map((e)=>(
              <img src={e} alt='img' key={e}/>
            ))}
          </div>
        </div>
        <div className='my-7 font-mulish capitalize'>
          <h5 className='text-lg font-semibold text-left text-gray-700'>subscribe to Our Newsletter</h5>
          <SearchInput />
          <div className='flex my-3 justify-between gap-5'>
            {otherLink.map((e)=>(
              <div key={e.header} className='text-left' >
                <h3 className='mb-2'>{e.header}</h3>
                <ul>
                  {e.links.map((each)=>(
                    <li className='text max-sm:!text-xs mb-2 text-left' key={each}>{each}</li>
                  ))}
                </ul>
              </div>
             
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
