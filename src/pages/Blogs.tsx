import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
  return (
    <div className="ps-[20px] pr-[15px] mx-auto lg:ps-[73px] lg:pr-[55px]">
      <div className="flex justify-start items-center gap-[33px] pt-[18px]">
        <h1 className="text-[40px]">Blogs</h1>
        <div className="">
          <img src="/assets/Line.png" alt="" />
        </div>
      </div>
      <div className="pt-[5px]">
        <ul className="flex justify-end items-center gap-[16px]">
          <li>All</li>
          <li>All</li>
          <li>All</li>
          <li>All</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center lg:justify-end">
        {" "}
        <Link to={`/all`}>
          <div className="w-[250px] my-[10px] rounded-[20px] bg-gradient-to-r from-[#FF9C1A] to-[#E80505]">
            <button className="w-full py-2 text-white font-semibold">
              All Blogs
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
