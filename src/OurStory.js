import "./OurStory.css";
import "./Images/rocapic.png";
import { motion } from "framer-motion";

function OurStory() {
  const boxVariants = {
    visible: {
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 2,
      },
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      x: -300,
    },
  };

  return (
    <div className="ourStory">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.h2
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
            viewport={{ once: true }}
          >
            <motion.img
              src={require("./Images/rocapic.png")}
              alt="Roca"
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </motion.div>
          <motion.div
            className="grid-1"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {" "}
            Roc-N-Roca started in 2016 when our father gave us a family recipe and
            told us not to ever share it, of course, unless someone gave us
            thousands of dollars (Dad had a great sense of humor). From that day
            forward, we began making what has become known as the most delicious
            almond roca, with the perfect mixture of crunchy and buttery
            sweetness, and a texture like no other. Making Roc-N-Roca for family
            and friends for the holidays was just not enough. We decided to open
            a business and sell it year-round. So here we are…ready to share our
            Roc-N-Roca!
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default OurStory;
