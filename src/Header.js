import "./Header.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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
    setToggleNav(!toggleNav);
  }

  const boxVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { ease: "easeOut", duration: 1 },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      x: -100,
    },
  };

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
        <div className="active-content">
          <motion.a
            href="#IntroComp"
            className="menuNav"
            onClick={handleToggleNav}
            variants={boxVariants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            {" "}
            Home{" "}
          </motion.a>
          <motion.a
            href="#OurStory"
            className="menuNav"
            onClick={handleToggleNav}
          >
            {" "}
            Our Story{" "}
          </motion.a>
          <motion.a
            href="#RocaList"
            className="menuNav"
            onClick={handleToggleNav}
          >
            {" "}
            Roca{" "}
          </motion.a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
