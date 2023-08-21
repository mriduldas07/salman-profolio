/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import BlogCard from "../components/BlogCard";
import Category from "../components/Category";
import Loading from "../components/Loading";
import { useGetBlogsQuery } from "../redux/features/blogs/blogsSlice";
import { IBlogs } from "../types/globalTypes";

export default function AllBlogs() {
  const { data, isLoading } = useGetBlogsQuery(undefined);

  const blogsData = data?.data;

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && blogsData?.length > 0) {
    content = blogsData.map((b: IBlogs) => <BlogCard blog={b} key={b._id} />);
  }

  return (
    <div className="ps-[20px] pb-6 pr-[15px] mx-auto lg:ps-[73px] lg:pr-[55px]">
      <Category />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[20px] mx-auto">
        {content}
      </div>
    </div>
  );
}
