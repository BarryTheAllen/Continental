import "./Nav.css"
import { Link } from "react-scroll"

const Nav = ({isMenuOpen, handleMenuClick}) => {
    const items = ["home", "about", "awards", "services", "reviews", "clients", "contact"]
  return (
    <nav className={isMenuOpen ? "nav active" : "nav"}>
        <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
            {items.map((item, index) => (
            <Link 
            to={item}
            key={index}
            className="nav-link"
            onClick={handleMenuClick}
            >{item}</Link>
        ))}
        </div>
    </nav>
  )
}

export default Nav