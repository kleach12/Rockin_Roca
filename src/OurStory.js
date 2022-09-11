import "./OurStory.css";
import { motion } from "framer-motion";

function OurStory() {
  const boxVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition:{ ease: "easeOut", duration: 1 }
    },
    hidden: {
      opacity: 0,
      scale: 0,
      x: -100,
    },
  };

  return (
    <div className="ourStory">
      <motion.div
        variants={boxVariants}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
      >
        <motion.h2
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
        >
          {" "}
          Our Story{" "}
        </motion.h2>
        <motion.div className="grid">
          <motion.div
            className="grid-2"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZbs8PyXBstSRKAMgwYcgEYEMs0WpXDG0SQ&usqp=CAU"
              alt="Roca"
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
            />
          </motion.div>
          <motion.div
            className="grid-1"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
          >
            {" "}
            We started making Roca in December of ____ and it has became our
            anuall tradition to make almond rcoa in every chirstmas season
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default OurStory;
