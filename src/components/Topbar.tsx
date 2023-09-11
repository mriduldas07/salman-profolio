/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { motion } from "framer-motion";
import { AiFillFileText, AiOutlineHome } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

export default function Topbar() {
  const { pathname } = useLocation();

  return (
    <div>
      <motion.div
        className="w-[350px] h-[70px] lg:w-[503px] lg:h-[100px] bg-[#F2F7FC] rounded-[20px] mb-[5rem] lg:mb-[0px]"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1, type: "spring", stiffness: 170 }}
      >
        <div className="flex justify-center lg:pt-[16px] pt-[5px] gap-[20px] lg:gap-[40px] ">
          <Link to={`/`}>
            <motion.div
              className={`bg-[#E1E8EF] w-[60px] h-[60px] lg:w-[70px]  lg:h-[70px] rounded-[20px] px-auto flex flex-col justify-center items-center cursor-pointer ${
                pathname === "/" &&
                "bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white"
              }`}
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                type: "spring",
                stiffness: 170,
              }}
            >
              <AiOutlineHome size={23} />
              <p>Home</p>
            </motion.div>
          </Link>
          <Link to={`/resume`}>
            <motion.div
              className={`bg-[#E1E8EF] w-[60px] h-[60px] lg:w-[70px]  lg:h-[70px] rounded-[20px] px-auto flex flex-col justify-center items-center cursor-pointer ${
                pathname === "/resume" &&
                "bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white"
              }`}
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 1.1,
                type: "spring",
                stiffness: 170,
              }}
            >
              <AiFillFileText size={23} />
              <p>Resume</p>
            </motion.div>
          </Link>
          <Link to={`/blogs`}>
            <motion.div
              className={`bg-[#E1E8EF] w-[60px] h-[60px] lg:w-[70px]  lg:h-[70px] rounded-[20px] px-auto flex flex-col justify-center items-center cursor-pointer ${
                pathname === "/blogs" &&
                "bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white"
              }`}
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 1.2,
                type: "spring",
                stiffness: 170,
              }}
            >
              <GrArticle size={23} />
              <p>Blogs</p>
            </motion.div>
          </Link>
          <motion.div
            className="bg-[#E1E8EF] w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[20px] px-auto flex flex-col justify-center items-center cursor-pointer"
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              delay: 1.3,
              type: "spring",
              stiffness: 170,
            }}
          >
            <FaRetweet size={23} />
            <p>Posts</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
