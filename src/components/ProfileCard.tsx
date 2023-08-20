import { GiSmartphone } from "react-icons/gi";
import { LuMailOpen } from "react-icons/lu";
import { VscLocation } from "react-icons/vsc";

export default function ProfileCard() {
  return (
    <div className=" bg-[#F2F5F9] rounded-[20px]">
      <div className="ms-[54px] pt-[38px]">
        <div className="flex justify-start items-center gap-[22px]">
          <GiSmartphone size={25} style={{ color: "#ec1c09" }} />
          <div className="flex flex-col">
            <span>Phone</span>
            <span>+254723909353</span>
          </div>
        </div>
        <div
          className="max-w-[256px] my-[15px]"
          style={{ border: "1px solid #E3E3E3" }}
        ></div>
        <div className="flex justify-start items-center gap-[26px]">
          <LuMailOpen size={23} style={{ color: "#ec1c09" }} />
          <div className="flex flex-col">
            <span>Email</span>
            <span>mriduldas0325@gmail.com</span>
          </div>
        </div>
        <div
          className="max-w-[256px] my-[15px]"
          style={{ border: "1px solid #E3E3E3" }}
        ></div>
        <div className="flex justify-start items-center gap-[26px]">
          <VscLocation size={26} style={{ color: "#ec1c09" }} />
          <div className="flex flex-col">
            <span>Location</span>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
        <div
          className="max-w-[256px] my-[15px]"
          style={{ border: "1px solid #E3E3E3" }}
        ></div>
        <div className="flex justify-start items-center ms-6 py-[20px] cursor-pointer">
          <img src="/assets/Download.png" alt="" />
        </div>
      </div>
    </div>
  );
}
