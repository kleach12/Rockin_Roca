import "./Header.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [toggleNav, setToggleNav] = useState(false);
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);

  const checkFunc = () => {
    // console.log(checkWidth)
    setCheckWidth(window.innerWidth);
  };

  // this useEffect is used to check th width of the page and resize the curtain menu depending on the size.
  useEffect(() => {
    window.addEventListener("resize", checkFunc);
    return () => {
      window.removeEventListener("resize", checkFunc);
    };
  }, []);

  // toggles the curtain menu to show and hide
  function handleToggleNav() {
    console.log(toggleNav);
    setToggleNav(!toggleNav);
  }

  return (
    <div>
      {checkWidth < 2500 && (
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleToggleNav}
          className="floating-btn"
        />
      )}
      {/* nav is toggled when the button above is clicked */}
      <nav className={toggleNav ? "active" : ""}>
        {checkWidth < 2500 && (
          <FontAwesomeIcon
            icon={faX}
            onClick={handleToggleNav}
            className="close-curtain"
          />
        )}
        {/* navlinks toggle open and closed when click so user does not hae tto do it manually*/}
        <a href="#IntroComp" className="navlinks" onClick={handleToggleNav}>
          {" "}
          Home{" "}
        </a>
        <a href="#OurStory" className="navlinks" onClick={handleToggleNav}>
          {" "}
          Our Story{" "}
        </a>
        <a href="#RocaList" className="navlinks" onClick={handleToggleNav}>
          {" "}
          Roca{" "}
        </a>
      </nav>
    </div>
  );
}

export default Header;
