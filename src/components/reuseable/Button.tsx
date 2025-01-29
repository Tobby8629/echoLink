import { Link } from 'react-router-dom'

interface Btn {
  link: string
  linkName: string
}

const Button = ({link, linkName}: Btn) => {
  return (
    <button className="menu_btn text-center w-1/2 mx-auto rounded-lg">
    <Link 
    className="!text-black menu_link"
    to={link}
    >
      {linkName}
    </Link>
  </button>
  )
}

export default Button
