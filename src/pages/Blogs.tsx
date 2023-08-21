export default function Blogs() {
  return (
    <div className="ps-[20px] pr-[15px] mx-auto lg:ps-[73px] lg:pr-[55px]">
      <div className="flex justify-start items-center gap-[33px] pt-[18px]">
        <h1 className="text-[40px]">Blogs</h1>
        <div className="">
          <img src="/assets/Line.png" alt="" />
        </div>
      </div>
      <div className="pt-[13px]"></div>
      <div className="pt-[35px] pb-5 lg:pb-0 max-h-[230px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mx-auto">
          <div className="flex flex-col items-center lg:block">
            <h1 className="text-[27.737px]">Work Skill</h1>
            <div className="grid lg:grid-rows-2 gap-[24px] mx-auto pt-[21px]">
              <div className="grid grid-cols-3 gap-2"></div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:block">
            <h1 className="text-[27.737px]">Soft Skill</h1>
            <div className="grid lg:grid-rows-2 gap-[24px] pt-[21px]">
              <div className="grid grid-cols-3 gap-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
