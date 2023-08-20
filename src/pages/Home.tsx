export default function Home() {
  return (
    <div className="ps-[20px] pr-[15px] mx-auto lg:ps-[73px] lg:pr-[55px]">
      <div className="flex justify-start items-center gap-[33px] pt-[18px]">
        <h1 className="text-[40px]">ABOUT ME</h1>
        <div className="">
          <img src="/assets/Line.png" alt="" />
        </div>
      </div>
      <p className="pt-[15px]">
        Hello there! I'm thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>
      <h1 className="text-[32px] py-[26px]">What I do!</h1>
      <div className="grid lg:grid-cols-2 gap-[20px] pb-[30px]">
        <div className="w-[333px] h-[169px] bg-[#FFEBD1] rounded-[20px]"></div>
        <div className="w-[333px] h-[169px] bg-[#F2F7FC] rounded-[20px]"></div>
        <div className="w-[333px] h-[169px] bg-[#F2F7FC] rounded-[20px]"></div>
        <div className="w-[333px] h-[169px] bg-[#FFEBD1] rounded-[20px]"></div>
      </div>
    </div>
  );
}
