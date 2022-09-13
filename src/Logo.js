import "./Logo.css";
import "./Images/rocfin1.png";
import { motion } from "framer-motion";

function Logo() {
  return (
    <div className="big-screen">
      <motion.img
        id="logo"
        src={require("./Images/rocfin1.png")}
        alt="Roc-N-Roca Logo"
        initial={{
          y: -300,
          opacity: 0,
        }}
        animate={{
          y:0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          mass: 5,
          damping: 5,
          scale:[1,2,1,2]
        }}
      />
    </div>
  );
}

export default Logo;
