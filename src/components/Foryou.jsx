import React from 'react'
import { FaRegComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import video from '../assets/video.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'
import video5 from '../assets/video5.mp4'
import video6 from '../assets/video6.mp4'


const Foryou = () => {
  return (
    <div >
      <div className='' >
       
        <div className='ml-4'>User Name</div>
        <div className='m-4'>Caption</div>
        <div className=' w-[510px] h-[450px] max-md:w-72 max-md:mx-auto border   border-gray-600 ml-16 mt-4 rounded-2xl '>
          <div className='w-full h-full justify-center  flex item-center'>
          <video className='' controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>

        <div className=' border-b border-gray-600 flex gap-32 pb-8 justify-evenly' >
          <FaRegComment />
          <CiHeart />
          <CiBookmarkPlus />



        </div>
      </div>
      <div className='' >
        <div className='ml-4'>User Name</div>
        <div className='m-4'>Caption</div>
        <div className=' w-[510px] h-[450px] max-md:w-72 max-md:mx-auto  border  border-gray-600 ml-16 mt-4 rounded-2xl '>
        <div className='w-full h-full justify-center flex item-center'>
          <video className='' controls>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>

        <div className=' border-b border-gray-600 flex gap-32 pb-8 justify-evenly' >
          <FaRegComment />
          <CiHeart />
          <CiBookmarkPlus />



        </div>
      </div>
      <div className='' >
        <div className='ml-4'>User Name</div>
        <div className='m-4'>Caption</div>
        <div className=' w-[510px] h-[450px] max-md:w-72 max-md:mx-auto border  border-gray-600 ml-16 mt-4 rounded-2xl '>
          <div className='w-full h-full justify-center flex item-center'>
            <video className='' controls>
              <source src={video3} type="video/mp4" />

            </video>
          </div>
        </div>

        <div className=' border-b border-gray-600 flex gap-32 pb-8 justify-evenly' >
          <FaRegComment />
          <CiHeart />
          <CiBookmarkPlus />



        </div>
      </div>
      <div className='' >
        <div className='ml-4'>User Name</div>
        <div className='m-4'>Caption</div>
        <div className=' w-[510px] h-[450px] max-md:w-72 max-md:mx-auto border  border-gray-600 ml-16 mt-4 rounded-2xl '>
        <div className='w-full h-full justify-center flex item-center'>
            <video className='' controls>
              <source src={video4} type="video/mp4" />

            </video>
          </div>
        </div>

        <div className=' border-b border-gray-600 flex gap-32 pb-8 justify-evenly' >
          <FaRegComment />
          <CiHeart />
          <CiBookmarkPlus />



        </div>
      </div>
      <div className='' >
        <div className='ml-4'>User Name</div>
        <div className='m-4'>Caption</div>
        <div className=' w-[510px] h-[450px] max-md:w-72 max-md:mx-auto border  border-gray-600 ml-16 mt-4 rounded-2xl '>
        <div className='w-full h-full justify-center flex item-center'>
            <video className='' controls>
              <source src={video5} type="video/mp4" />

            </video>
          </div>
        </div>

        <div className=' border-b border-gray-600 flex gap-32 pb-8 justify-evenly' >
          <FaRegComment />
          <CiHeart />
          <CiBookmarkPlus />



        </div>
      </div>
      <div className='' >
        <div className='ml-4'>User Name</div>
        <div className='m-4'>Caption</div>
        <div className=' w-[510px] h-[450px] max-md:w-72 max-md:mx-auto border  border-gray-600 ml-16 mt-4 rounded-2xl '>
        <div className='w-full h-full justify-center flex item-center'>
            <video className='' controls>
              <source src={video6} type="video/mp4" />

            </video>
          </div>
        </div>

        <div className=' border-b border-gray-600 flex gap-32 pb-8 justify-evenly' >
          <FaRegComment />
          <CiHeart />
          <CiBookmarkPlus />



        </div>
      </div>
     
    </div>
  )
}

export default Foryou
