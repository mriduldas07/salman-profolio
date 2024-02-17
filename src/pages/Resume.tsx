export default function Resume() {
  const workSkills = [];
  const softSkills = [
    "Communication skill",
    "Networking ",
    "Teamwork",
    "Professionalism",
    "Creativity",
    "Critical Thinking ",
    "Adaptability",
    "flexibility",
    "Personality development",
    "Grooming",
    "Written skill",
    "Public speaking",
  ];
  return (
    <div className="ps-[20px] pr-[15px] pb-10 mx-auto lg:ps-[73px] lg:pr-[55px]">
      <div className="flex justify-start items-center gap-[33px] pt-[18px]">
        <h1 className="text-[40px]">Resume</h1>
        <div className="">
          <img src="/assets/Line.png" alt="" />
        </div>
      </div>
      <div className="pt-[13px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mx-auto">
          <div className="flex flex-col items-center lg:block">
            <div className="flex justify-start">
              <img src="/assets/edu.svg" alt="" />
              <h1 className="text-[27.737px]">Education</h1>
            </div>
            <div className="grid lg:grid-rows-2 gap-[24px] mx-auto pt-[21px]">
              <div className="w-[250px] h-[115px] bg-[#FFE3BF] rounded-[9px]"></div>
              <div className="w-[250px] h-[115px] bg-[#FFE3BF] rounded-[9px]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:block">
            <div className="flex justify-start items-center">
              <img src="/assets/edu.svg" alt="" />
              <h1 className="text-[27.737px]">Experience</h1>
            </div>
            <div className="grid lg:grid-rows-2 gap-[24px] pt-[21px]">
              <div className="w-[250px] h-[115px] bg-[#FFE3BF] rounded-[9px]"></div>
              <div className="w-[250px] h-[115px] bg-[#FFE3BF] rounded-[9px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[35px] pb-5 lg:pb-0 min-h-[250px] lg:max-h-[230px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mx-auto">
          <div className="flex flex-col items-center lg:block">
            <h1 className="text-[27.737px]">Work Skill</h1>
            <div className="grid lg:grid-rows-2 gap-[24px] mx-auto pt-[21px]">
              <div className="grid grid-cols-3 gap-2">
                {workSkills.map((w, i) => (
                  <div
                    className="text-[12px] bg-[#E1E8EF] w-fit px-2.5 py-1 rounded-[8px]"
                    key={i}
                  >
                    {w}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:block">
            <h1 className="text-[27.737px]">Soft Skill</h1>
            <div className="grid lg:grid-rows-2 gap-[24px] pt-[21px]">
              <div className="grid grid-cols-3 gap-2">
                {softSkills.map((w, i) => (
                  <div
                    className="text-[12px] bg-[#E1E8EF] w-fit px-2.5 py-1 rounded-[8px]"
                    key={i}
                  >
                    {w}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
