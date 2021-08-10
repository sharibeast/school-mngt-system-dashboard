import React, { useState } from 'react';
import NavList from './NavList';

export default function Nav() {
  return (
    <div className="hidden h-screen md:col-span-2 md:block">
      <span className="text-2xl">Tanatec eLearning</span>
      <div>
        <NavList />
      </div>
    </div>
  );
}
