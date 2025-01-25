interface header {
  headerText: string
  className?: string
}

const Header = ({headerText, className}:header) => {
  return (
    <div>
       <h2 className={`header_text ${className}`}>{headerText}</h2>
    </div>
  )
}

export default Header
