import React from 'react';
import { HiOutlineViewGrid } from 'react-icons/hi';

export default function NavList() {
  return (
    <div>
      <div className="flex items-center w-1/2 h-10 bg-red-100 rounded-lg">
        <HiOutlineViewGrid size={20} className="ml-4" />
        <h2 className="text-lg text-gray-800">Dashboard</h2>
        {/* <div className="p-1 mr-2 text-sm font-bold text-green-700 bg-black rounded-xl">
          new
        </div> */}
      </div>
    </div>
  );
}
