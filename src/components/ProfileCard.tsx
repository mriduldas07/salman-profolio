import { motion } from "framer-motion";
import { GiSmartphone } from "react-icons/gi";
import { LuMailOpen } from "react-icons/lu";
import { VscLocation } from "react-icons/vsc";

export default function ProfileCard() {
  return (
    <div className=" bg-[#F2F5F9] rounded-[20px]">
      <div className="ms-[54px] pt-[38px]">
        <motion.div
          className="flex justify-start items-center gap-[22px]"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 1.2,
            type: "spring",
            stiffness: 170,
          }}
        >
          <GiSmartphone size={25} style={{ color: "#ec1c09" }} />
          <div className="flex flex-col">
            <span>Phone</span>
            <span>+8801724838006</span>
          </div>
        </motion.div>
        <div
          className="max-w-[256px] my-[15px]"
          style={{ border: "1px solid #E3E3E3" }}
        ></div>
        <motion.div
          className="flex justify-start items-center gap-[26px]"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 1.3,
            type: "spring",
            stiffness: 170,
          }}
        >
          <LuMailOpen size={23} style={{ color: "#ec1c09" }} />
          <div className="flex flex-col">
            <span>Email</span>
            <span>salmanptec@gmail.com</span>
          </div>
        </motion.div>
        <div
          className="max-w-[256px] my-[15px]"
          style={{ border: "1px solid #E3E3E3" }}
        ></div>
        <motion.div
          className="flex justify-start items-center gap-[26px]"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 1.3,
            type: "spring",
            stiffness: 170,
          }}
        >
          <VscLocation size={26} style={{ color: "#ec1c09" }} />
          <div className="flex flex-col">
            <span>Location</span>
            <span>Pabna, Bangladesh</span>
          </div>
        </motion.div>
        <div
          className="max-w-[256px] my-[15px]"
          style={{ border: "1px solid #E3E3E3" }}
        ></div>
        <motion.div
          className="flex justify-start items-center ms-6 py-[20px] cursor-pointer"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 1.4,
            type: "spring",
            stiffness: 170,
          }}
        >
          <img src="/assets/Download.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
}
