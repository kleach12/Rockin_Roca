import "./Header.css"

function Header(){
  return (
    <div className = "header">
      <nav>
        <a href = '#Contact' className= "navlinks"> Contact Us </a>
        <a href = '#RocaList' className= "navlinks"> Roca </a>
        <a href = '#OurStory' className= "navlinks"> Our Story </a>
        <a href = '#intro' className= "navlinks"> Home </a>
      </nav>
    </div>
  )
}

export default Header