import React from "react";
import { Link } from "react-router-dom";
import { CgHome } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { VscLayoutSidebarRightOff } from "react-icons/vsc";
import { IoPeopleOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { PiDotsThreeCircle } from "react-icons/pi";
import pic from "../assets/mypic.jpg";
import { PiDotsThree } from "react-icons/pi";
import x from "../assets/x.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="fixed top-0  h-screen max-lg:w-48 xl:ml-72  max-md:w-24 w-[250px] bg-black ">
     
      <img
        className="rounded-full ml-14 pt-2 max-md:ml-10  w-10 h-10 object-cover"
        src={x}
        alt="Logo"
      />

     
      <ul className="mt-2 ml-12 px-2 max-lg:ml-52 max-md:ml-8 ">
        <li>
          <Link
            className="flex items-center gap-4 text-lg p-3 rounded-full hover:bg-zinc-900"
            to="/home"
          >
            <CgHome className="text-xl" />  <span className="hidden md:block">Home</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-4 text-lg p-3 rounded-full hover:bg-zinc-900"
            to="/explore"
          >
            <IoIosSearch className="text-xl" /> <span className="hidden md:block">Explore</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-4 text-lg p-3 rounded-full hover:bg-zinc-900"
            to="/notifications"
          >
            <IoNotificationsOutline className="text-xl" /> <span className="hidden md:block">Notifications</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-4 text-lg p-3 rounded-full hover:bg-zinc-900"
            to="/messages"
          >
            <MdOutlineEmail className="text-xl" /> <span className="hidden md:block">Messages</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-4 text-lg p-3 rounded-full hover:bg-zinc-900"
            to="/grok"
          >
            <VscLayoutSidebarRightOff className="text-xl" /> <span className="hidden md:block">Grok</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-4 text-lg p-3 rounded-full hover:bg-zinc-900"
            to="/communitics"
          >
            <IoPeopleOutline className="text-xl" /> <span className="hidden md:block">Communitics</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-4 text-lg p-3 rounded-full hover:bg-zinc-900"
            to="/profile"
          >
            <RiAccountCircleLine className="text-xl" /> <span className="hidden md:block">Profile</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-4 text-lg p-3 rounded-full hover:bg-zinc-900"
            to="/more"
          >
            <PiDotsThreeCircle className="text-xl" /> <span className="hidden md:block">More</span>
          </Link>
        </li>
      </ul>

     
      <div className="mt-6 px-4 max-lg:w-44 w-72 max-lg:ml-52  max-md:ml-6  max-md:w-28 ">
        <Link
          className="block text-center text-lg p-3 rounded-full bg-white text-black  hover:bg-slate-200 "
          to="/post"
        >
          <span>Post</span>
        </Link>
      </div>

      
      <div className="mt-6 flex items-center max-lg:w-44 max-lg:ml-52 gap-4 p-4 rounded-full hover:bg-zinc-900 max-md:ml-6">
        <img
          className="rounded-full w-12 h-12 object-cover"
          src={pic}
          alt="Profile"
        />
        <div className="flex-1 text-sm hidden md:block ">
          <p>Pawan Maurya</p>
          <p className="text-gray-500"><span className="">Pawanfacts74128</span></p>
        </div>
        <PiDotsThree className="text-xl hidden md:block" />
      </div>
    </div>
    </div>
  );
};

export default Navbar;


