import { IBlogs } from "../types/globalTypes";

interface IProps {
  blog: IBlogs;
}

export default function BlogCard({ blog }: IProps) {
  const { image, title, category } = blog || {};
  return (
    <div className="card max-w-[350px] bg-white shadow-xl">
      <figure className="px-2 pt-2">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      {/* <div className="card-body"></div> */}
      <div className="px-3 py-3">
        <h4 className="w-fit border-[1px] border-black rounded-[15px] px-1 py-[0.6px] ">
          {category}
        </h4>
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}
