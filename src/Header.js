import { NavLink } from "react-router-dom"
import "./Header.css"

function Header(){
  return (
    <div className = "header">
      <nav>
          <NavLink to = "/" className= "navlinks"> Home </NavLink>
          <NavLink to = "/" className= "navlinks"> Our Story </NavLink>
          <NavLink to = "/" className= "navlinks"> Roca </NavLink>
          <NavLink to = "/" className= "navlinks"> Contact Us </NavLink>
      </nav>
    </div>
  )
}

export default Header