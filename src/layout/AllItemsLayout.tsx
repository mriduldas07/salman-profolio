import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

export default function AllItemsLayout() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Navbar />
      <div className="flex justify-center mt-[35px] lg:mt-0 mx-auto my-5">
        <div className="pr-[10px]">
          <Topbar />
        </div>
      </div>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
