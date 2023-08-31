/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useGetBlogsQuery } from "../redux/features/blogs/blogsSlice";
import {
  categoryAdd,
  categoryRemove,
} from "../redux/features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IBlogs } from "../types/globalTypes";
import Loading from "./Loading";

export default function Category() {
  const { data, isLoading } = useGetBlogsQuery(undefined);
  const { category } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const categoryArr: string[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  data?.data?.map((d: IBlogs) => {
    categoryArr?.push(d.category);
  });

  const setArr = new Set(categoryArr);
  const arr = [...setArr];

  const handleSubmitCategory = (c: string) => {
    if (category === c) {
      dispatch(categoryRemove());
    } else {
      dispatch(categoryAdd(c));
    }
  };

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && arr.length > 0) {
    content = arr.map((c: string, i) => (
      <li
        key={i}
        className={`border-[1px] px-2 border-black rounded-md cursor-pointer ${
          category === c && "bg-green-400"
        }`}
        onClick={() => handleSubmitCategory(c)}
      >
        <h4>{c}</h4>
      </li>
    ));
  }
  return (
    <ul className="flex justify-end items-center gap-[26px] py-3">{content}</ul>
  );
}
