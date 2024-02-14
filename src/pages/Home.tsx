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
        I'm a bachelor's student at Pabna Textile Engineering College studying
        textile engineering (specialised fabric Engineering). I want to gain
        knowledge of the understanding used to create different fibres,woven and
        non woben fibre. I also want to improve my soft skills and increasing my
        networking. Furthermore, I have only a little experience and
        understanding in this field of study. I like to work with textile
        materials for production creation and learn something new. l am
        motivated to constantly develop my skills and grow professionally in
        textile industry. I have faith in my ability to come up with out- of-
        the box solutions for any sort of problem statement in co-operation with
        the team. As a textile engineering student I feel responsible for
        contributing to a more sustainable textile industry.
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
