import React from 'react';
import { RiHandHeartFill } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { FiUsers, FiFolder, FiPenTool } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import px from '../../assets/px.jpg';
export default function Subject() {
  return (
    <div className="p-4 mt-8 bg-red-300 rounded-lg">
      <div className="flex flex-col">
        {/* description */}
        <div className="flex justify-between">
          <div className="text-gray-500 ">
            <img
              srcSet={px}
              alt="hand"
              className="object-cover w-full h-12 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Interaction engineering</p>
            <span className="flex items-center">
              <AiOutlineUser />
              sharif ally
            </span>
          </div>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>
        {/* end of description */}
        {/* grid categories */}
        <div className="grid grid-cols-2">
          <div className="flex items-center space-x-8 text-lg">
            <FiFolder size={15} /> B class
          </div>
          <div className="flex items-center space-x-8 text-lg ">
            <FiFolder size={15} /> 3 credit
          </div>
          <div className="flex items-center space-x-8 text-lg ">
            <FiUsers size={15} /> 30 students
          </div>
          <div className="flex items-center space-x-8 text-lg ">
            <BiTime size={15} />
            3hrs/week
          </div>
        </div>

        {/* end of the grid categories */}

        <p className="self-center text-xl text-red-400">view class</p>
      </div>
    </div>
  );
}
