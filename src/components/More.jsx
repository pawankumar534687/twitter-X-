import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Foryou from "./Foryou";
import Following from "./Following";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white font-bold ml-80 max-md:ml-24 h-[2000px]">
      
      <div className="flex flex-col w-full  bg-black max-md:w-80 md:w-[600px] border-l border-gray-600 border-r ">
       
        <ul className="flex justify-center  bg-black items-center gap-10 md:gap-52 border-b border-gray-600 h-14">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-500"
              }
              to="/home/foryou"
            >
              For You
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-500"
              }
              to="/home/following"
            >
              Following
            </NavLink>
          </li>
        </ul>

       
        <div className="border-b border-gray-600 h-44 max-md:h-16"></div>
        <div className="flex items-center justify-center  text-2xl text-yellow-500">This is More Page</div>

        
        <Routes>
          <Route path="foryou" element={<Foryou />} />
          <Route path="following" element={<Following />} />
        </Routes>
      </div>

     
      <div className="w-full hidden xl:block md:w-[400px] p-4">
      
        <div className="mb-4">
          <input
            type="text"
            className="bg-zinc-800  rounded-full w-full md:w-[350px] h-12 p-4"
            placeholder="Search"
          />
        </div>

        
        <div className="bg-neutral-900 p-4 rounded-2xl border border-gray-600 mb-6">
          <h2 className="text-lg">Try premium for free today</h2>
          <p className="text-sm font-semibold">
            Lorem ipsum dolor sit amet blanditiis corrupti pariatur dolorem
            repellendus ad ex?
          </p>
          <button className="bg-slate-100 text-black text-sm rounded-full h-8 w-full md:w-44 mt-4">
            Start 14-days free trial
          </button>
        </div>

       
        <div className="bg-neutral-900 h-[500px]  p-4 rounded-2xl border border-gray-600 mb-6">
          <h2 className="text-lg">What's happening</h2>
          <div className="mt-44 text-center text-gray-400">Content</div>
        </div>

       
        <div className="bg-neutral-900 h-80 p-4 rounded-2xl border border-gray-600">
          <h2 className="text-lg">Who to Follow</h2>
          <div className="mt-20 text-center text-gray-400">Content</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
