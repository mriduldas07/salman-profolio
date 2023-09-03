/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Loading from "../components/Loading";
import {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
} from "../redux/features/blogs/blogsSlice";
import { IBlogs } from "../types/globalTypes";

export default function BlogDetails() {
  const { id } = useParams();
  const { data: allBlogs } = useGetBlogsQuery(undefined);
  const { data, isLoading } = useGetSingleBlogQuery(id);

  const blogData: IBlogs = data?.data;

  const { title, description, _id, category, image } = blogData || {};

  const relatedBlogs = allBlogs?.data?.filter(
    (b: IBlogs) => b.category === category && b._id !== _id
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-center text-4xl font-bold py-5">{title}</h1>
      <div className="max-w-xs sm:max-w-sm lg:min-w-[700px] lg:max-w-[700px] mx-auto">
        <img src={image} className="w-full" alt="" />
      </div>
      <div className="flex justify-center items-center py-3 w-1/2 ">
        <h1 className="border-[2px] border-black w-fit px-1 rounded-md bg-[rgb(99,231,99)] text-[19px]">
          {category}
        </h1>
      </div>
      <div className="pt-1 pb-10 px-2">
        <p>{description}</p>
      </div>
      <div className="flex flex-col items-end pb-3 pr-2">
        <h1 className="text-[23px]">Md.Salman Rahman</h1>
        <p>Student of Textile Engineering</p>
        <p>Pabna Textile Engineering College,Pabna</p>
        <p>
          15<sup>th</sup> Batch
        </p>
      </div>
      <div className="pb-10 mx-auto ps-[20px] pr-[15px]">
        <h1 className="text-4xl py-4">Related Blogs</h1>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {relatedBlogs?.map((b: IBlogs) => (
              <BlogCard blog={b} key={b._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
