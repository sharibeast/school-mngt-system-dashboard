import React, { useState } from 'react';
import NavList from './NavList';

export default function Nav() {
  return (
    <div className="hidden md:block">
      <span className="text-2xl">Tanatec eLearning</span>
      <div>
        <NavList />
        <NavList />
        <NavList />
        <NavList />
        <NavList />
        <NavList />
      </div>
    </div>
  );
}
