import BlogCard from "../components/BlogCard";

export default function AllBlogs() {
  return (
    <div className="ps-[20px] pb-6 pr-[15px] mx-auto lg:ps-[73px] lg:pr-[55px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[20px] mx-auto">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
