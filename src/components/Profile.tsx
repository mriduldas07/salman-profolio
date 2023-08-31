import { motion } from "framer-motion";
import {
  BiLogoFacebook,
  BiLogoGmail,
  BiLogoLinkedin,
  BiLogoWhatsapp,
} from "react-icons/bi";

export default function Profile() {
  return (
    <div className="text-white mx-auto">
      <motion.div
        className="max-w-[145px] max-h-[150px] lg:max-w-[200px] lg:max-h-[200px] mx-auto mt-[-23%]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1, type: "spring", stiffness: 170 }}
      >
        <img src="assets/profile_picture.png" className="min-w-full" alt="" />
      </motion.div>
      <div className="mx-auto">
        <h1 className="text-center text-[#0B0909] text-[28.42px] font-semibold mb-[4px]">
          Md.Salman Rahman
        </h1>
        <p className="text-center text-[#0B090980] mb-[6px]">
          Student of Textile Engineering
        </p>
        <div className="flex justify-center items-center gap-[8.269px]">
          <motion.div
            className="bg-[#F2F7FC] py-[15.67px] px-[20.81px] rounded-[8px] cursor-pointer"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.6,
              type: "spring",
              stiffness: 170,
            }}
          >
            <BiLogoFacebook size={24} style={{ color: "#1877F2" }} />
          </motion.div>
          <motion.div
            className="bg-[#F2F7FC] py-[15.67px] px-[20.81px] rounded-[8px] cursor-pointer"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.4,
              type: "spring",
              stiffness: 170,
            }}
          >
            <BiLogoLinkedin size={24} style={{ color: "#1877F2" }} />
          </motion.div>
          <motion.div
            className="bg-[#F2F7FC] py-[15.67px] px-[20.81px] rounded-[8px] cursor-pointer"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.2,
              type: "spring",
              stiffness: 170,
            }}
          >
            <a href="mailto:mriduldas0325@gmail.com">
              <BiLogoGmail size={24} style={{ color: "red" }} />
            </a>
          </motion.div>
          <motion.div
            className="bg-[#F2F7FC] py-[15.67px] px-[20.81px] rounded-[8px] cursor-pointer"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              type: "spring",
              stiffness: 170,
            }}
          >
            <a href="https://wa.me/8801724838006" target="_blank">
              <BiLogoWhatsapp size={24} style={{ color: "green" }} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
