import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ProfileCard from "../components/ProfileCard";
import Topbar from "../components/Topbar";

export default function Layout() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Navbar />
      <div className="flex justify-center lg:justify-end lg:mt-[52px] mx-auto my-5">
        <div className="pr-[10px]">
          <Topbar />
        </div>
      </div>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-[20px] mt-[10px]">
        <div className="lg:col-span-4 bg-[#FFFFFF] rounded-[20px] pb-3 mx-auto min-w-[370px] lg:min-w-[400px]">
          <Profile />
          <div className="mx-auto">
            <div className="w-[350px] h-[350px] mx-auto mt-[22.34px] mb-3">
              <ProfileCard />
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 bg-[#FFFFFF] rounded-[20px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
