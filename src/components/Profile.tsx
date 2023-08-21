import {
  BiLogoFacebook,
  BiLogoGmail,
  BiLogoLinkedin,
  BiLogoWhatsapp,
} from "react-icons/bi";

export default function Profile() {
  return (
    <div className="text-white mx-auto">
      <div className="max-w-[145px] max-h-[150px] lg:max-w-[200px] lg:max-h-[200px] mx-auto mt-[-23%]">
        <img src="assets/profile_picture.png" className="min-w-full" alt="" />
      </div>
      <div className="mx-auto">
        <h1 className="text-center text-[#0B0909] text-[28.42px] font-semibold mb-[4px]">
          Md.Salman Rahman
        </h1>
        <p className="text-center text-[#0B090980] mb-[6px]">
          Student of Textile Engineering
        </p>
        <div className="flex justify-center items-center gap-[8.269px]">
          <div className="bg-[#F2F7FC] py-[15.67px] px-[20.81px] rounded-[8px] cursor-pointer">
            <BiLogoFacebook size={24} style={{ color: "#1877F2" }} />
          </div>
          <div className="bg-[#F2F7FC] py-[15.67px] px-[20.81px] rounded-[8px] cursor-pointer">
            <BiLogoLinkedin size={24} style={{ color: "#1877F2" }} />
          </div>
          <div className="bg-[#F2F7FC] py-[15.67px] px-[20.81px] rounded-[8px] cursor-pointer">
            <BiLogoGmail size={24} style={{ color: "red" }} />
          </div>
          <div className="bg-[#F2F7FC] py-[15.67px] px-[20.81px] rounded-[8px] cursor-pointer">
            <BiLogoWhatsapp size={24} style={{ color: "green" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
