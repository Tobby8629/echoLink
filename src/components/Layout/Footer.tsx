import { logo } from '../../../public/svgs'
import { otherLink, socials } from '../../constant'
import SearchInput from '../Home/SearchInput'

const Footer = () => {
  return (
    <div className='bg-[#EFD1F3] py-10'>
      <section className='max-sm:!m-0 md:flex justify-between lg:w-[85%]' >
        <div className='max-sm:w-[85%] w-[268px]'>
          <img src={logo} alt='logo' />
          <p className='text !text-left max-sm:text-sm !text-base my-3'>
            why we are different, Sign Up now to get early access
          </p>
          <div className='flex items-center gap-3 md:mt-5'>
            {socials.map((e)=>(
              <img src={e} alt='img' key={e}/>
            ))}
          </div>
        </div>
        <div className='max-sm:mt-20 font-mulish capitalize lg:w-[calc(80%-268px)] xl:w-[calc(70%-268px)]'>
          <h5 className='text-lg font-semibold text-left text-gray-700'>subscribe to Our Newsletter</h5>
          <SearchInput className='h-12 md:w-[300px]  max-sm:!w-[85%] !mx-0 lg:w-[350px]' inputStyle='w-12'  />
          <div className='flex my-5 justify-between max-sm:gap-5 gap-5'>
            {otherLink.map((e)=>(
              <div key={e.header} className='text-left' >
                <h3 className='mb-2'>{e.header}</h3>
                <ul>
                  {e.links.map((each)=>(
                    <li className='text max-sm:!text-xs mb-2 !text-sm text-left' key={each}>{each}</li>
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
