import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      className="flex justify-center lg:justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1, type: "spring", stiffness: 400 }}
    >
      <img src="/assets/logo.png" alt="" />
      <img src="/assets/ph_moon.png" className="hidden lg:block" alt="" />
    </motion.div>
  );
}
