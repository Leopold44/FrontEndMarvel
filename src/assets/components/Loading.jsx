import logo from "/logo.png";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <main className="loading">
      <motion.div
        className="transition"
        animate={{
          scale: [1, 2, 2, 2, 1],
          rotate: [0, 180, 0, 180, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <img src={logo} alt="" />
      </motion.div>
    </main>
  );
};
export default Loading;
