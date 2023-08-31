/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Category from "../components/Category";
import Loading from "../components/Loading";
import { useGetBlogsQuery } from "../redux/features/blogs/blogsSlice";
import { useAppSelector } from "../redux/hooks";
import { IBlogs } from "../types/globalTypes";

export default function Blogs() {
  const { data, isLoading } = useGetBlogsQuery(undefined);
  const { category } = useAppSelector((state) => state.filter);

  const blogsData = data?.data;

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  const filterByCategory = (f: IBlogs) => {
    if (category) {
      return f.category === category;
    }
    return f;
  };

  if (!isLoading && blogsData?.length > 0) {
    content = blogsData
      .filter(filterByCategory)
      ?.slice(0, 4)
      .map((b: IBlogs) => <BlogCard blog={b} key={b._id} />);
  }
  return (
    <div className="ps-[20px] pr-[15px] mx-auto lg:ps-[73px] lg:pr-[55px]">
      <div className="flex justify-start items-center gap-[33px] pt-[18px]">
        <h1 className="text-[40px]">Blogs</h1>
        <div className="">
          <img src="/assets/Line.png" alt="" />
        </div>
      </div>
      <div className="pt-[5px]">
        <Category />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
        {content}
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
