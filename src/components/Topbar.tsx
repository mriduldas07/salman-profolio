import { AiFillFileText, AiOutlineHome } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";

export default function Topbar() {
  return (
    <div>
      <div className="w-[350px] h-[70px] lg:w-[503px] lg:h-[100px] bg-[#F2F7FC] rounded-[20px] mb-[5rem] lg:mb-[0px]">
        <div className="flex justify-center lg:pt-[16px] pt-[5px] gap-[20px] lg:gap-[40px] ">
          <div className="bg-[#E1E8EF] w-[60px] h-[60px] lg:w-[70px]  lg:h-[70px] rounded-[20px] px-auto flex flex-col justify-center items-center cursor-pointer">
            <AiOutlineHome size={23} />
            <p>Home</p>
          </div>
          <div className="bg-[#E1E8EF] w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[20px] px-auto flex flex-col justify-center items-center cursor-pointer">
            <AiFillFileText size={23} />
            <p>Resume</p>
          </div>
          <div className="bg-[#E1E8EF] w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[20px] px-auto flex flex-col justify-center items-center cursor-pointer">
            <GrArticle size={23} />
            <p>Blogs</p>
          </div>
          <div className="bg-[#E1E8EF] w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[20px] px-auto flex flex-col justify-center items-center cursor-pointer">
            <FaRetweet size={23} />
            <p>Posts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
