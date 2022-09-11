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
        initial = {{opacity: 0}}
        animate={{ 
          opacity: 1,
          scale: [2, 1],
        }}
        // transition={{
        //   delay: 0.5,
        //   x: { duration: 1 },
        //   ease: "circIn" 
        // }}
      />
    </div>
  );
}

export default Logo;
