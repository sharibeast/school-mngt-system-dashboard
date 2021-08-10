import React from 'react';

export default function Subject() {
  return (
    <div>
      <div className="flex ">
        <div>mkono</div>
        <div className="flex flex-col">
          <h2>title</h2>
          <p>name</p>
        </div>
        <div>icon</div>
      </div>
      <div className="grid grid-cols-2">
        <div>B class</div>
        <div>3 credit</div>
        <div>30 students</div>
        <div>3 hrs per week</div>
      </div>
      <span className="text-red-300">view class</span>
    </div>
  );
}
