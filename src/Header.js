import "./Header.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header(){
  const bars = <FontAwesomeIcon icon={faBars}/> ;
  return (
    <div className = "header">
      <DropdownButton id="dropdown-basic-button" title = {bars}>
        {/* <a className= "navlinks"> Contact Us </a> */}
        <Dropdown.Item href = '#RocaList' className= "navlinks"> Roca </Dropdown.Item>
        <Dropdown.Item href = '#OurStory' className= "navlinks"> Our Story </Dropdown.Item>
        <Dropdown.Item href = '#intro' className= "navlinks"> Home </Dropdown.Item>
      </DropdownButton>

    </div>
  )
}

export default Header