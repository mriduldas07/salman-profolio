import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      className="flex justify-center lg:justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1, type: "spring", stiffness: 400 }}
    >
      <h1 className="text-4xl">
        <span className="bg-gradient-to-r from-[#FF9C1A] to-[#E80505] inline-block text-transparent bg-clip-text">
          Salman
        </span>{" "}
        Rahman
      </h1>
      <img src="/assets/ph_moon.png" className="hidden lg:block" alt="" />
    </motion.div>
  );
}
